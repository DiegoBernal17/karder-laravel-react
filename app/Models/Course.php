<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'courses';

    protected $fillable = ['code', 'name', 'speciality'];

    public function speciality() {
        return $this->belongsTo('App\Models\Speciality');
    }
}