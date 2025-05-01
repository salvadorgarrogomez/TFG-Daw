<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Cookie;
use Illuminate\Support\Facades\DB;

class Login extends Controller
{
    public function login(Request $request)
    {
        try {
            $usuario = $request->input('nombre');
            $contrasena = $request->input('contrasenia');

            $user = Usuarios::where('nombre', $usuario)->first();

            if ($user && $user->contrasenia == $contrasena) {
                $token = JWTAuth::fromUser($user);

                // Se crea una cookie segura con el token, para asi validar la entrada de datos a la BBDD, tiempo de expiracion 60 min.
                $cookie = cookie('token', $token, 60, null, null, true, true, false, 'Strict');

                return response()->json([
                    'nombre' => $user->nombre,
                    'rol' => $user->rol,
                    'id' => $user->id
                ])->withCookie($cookie);
            }

            return response()->json([
                'status' => 'error',
                'message' => 'Usuario o contraseña incorrectos.'
            ], 401);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error en el servidor: ' . $e->getMessage()
            ], 500);
        }
    }

    public function adminOnly(Request $request)
    {
        try {
            $token = $request->cookie('token');

            if (!$token) {
                return response()->json(['message' => 'Token no encontrado'], 401);
            }

            $user = JWTAuth::setToken($token)->authenticate();

            if (!$user) {
                return response()->json(['message' => 'Usuario no encontrado'], 404);
            }

            if ($user->rol !== 'admin') {
                return response()->json(['message' => 'Acceso denegado'], 403);
            }

            return response()->json([
                'message' => 'Acceso permitido',
                'usuario' => [
                    'id' => $user->id,
                    'nombre' => $user->nombre,
                    'rol' => $user->rol,
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al autenticar',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function logout()
    {
        return response()->json(['message' => 'Sesión cerrada'])
            ->withCookie(cookie()->forget('token'));
    }
}
