<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Usuario extends Model implements JWTSubject
{
    use HasFactory;

    // Define la tabla si no es el nombre por defecto 'usuarios'
    protected $table = 'usuarios';

    // Define los campos que pueden ser asignados masivamente
    protected $fillable = [
        'id',
        'nombre',
        'contrasenia',
        'rol',
    ];

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
