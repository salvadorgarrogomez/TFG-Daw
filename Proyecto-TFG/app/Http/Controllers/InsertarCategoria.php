<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class InsertarCategoria extends Controller
{
    public function insert(Request $request)
    {
        $data = $request->only([
            'nombre',
            'descripcion',
            'usuario_id'
        ]);

        $producto = new Categoria();
        $producto->fill($data);
        $producto->save(); // Aquí se ejecutará tu hook de `updating` y pondrá usuario_id automáticamente

        return response()->json(['message' => 'Categoria añadida'], 201);
    }
}