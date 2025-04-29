<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::table('productos', function (Blueprint $table) {
            $table->renameColumn('es_vegetariano', 'contiene_gluten');
            $table->renameColumn('es_vegano', 'contiene_crustaceos');
            $table->renameColumn('es_sin_gluten', 'contiene_huevos');
            $table->renameColumn('es_sin_lactosa', 'contiene_pescado');

            $table->boolean('contiene_cacahuetes')->default(false);
            $table->boolean('contiene_soja')->default(false);
            $table->boolean('contiene_lacteos')->default(false);
            $table->boolean('contiene_frustos_de_cascara')->default(false);
            $table->boolean('contiene_apio')->default(false);
            $table->boolean('contiene_mostaza')->default(false);
            $table->boolean('contiene_granos_de_sesamo')->default(false);
            $table->boolean('contiene_sulfitos')->default(false);
            $table->boolean('contiene_moluscos')->default(false);
            $table->boolean('contiene_altramuces')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('productos', function (Blueprint $table) {
            $table->renameColumn('contiene_gluten', 'es_vegetariano');
            $table->renameColumn('contiene_crustaceos', 'es_vegano');
            $table->renameColumn('contiene_huevos', 'es_sin_gluten');
            $table->renameColumn('contiene_pescado', 'es_sin_lactosa');

            $table->dropColumn([
                'contiene_cacahuetes',
                'contiene_soja',
                'contiene_lacteos',
                'contiene_frustos_de_cascara',
                'contiene_apio',
                'contiene_mostaza',
                'contiene_granos_de_sesamo',
                'contiene_sulfitos',
                'contiene_moluscos',
                'contiene_altramuces'
            ]);
        });
    }

};
