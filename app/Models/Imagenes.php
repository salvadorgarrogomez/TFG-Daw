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

    // Hook para actualizar automáticamente la fecha, y saber asi cuando se le realizo el ultimo cambio
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->fecha_hora = now(); 
        });
    }

}