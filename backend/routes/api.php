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

Route::post('/event/add','ItemsController@addEvent');

Route::get('/event','ItemsController@showAll');

Route::delete('/event/delete/{id}','ItemsController@deleteEvent');

Route::put('/event/edit/{id}', 'ItemsController@editEvent');

Route::get('/event/{id}', 'ItemsController@showEvent');
