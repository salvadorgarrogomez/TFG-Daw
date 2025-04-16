<?php

// app/Http/Controllers/ProductoController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;  // Asegúrate de importar DB para usar las consultas

class UpdateProducto extends Controller
{
    public function update(Request $request, $id)
    {
        // Validar los datos recibidos
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
            'precio' => 'required|numeric',
            'categoria_id' => 'required|numeric',
            'tipo_plato' => 'required|string',
            'tipo_porcion' => 'required|string',
            'es_vegetariano' => 'boolean',
            'es_vegano' => 'boolean',
            'es_sin_gluten' => 'boolean',
            'es_sin_lactosa' => 'boolean',
        ]);

        // Ejecutar la consulta de actualización usando DB::table
        $updated = DB::table('productos')
            ->where('id', $id)
            ->update([
                'nombre' => $validatedData['nombre'],
                'description' => $validatedData['description'],
                'precio' => $validatedData['precio'],
                'categoria_id' => $validatedData['categoria_id'], // Si este es el nombre de la categoría, puede que necesites usar el id de la categoría
                'tipo_plato' => $validatedData['tipo_plato'],
                'tipo_porcion' => $validatedData['tipo_porcion'],
                'es_vegetariano' => $validatedData['es_vegetariano'],
                'es_vegano' => $validatedData['es_vegano'],
                'es_sin_gluten' => $validatedData['es_sin_gluten'],
                'es_sin_lactosa' => $validatedData['es_sin_lactosa'],
            ]);

        if ($updated) {
            return response()->json(['message' => 'Producto actualizado correctamente'], 200);
        } else {
            return response()->json(['message' => 'No se encontró el producto o no se realizaron cambios'], 404);
        }
    }
}
