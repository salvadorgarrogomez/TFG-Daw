<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Usuarios extends Authenticatable implements JWTSubject
{
    // Define la tabla 'usuarios'
    protected $table = 'usuarios';

    // Define los campos que pueden ser asignados masivamente
    protected $fillable = [
        'id',
        'nombre',
        'contrasenia',
        'rol',
    ];

    public $timestamps = false;

    // Implementa los métodos de JWTSubject
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
