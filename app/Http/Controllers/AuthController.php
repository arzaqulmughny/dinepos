<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserAuthenticateRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    /**
     * Display user login page.
     */
    public function login()
    {
        return Inertia::render('auth/Login');
    }

    /**
     * Get logged in
     */
    public function authenticate(UserAuthenticateRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();

        return redirect()->intended('home');
    }

    /**
     * Logout user
     */
    public function logout(Request $request)
    {
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
