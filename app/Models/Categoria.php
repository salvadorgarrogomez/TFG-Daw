<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'descripcion',
        'usuario_id',
        'activo'
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