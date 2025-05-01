<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Principal;
use App\Http\Controllers\Imagenes;
use App\Http\Controllers\Login;
use App\Http\Controllers\UpdateProducto;
use App\Http\Controllers\ActivoProducto;
use App\Http\Controllers\ActivoCategoria;
use App\Http\Controllers\UpdateCategoria;
use App\Http\Controllers\InsertarProducto;
use App\Http\Controllers\InsertarCategoria;
use App\Http\Controllers\EliminarCategoria;
use App\Http\Controllers\EliminarProducto;
use App\Http\Controllers\EliminarImagen;

// Rutas para poder utilizar las clases implementadas de la api en el Controladdor Principal
Route::get('/productos', action: [Principal::class, 'productos']);
Route::get('/categorias', action: [Principal::class, 'categorias']);
Route::get('/categorias/todas', action: [Principal::class, 'categoriasTodas']);
Route::get('/productos/categoria/{categoria_id}', [Principal::class, 'productosPorCategoria']);

// Rutas para poder utilizar las clases implementadas de la api en el Controladdor de imagenes
Route::get('/imagenes', action: [Imagenes::class, 'galeriaImagenes']);
Route::post('/subir-imagen', action: [Imagenes::class, 'subirImagen']);

// Rutas para que los usuarios se puedan logear en la web, accediendo al backend y editar ciertos registros.
Route::post('/login', [Login::class, 'login']);
Route::post('/logout', [Login::class, 'logout']);
Route::get('/admin', [Login::class, 'adminOnly']);

// Aplicacion de seguridad middleware, para evitar conexiones ajenas, como desde Postman o url, permitiendo solo acceso a traves de Clojure con el Token JWT, adquirido al hacer Login
Route::middleware(['jwt.auth'])->put('/producto/activo/{id}', [ActivoProducto::class, 'activo']);
Route::middleware(['jwt.auth'])->put('/categoria/activo/{id}', [ActivoCategoria::class, 'activo']);

Route::middleware(['jwt.auth'])->put('/productos/{id}', [UpdateProducto::class, 'update']);
Route::middleware(['jwt.auth'])->put('/categoria/{id}', [UpdateCategoria::class, 'update']);

Route::middleware(['jwt.auth'])->post('/producto/nuevo', [InsertarProducto::class, 'insert']);
Route::middleware(['jwt.auth'])->post('/categoria/nuevo', [InsertarCategoria::class, 'insert']);

Route::middleware(['jwt.auth'])->delete('/categoria/eliminar/{id}', [EliminarCategoria::class, 'delete']);
Route::middleware(['jwt.auth'])->delete('/producto/eliminar/{id}', [EliminarProducto::class, 'delete']);
Route::middleware(['jwt.auth'])->delete('/imagen/eliminar/{id}', [EliminarImagen::class, 'delete']);

