<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Principal;
use App\Http\Controllers\Imagenes;
use App\Http\Controllers\Login;
use App\Http\Controllers\UpdateProducto;
use App\Http\Controllers\UpdateCategoria;
use App\Http\Controllers\InsertarProducto;
use App\Http\Controllers\InsertarCategoria;
use App\Http\Controllers\EliminarCategoria;
use App\Http\Controllers\EliminarProducto;

// Rutas para poder utilizar las clases implementadas de la api en el Controladdor Principal
Route::get('/productos', action: [Principal::class, 'productos']);
Route::get('/categorias', action: [Principal::class, 'categorias']);
Route::get('/todas_categorias', action: [Principal::class, 'categoriasSinExcepciones']);
Route::get('/productos/categoria/{categoria_id}', [Principal::class, 'productosPorCategoria']);

// Rutas para poder utilizar las clases implementadas de la api en el Controladdor de imagenes
Route::get('/imagenes', action: [Imagenes::class, 'galeriaImagenes']);
Route::post('/subir-imagen', action: [Imagenes::class, 'subirImagen']);

Route::post('/login', [Login::class, 'login']);
Route::post('/logout', [Login::class, 'logout']);
Route::get('/admin', [Login::class, 'adminOnly']);
Route::get('/usuarios', [Login::class, 'usuarios']);

Route::put('/productos/{id}', [UpdateProducto::class, 'update']);
Route::put('/categoria/{id}', [UpdateCategoria::class, 'update']);

Route::post('/producto/nuevo', [InsertarProducto::class, 'insert']);
Route::post('/categoria/nuevo', [InsertarCategoria::class, 'insert']);

Route::delete('/categoria/eliminar/{id}', [EliminarCategoria::class, 'delete']);
Route::delete('/producto/eliminar/{id}', [EliminarProducto::class, 'delete']);
