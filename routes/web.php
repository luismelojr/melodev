<?php

use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::as('site.')->group(function () {
    Route::get('/', [\App\Http\Controllers\Site\HomeController::class, 'index'])->name('home');
});

Route::middleware(['auth'])->prefix('admin')->as('admin.')->group(function () {
   Route::get('/', [HomeController::class, 'index'])->name('dashboard');
   Route::resource('/users', UserController::class);

    // Route Profile
    Route::get('profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::put('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::put('profile/password', [ProfileController::class, 'updatePassword'])->name('profile.update.password');
});

require __DIR__.'/auth.php';
