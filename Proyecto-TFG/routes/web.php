<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

// En mi diseño de la web, que principal mente se basa e una unica pagina con la que interactuar, aparece todo en el index, aqui especifico
// que se debe de precargar el index.html especificado en public.
Route::get('/{any}', function () {
    $path = public_path('index.html');
    if (!File::exists($path)) {
        abort(404);
    }
    return Response::file($path);
})->where('any', '.*');

