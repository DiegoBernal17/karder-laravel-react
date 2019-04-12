<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQualificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qualifications', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('student');
            $table->unsignedInteger('course');
            $table->unsignedInteger('teacher');
            $table->string('period', 12);
            $table->double('value', '5,2');
            $table->timestamps();

            $table->foreign('student')->references('id')->on('students');
            $table->foreign('course')->references('id')->on('courses');
            $table->foreign('teacher')->references('id')->on('teachers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qualifications');
    }
}
