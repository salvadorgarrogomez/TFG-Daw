<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Listado de productos</title>
    <link rel="stylesheet" href="css/style.css" />
</head>

<body>
    <header class="headerPDF">
        <img src="{{ $logo }}" class="logo">
        <h1 class="h1">{{ $categoriaNombre }}</h1>
    </header>

    <table class="tablaPDF">
        <thead>
            <tr>
                <th class="celdaID">ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Tipo de porción</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($productos as $producto)
                <tr>
                    <td class="celdaID">{{ $producto->id }}</td>
                    <td>
                        <h4>{{ $producto->nombre }}</h4>
                        <p>{{ $producto->description }}</p>
                        @foreach ($alergenosPorProducto[$producto->id] ?? [] as $alergeno)
                            <img src="{{ $alergeno }}">
                        @endforeach
                    </td>
                    <td>{{ $producto->precio }}€</td>
                    <td>
                        <img class="imagen_racion" src="{{ $imagenesPorcion[$producto->tipo_porcion] ?? '' }}"
                            alt="{{ $producto->tipo_porcion }}">
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <ul class="alergenoUL">
        @foreach($alergenosDisponibles as $alergeno)
            <li class="alergenoLI">
                <img src="{{ $alergeno['imagen'] }}" alt="{{ $alergeno['nombre'] }}" class="imgALERGENO">
                <div class="alergenoNombre">{{ $alergeno['nombre'] }}</div>
            </li>
        @endforeach
    </ul>
</body>

</html>