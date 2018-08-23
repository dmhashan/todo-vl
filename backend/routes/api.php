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

Route::post('/event/add',[
    'uses'=>'ItemsController@addEvent'
]);

Route::get('/events',[
    'uses'=>'ItemsController@showAll'
]);

Route::delete('/event/delete',[
    'uses'=>'ItemsController@deleteEvent'
]);

Route::puts('/event/edit',[
    'uses'=>'ItemsController@editEvent'
]);
