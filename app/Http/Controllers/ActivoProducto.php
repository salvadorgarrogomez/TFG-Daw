<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class ActivoProducto extends Controller
{
    public function activo(Request $request, $id)
    {
        $producto = Producto::findOrFail($id);
        // Actualiza el usuario_id y el estado activo
        $producto->fill([
            'usuario_id' => $request->input('usuario_id'),
            'activo' => !$producto->activo,
        ]);
        $producto->save();

        return response()->json([
            'message' => 'Estado de producto actualizado',
            'activo' => $producto->activo
        ]);
    }

}

