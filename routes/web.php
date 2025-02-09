<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'data' => \App\Models\User::all()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';
