<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('students', function (Blueprint $table) {
            $table->increments('id');
            $table->char('enrollment', 10)->unique();
            $table->string('name', 150);
            $table->string('paternal', 100);
            $table->string('maternal', 100)->nullable();
            $table->unsignedInteger('speciality');
            $table->string('password', 150);
            $table->timestamp('logged_at');
            $table->timestamps();

            $table->foreign('speciality')->references('id')->on('specialities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('students', function (Blueprint $table) {
            //
        });
    }
}
