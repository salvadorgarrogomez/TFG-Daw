<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Imagenes extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'id',
        'descripcion',
        'imagen',
        'usuario_id'
    ];

}