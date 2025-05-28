<?php


namespace App\Http\Controllers;

use App\Models\Imagenes;

class EliminarImagen extends Controller
{
    public function delete($id)
    {
        $imagen = Imagenes::find($id);

        if (!$imagen) {
            return response()->json(['message' => 'imagen no encontrada'], 404);
        }

        $imagen->delete();

        return response()->json(['message' => 'imagen eliminada'], 200);
    }
}