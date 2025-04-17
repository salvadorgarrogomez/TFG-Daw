<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'description',
        'precio',
        'categoria_id',
        'tipo_plato',
        'tipo_porcion',
        'es_vegetariano',
        'es_vegano',
        'es_sin_gluten',
        'es_sin_lactosa',
        'usuario_id'
    ];

}

