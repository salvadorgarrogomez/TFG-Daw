<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class UpdateProducto extends Controller
{
    public function update(Request $request, $id)
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

        $producto = Producto::findOrFail($id);
        $producto->fill($data);
        $producto->save(); // Aquí se ejecutará tu hook de `updating` y pondrá usuario_id automáticamente

        return response()->json(['message' => 'Producto actualizado']);
    }
}

