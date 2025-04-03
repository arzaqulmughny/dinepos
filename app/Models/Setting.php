<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $table = 'settings';

    protected $fillable = [
        'key',
        'value',
        'default_value',
    ];

    protected $primaryKey = 'key';
    public $incrementing = false;

    /**
     * Override the getValueAttribute method to return the default value if the value is null.
     */
    public function getValueAttribute()
    {
        return $this->value ?? $this->default_value;
    }
}
