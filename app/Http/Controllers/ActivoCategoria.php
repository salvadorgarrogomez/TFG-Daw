<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class ActivoCategoria extends Controller
{
    public function activo(Request $request, $id)
    {
        $categoria = Categoria::findOrFail($id);
        // Actualiza el usuario_id y el estado activo
        $categoria->fill([
            'usuario_id' => $request->input('usuario_id'),
            'activo' => !$categoria->activo,
        ]);
        $categoria->save();

        return response()->json([
            'message' => 'Estado de categoría actualizado',
            'activo' => $categoria->activo
        ]);
    }
}
