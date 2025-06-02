<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use App\Models\Producto;
use Illuminate\Support\Facades\Log;

class GeneracionPDF extends Controller
{
    public function generarPdf(Request $request)
    {
        try {
            $ids = $request->input('productos');
            $categoria = $request->input('categoria');

            $productos = Producto::with(['categoria'])
                ->whereIn('id', $ids)
                ->where('activo', true)
                ->orderBy('id')
                ->get();

            $categoriaNombre = $categoria === 'todas' ? 'Todas las categorías' : $categoria;
            $logoPath = public_path('imgs/logoBar2.1.png');
            if (file_exists($logoPath)) {
                $logo = base64_encode(file_get_contents($logoPath));
                $logoSrc = 'data:image/png;base64,' . $logo;
            } else {
                $logoSrc = null; // o alguna imagen por defecto si lo prefieres
            }



            // Mapeo entre tipo_porcion y nombre de archivo
            $mapaImagenes = [
                'Ración completa' => 'completo-circulo.png',
                'Media ración' => 'medio-circulo.png',
                'Por unidad' => 'unidad.png',
            ];

            $mapaAlergeneos = [
                'contiene_gluten' => 'alergenos/gluten.png',
                'contiene_crustaceos' => 'alergenos/crustaceos.png',
                'contiene_huevos' => 'alergenos/huevos.png',
                'contiene_pescado' => 'alergenos/pescado.png',
                'contiene_cacahuetes' => 'alergenos/cacahuetes.png',
                'contiene_soja' => 'alergenos/soja.png',
                'contiene_lacteos' => 'alergenos/lacteos.png',
                'contiene_frutos_de_cascara' => 'alergenos/cascaras.png',
                'contiene_apio' => 'alergenos/apio.png',
                'contiene_mostaza' => 'alergenos/mostaza.png',
                'contiene_granos_de_sesamo' => 'alergenos/sesamo.png',
                'contiene_sulfitos' => 'alergenos/sulfitos.png',
                'contiene_moluscos' => 'alergenos/moluscos.png',
                'contiene_altramuces' => 'alergenos/altramuces.png',
            ];

            $imagenesPorcion = [];
            foreach ($productos as $producto) {
                $tipo = $producto->tipo_porcion;
                $archivo = $mapaImagenes[$tipo] ?? 'default.png';
                $path = public_path("imgs/$archivo");
                if (file_exists($path)) {
                    $mime = mime_content_type($path);
                    $base64 = base64_encode(file_get_contents($path));
                    $imagenesPorcion[$tipo] = "data:$mime;base64,$base64";
                } else {
                    Log::warning("Imagen no encontrada para porción: $tipo en $path");
                    $imagenesPorcion[$tipo] = null;
                }


            }

            $alergenosPorProducto = [];
            foreach ($productos as $producto) {
                $alergenos = [];
                foreach ($mapaAlergeneos as $campo => $rutaImagen) {
                    if ($producto->$campo) {
                        $path = public_path("imgs/$rutaImagen");
                        if (file_exists($path)) {
                            $base64 = base64_encode(file_get_contents($path));
                            $alergenos[] = 'data:image/png;base64,' . $base64;
                        }
                    }
                }
                $alergenosPorProducto[$producto->id] = $alergenos;
            }

            $alergenosDisponibles = [];
            foreach ($mapaAlergeneos as $campo => $rutaImagen) {
                $path = public_path("imgs/$rutaImagen");
                if (file_exists($path)) {
                    $base64 = base64_encode(file_get_contents($path));
                    $alergenosDisponibles[] = [
                        'nombre' => ucfirst(str_replace('contiene_', '', $campo)),
                        'imagen' => 'data:image/png;base64,' . $base64
                    ];
                }
            }


            $pdf = Pdf::loadView('productos-pdf', [
                'productos' => $productos,
                'categoriaNombre' => $categoriaNombre,
                'imagenesPorcion' => $imagenesPorcion,
                'alergenosPorProducto' => $alergenosPorProducto,
                'alergenosDisponibles' => $alergenosDisponibles,
                'logo' => $logoSrc
            ]);

            return response($pdf->output(), 200)
                ->header('Content-Type', 'application/pdf')
                ->header('Content-Disposition', 'attachment; filename="productos.pdf"');
        } catch (\Throwable $e) {
            Log::error("Error generando PDF: " . $e->getMessage());
            return response()->json(['error' => 'Error interno al generar el PDF'], 500);
        }
    }
}