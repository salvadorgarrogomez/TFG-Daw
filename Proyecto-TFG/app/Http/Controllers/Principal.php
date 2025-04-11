<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

class Principal extends Controller
{

    // Consulta para mostrar todos los productos al llamar a la api
    public function productos()
    {
        $productos = DB::select('SELECT * FROM productos');
        $productos = array_map(function ($producto) {
            return $producto;
        }, $productos);
        return response()->json($productos);
    }

    // Consulta para mostrar todas las categorias, menos 2 id especificados, para que no aparezcan en la consulta, en orden de id
    public function categorias()
    {
        $categorias = DB::select('SELECT * FROM categorias WHERE id NOT IN (0, 14) ORDER BY id');
        $categorias = array_map(function ($categoria) {
            return $categoria;
        }, $categorias);
        return response()->json($categorias);
    }


    // Consulta preparada, para mostrar todos lo productos en base al id de la categoria requerida
    public function productosPorCategoria($categoria_id)
    {
        $productos = DB::select('SELECT * FROM productos WHERE categoria_id = ? ORDER BY id', [$categoria_id]);
        if (empty($productos)) {
            return response()->json(['message' => 'No hay productos en esta categoría'], 404);
        }
        return response()->json($productos);
    }
}
