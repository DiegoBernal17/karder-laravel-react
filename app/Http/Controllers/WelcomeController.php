<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index() {
        $data = Course::find(2);
        $data->name = "Sistemas operativos";
        $data->save();
        return view('welcome');
    }
}
