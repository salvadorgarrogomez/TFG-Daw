<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Principal;
use App\Http\Controllers\Imagenes;

// Rutas para poder utilizar las clases implementadas de la api en el Controladdor Principal
Route::get('/productos', action: [Principal::class, 'productos']);
Route::get('/categorias', action: [Principal::class, 'categorias']);
Route::get('/productos/categoria/{categoria_id}', [Principal::class, 'productosPorCategoria']);

// Rutas para poder utilizar las clases implementadas de la api en el Controladdor de imagenes
Route::get('/imagenes', action: [Imagenes::class, 'galeriaImagenes']);
Route::post('/subir-imagen', action: [Imagenes::class, 'subirImagen']);