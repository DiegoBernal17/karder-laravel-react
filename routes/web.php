<?php

Route::view('/{path?}', 'app');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
