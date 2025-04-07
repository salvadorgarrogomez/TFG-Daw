<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Principal;

Route::get('/', action: [Principal::class, 'index']);


Route::get('/productos', action: [Principal::class, 'productos']);
Route::get('/categorias', action: [Principal::class, 'categorias']);
Route::get('/productos/categoria/{categoria_id}', [Principal::class, 'productosPorCategoria']);

