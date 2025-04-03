<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['middleware' => ['auth']], function () {
    Route::controller(HomeController::class)->group(function () {
        Route::get('/', 'menu');
        Route::get('/histories', 'history');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
