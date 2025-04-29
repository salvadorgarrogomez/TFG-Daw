<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

class Principal extends Controller
{

    // Consulta para mostrar todos los productos al llamar a la api
    public function productos()
    {
        $productos = DB::select('SELECT productos.id, productos.nombre, productos.description, productos.precio, categorias.nombre AS nombre_categoria, productos.tipo_plato, 
            productos.tipo_porcion, productos.contiene_gluten, productos.contiene_crustaceos, productos.contiene_huevos, productos.contiene_pescado, productos.contiene_cacahuetes, productos.contiene_soja, 
            productos.contiene_lacteos, productos.contiene_frustos_de_cascara, productos.contiene_apio, productos.contiene_mostaza, productos.contiene_granos_de_sesamo, productos.contiene_sulfitos, 
            productos.contiene_moluscos, productos.contiene_altramuces   
            FROM productos
            INNER JOIN categorias ON productos.categoria_id = categorias.id
            ORDER BY id;');
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

    public function categoriasSinExcepciones()
    {
        $categorias = DB::select('SELECT * FROM categorias ORDER BY id');
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
