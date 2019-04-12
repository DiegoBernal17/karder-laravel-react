<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('specialities', 'SpecialityController@all');
Route::post('speciality', 'SpecialityController@store');
Route::get('speciality/{id}', 'SpecialityController@show');
Route::put('speciality/{id}', 'SpecialityController@edit');

Route::get('courses', 'CourseController@all');
Route::post('course', 'CourseController@store');
Route::get('course/{id}', 'CourseController@show');
Route::put('course/{id}', 'CourseController@edit');