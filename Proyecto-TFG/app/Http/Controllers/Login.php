<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\DB;

class Login extends Controller
{
    public function login(Request $request)
    {
        try {
            $usuario = $request->input('nombre');
            $contrasena = $request->input('contrasenia');

            // Buscar al usuario usando el modelo Usuario
            $user = Usuario::where('nombre', $usuario)->first();

            // Si el usuario existe y las contraseñas coinciden en texto plano
            if ($user && $user->contrasenia == $contrasena) {
                // Generamos el token JWT para el usuario
                $token = JWTAuth::fromUser($user);

                return response()->json([
                    'status' => 'ok',
                    'token' => $token,
                    'nombre' => $user->nombre,
                    'contrasenia' => $user->contrasenia,
                    'id' => $user->id,
                    'rol' => $user->rol
                ]);
            }

            // Si las credenciales son incorrectas
            return response()->json([
                'status' => 'error',
                'message' => 'Usuario o contraseña incorrectos.'
            ], 401);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Ocurrió un error en el servidor: ' . $e->getMessage()
            ], 500);
        }
    }

    public function usuarios()
    {
        $usuarios = DB::select('SELECT * FROM usuarios');
        $usuarios = array_map(function ($usuario) {
            return $usuario;
        }, $usuarios);
        return response()->json($usuarios);
    }


}
