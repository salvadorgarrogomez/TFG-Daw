<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Principal extends Controller
{

    public function index()
    {
        return view('principal');
    }

    public function productos()
    {
        // Realizamos la consulta a la tabla productos
        $productos = DB::select('SELECT * FROM productos');

        // Limpiar los productos antes de devolverlos, por ejemplo, eliminando valores null
        $productos = array_map(function ($producto) {
            if (is_null($producto->descripcion)) {
                $producto->descripcion = "Descripción no disponible";  // Puedes poner un valor por defecto
            }
            return $producto;
        }, $productos);

        // Devolvemos los productos en formato JSON
        return response()->json($productos);
    }

    public function categorias()
    {
        // Realizamos la consulta a la tabla productos
        $categorias = DB::select('SELECT * FROM categorias WHERE id NOT IN (0, 14) ORDER BY id;
');

        // Limpiar los productos antes de devolverlos, por ejemplo, eliminando valores null
        $categorias = array_map(function ($categoria) {
            return $categoria;
        }, $categorias);

        // Devolvemos los productos en formato JSON
        return response()->json($categorias);
    }


    public function productosPorCategoria($categoria_id)
    {
        // Consulta para obtener productos de la categoría seleccionada
        $productos = DB::select('SELECT * FROM productos WHERE categoria_id = ? ORDER BY id', [$categoria_id]);

        // Verificar si hay productos en la categoría
        if (empty($productos)) {
            return response()->json(['message' => 'No hay productos en esta categoría'], 404);
        }

        return response()->json($productos);
    }

}
