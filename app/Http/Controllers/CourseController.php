<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return view('course');
    }

    public function all()
    {
        $courses = Course::all();
        return $courses->toJson();
    }

    public function show($id)
    {
        $course = Course::find($id);
        $course->speciality = $course->speciality->name;
        return $course->toJson();
    }
}
