<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Qualification extends Model
{
    protected $table = 'qualifications';
    protected $fillable = ['student', 'course', 'teacher', 'period', 'value'];

    public function student() {
        return $this->belongsTo('App\Models\Student');
    }

    public function course() {
        return $this->belongsTo('App\Models\Course');
    }

    public function teacher() {
        return $this->belongsTo('App\Models\Teacher');
    }
}
