<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class UpdateCategoria extends Controller
{
    public function update(Request $request, $id)
    {
        $data = $request->only([
            'nombre',
            'descripcion',
            'usuario_id'
        ]);

        $producto = Categoria::findOrFail($id);
        $producto->fill($data);
        $producto->save(); // Aquí se ejecutará tu hook de `updating` y pondrá usuario_id automáticamente

        return response()->json(['message' => 'Producto actualizado']);
    }
}