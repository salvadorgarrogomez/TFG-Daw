<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoActivo extends Controller
{
    public function activo($id)
    {
        $producto = Producto::findOrFail($id);
        $producto->activo = !$producto->activo; // Cambia true a false o viceversa
        $producto->save();
    
        return response()->json([
            'message' => 'Estado de producto actualizado',
            'activo' => $producto->activo
        ]);
    }
    
}

