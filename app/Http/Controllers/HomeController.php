<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display menu page
     */
    public function menu(Request $request)
    {
        return Inertia::render('cashier/Menu')->with('message', 123);
    }

    /**
     * Display history page
     */
    public function history()
    {
        return Inertia::render('cashier/History');
    }
}
