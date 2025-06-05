<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Imagenes extends Controller
{

    public function galeriaImagenes()
    {
        try {
            // Obtencion de todas las imágenes ordenadas por ID desde la base de datos
            $imagenes = collect(DB::select("SELECT * FROM imagenes ORDER BY id"));
            // Conversion de cada imagen en base64 y asegurar el tipo MIME 
            // ((Multipurpose Internet Mail Extensions) es una forma estandarizada de indicar el formato y la naturaleza de un archivo, documento o conjunto de datos. )
            $imagenes = $imagenes->map(function ($imagen) {
                $contenido = null;
                // Si el contenido de la imagen es un recurso
                if (is_resource($imagen->imagen)) {
                    $contenido = stream_get_contents($imagen->imagen);
                }
                // Si ya viene como string binario
                elseif (is_string($imagen->imagen)) {
                    $contenido = $imagen->imagen;
                }
                // Si se obtuvo contenido, convertirlo a base64
                if ($contenido) {
                    $imagen->imagen_base64 = base64_encode($contenido);
                } else {
                    $imagen->imagen_base64 = null;
                }
                // Si no hay MIME type definido, se asume el tipo image/jpeg por defecto
                if (!isset($imagen->mime_type) || $imagen->mime_type == null) {
                    $imagen->mime_type = 'image/jpeg';
                }
                // Eliminar el campo original binario para no enviarlo en el JSON
                unset($imagen->imagen);
                return $imagen;
            });
            // Devuelve todas las imágenes procesadas como JSON
            return response()->json($imagenes);

        } catch (\Exception $e) {
            // En caso de error, devuelve mensaje y detalle
            return response()->json([
                'message' => 'Error al cargar imágenes',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    public function subirImagen(Request $request)
    {
        // Comprobaciion de que la imagene recibida del front es una imagen válida y de tamaño máximo 2MB
        $request->validate([
            'imagen' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'usuario_id' => 'required|integer'
        ]);
        // Obteneción del archivo del formulario
        $archivo = $request->file('imagen');
        // Se verifica que el archivo sea válido
        if ($archivo && $archivo->isValid()) {
            // Lectura del contenido binario del archivo
            $imagenBinaria = file_get_contents($archivo);
            // Obtención de la descripción opcional desde el formulario
            $descripcion = trim($request->input('descripcion') ?? '');
            $usuario_id = $request->input('usuario_id');
            // Se prepara la conexión directa con PDO
            $pdo = DB::connection()->getPdo();
            // Insertar imagen binaria en la base de datos con una consulta preparada
            $stmt = $pdo->prepare("INSERT INTO imagenes (descripcion, imagen, usuario_id) VALUES (:descripcion, :imagen, :usuario_id)");
            $stmt->bindParam(':descripcion', $descripcion, \PDO::PARAM_STR);
            $stmt->bindParam(':imagen', $imagenBinaria, \PDO::PARAM_LOB); // Se indica que es un campo binario (LOB)
            $stmt->bindParam(':usuario_id', $usuario_id, \PDO::PARAM_INT);
            // Ejecución de la inserción
            $stmt->execute();
            // Devuelve la respuesta de éxito
            return response()->json(['message' => 'Imagen subida con éxito'], 200);
        }
        // Aviso de intento de inserccion no valida.
        return response()->json(['message' => 'No se recibió ninguna imagen'], 400);
    }

}
