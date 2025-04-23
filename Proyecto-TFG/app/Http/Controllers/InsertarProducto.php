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
            'es_vegetariano',
            'es_vegano',
            'es_sin_gluten',
            'es_sin_lactosa',
            'usuario_id'
        ]);

        $producto = new Producto();
        $producto->fill($data);
        $producto->save(); 

        return response()->json(['message' => 'Producto insertado'], 201);
    }
}