<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

class Principal extends Controller
{

    // Consulta preparada, para obtener todos los productos de la base de datos, a esta se le llama desde su Endpoint, para servir los datos.
    public function productos()
    {
        $productos = DB::select('SELECT productos.id, productos.nombre, productos.description, productos.precio, categorias.nombre AS nombre_categoria, productos.tipo_plato, 
            productos.tipo_porcion, productos.contiene_gluten, productos.contiene_crustaceos, productos.contiene_huevos, productos.contiene_pescado, productos.contiene_cacahuetes, productos.contiene_soja, 
            productos.contiene_lacteos, productos.contiene_frutos_de_cascara, productos.contiene_apio, productos.contiene_mostaza, productos.contiene_granos_de_sesamo, productos.contiene_sulfitos, 
            productos.contiene_moluscos, productos.contiene_altramuces, productos.activo   
            FROM productos
            INNER JOIN categorias ON productos.categoria_id = categorias.id
            ORDER BY id;');
        $productos = array_map(function ($producto) {
            return $producto;
        }, $productos);
        return response()->json($productos);
    }

    // Consulta preparada para mostrar todas las categorias en orden de id asc por defecto.
    public function categoriasTodas()
    {
        $categorias = DB::select('SELECT * FROM categorias ORDER BY id');
        $categorias = array_map(function ($categoria) {
            return $categoria;
        }, $categorias);
        return response()->json($categorias);
    }

    // Consulta SQL para mostrar solo las categorias con el activo=true, que sera utilizada en partes muy especificas de la web.
    public function categorias()
    {
        $categorias = DB::select('SELECT * FROM categorias WHERE activo = TRUE ORDER BY id');
        $categorias = array_map(function ($categoria) {
            return $categoria;
        }, $categorias);
        return response()->json($categorias);
    }


    // Consulta preparada, para mostrar los productos en base a su categoria, obteniendo solo los que tengan la columna activo=true
    public function productosPorCategoria($categoria_id)
    {
        $productos = DB::select('SELECT * FROM productos WHERE categoria_id = ? AND activo = TRUE ORDER BY id', [$categoria_id]);
        if (empty($productos)) {
            return response()->json(['message' => 'No hay productos activos en esta categoría'], 404);
        }

        return response()->json($productos);
    }

}
