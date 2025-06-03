<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class InsertarProducto extends Controller
{
    public function insert(Request $request)
    {
        $data = $request->only([
            'nombre',
            'description',
            'precio',
            'categoria_id',
            'tipo_plato',
            'tipo_porcion',
            'contiene_gluten',
            'contiene_crustaceos',
            'contiene_huevos',
            'contiene_pescado',
            'contiene_cacahuetes',
            'contiene_soja',
            'contiene_lacteos',
            'contiene_frutos_de_cascara',
            'contiene_apio',
            'contiene_mostaza',
            'contiene_granos_de_sesamo',
            'contiene_sulfitos',
            'contiene_moluscos',
            'contiene_altramuces',
            'usuario_id'
        ]);

        if (!isset($data['description']) || $data['description'] === null) {
            $data['description'] = '';
        }

        // VALIDACIÓN de duplicado:
        $existe = Producto::where('nombre', $data['nombre'])
            ->where('tipo_porcion', $data['tipo_porcion'])
            ->exists();

        if ($existe) {
            return response()->json([
                'message' => 'Ya existe un producto con ese nombre y tipo de porción.'
            ], 409); // 409 Conflict
        }

        $producto = new Producto();
        $producto->fill($data);
        $producto->save();

        return response()->json(['message' => 'Producto insertado'], 201);
    }

}