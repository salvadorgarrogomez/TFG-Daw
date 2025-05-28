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

        $producto = new Producto();
        $producto->fill($data);
        $producto->save(); 

        return response()->json(['message' => 'Producto insertado'], 201);
    }
}