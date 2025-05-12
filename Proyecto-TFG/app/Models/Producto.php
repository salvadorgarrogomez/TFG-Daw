<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Categoria;

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
        'contiene_gluten',
        'contiene_crustaceos',
        'contiene_huevos',
        'contiene_pescado',
        'contiene_cacahuetes',
        'contiene_soja',
        'contiene_lacteos',
        'contiene_frutos_de_cascara',
        'contiene_apio',
        'contiene_mostaza',
        'contiene_granos_de_sesamo',
        'contiene_sulfitos',
        'contiene_moluscos',
        'contiene_altramuces',
        'usuario_id',
        'activo'
    ];

    // Relación con la categoría
    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }

    // Hook para actualizar automáticamente la fecha
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->fecha_hora = now();
        });
    }
}

