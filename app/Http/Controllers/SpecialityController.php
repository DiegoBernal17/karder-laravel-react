<?php

namespace App\Http\Controllers;

use App\Models\Speciality;
use Illuminate\Http\Request;

class SpecialityController extends Controller
{

    public function index()
    {
        return view('speciality');
    }

    public function all()
    {
        $specialities = Speciality::all();
        return $specialities->toJson();
    }

    public function store(Request $request)
    {
        return response('Error',400);

        $validatedData = $request->validate([
           'code' => 'required',
            'name' => 'required'
        ]);

        $speciality = Speciality::create([
            'code' => $validatedData['code'],
            'name' => $validatedData['name']
        ]);

        return response()->json('Speciality created!');
    }

    public function show($id)
    {
        $speciality = Speciality::find($id);
        return $speciality->toJson();
    }
}
