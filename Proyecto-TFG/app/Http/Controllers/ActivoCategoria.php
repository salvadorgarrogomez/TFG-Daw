<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class ActivoCategoria extends Controller
{
    public function activo($id)
    {
        $producto = Categoria::findOrFail($id);
        $producto->activo = !$producto->activo; // Cambia true a false o viceversa
        $producto->save();
    
        return response()->json([
            'message' => 'Estado de producto actualizado',
            'activo' => $producto->activo
        ]);
    }
    
}