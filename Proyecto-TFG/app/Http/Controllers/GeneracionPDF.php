<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use App\Models\Producto;

class GeneracionPDF extends Controller
{
    public function generarPdf(Request $request)
    {
        $ids = $request->input('productos');
        $categoria = $request->input('categoria');

        $productos = Producto::with(['categoria'])
            ->whereIn('id', $ids)
            ->where('activo', true)
            ->orderBy('id')
            ->get();

        $categoriaNombre = $categoria === 'todas' ? 'Todas las categorías' : $categoria;
        $logo = base64_encode(file_get_contents(public_path('imgs/logoBar2.1.png')));
        $logoSrc = 'data:image/png;base64,' . $logo;


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
                $base64 = base64_encode(file_get_contents($path));
                $imagenesPorcion[$tipo] = 'data:image/png;base64,' . $base64;
            } else {
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
    }
}