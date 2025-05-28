<?php


namespace App\Http\Controllers;

use App\Models\Categoria;

class EliminarCategoria extends Controller
{
    public function delete($id)
    {
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return response()->json(['message' => 'Categoría no encontrada'], 404);
        }

        $categoria->delete();

        return response()->json(['message' => 'Categoría eliminada'], 200);
    }
}
