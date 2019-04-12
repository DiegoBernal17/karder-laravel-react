<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';
    protected $fillable = ['enrollment', 'name', 'paternal', 'maternal', 'speciality', 'password'];

    public function speciality() {
        return $this->belongsTo('App\Models\Speciality');
    }
}
