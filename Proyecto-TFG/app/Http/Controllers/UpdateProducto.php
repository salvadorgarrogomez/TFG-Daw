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
            'contiene_gluten',
            'contiene_crustaceos',
            'contiene_huevos',
            'contiene_pescado',
            'contiene_cacahuetes',
            'contiene_soja',
            'contiene_lacteos',
            'contiene_frustos_de_cascara',
            'contiene_apio',
            'contiene_mostaza',
            'contiene_granos_de_sesamo',
            'contiene_sulfitos',
            'contiene_moluscos',
            'contiene_altramuces',
            'usuario_id'
        ]);

        $producto = Producto::findOrFail($id);
        $producto->fill($data);
        $producto->save(); // Aquí se ejecutará tu hook de `updating` y pondrá usuario_id automáticamente

        return response()->json(['message' => 'Producto actualizado']);
    }
}

