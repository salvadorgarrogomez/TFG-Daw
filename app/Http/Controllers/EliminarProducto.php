<?php


namespace App\Http\Controllers;

use App\Models\Producto;

class EliminarProducto extends Controller
{
    public function delete($id)
    {
        $producto = Producto::find($id);

        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $producto->delete();

        return response()->json(['message' => 'Prodcuto eliminada'], 200);
    }
}
