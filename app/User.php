<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name', 'email', 'password', 'age', 'lattitude', 'longitude', 'location_string', 'description', 'email_token', 'api_token'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function kids()
    {
        return $this->hasMany('App\Kid', 'user_id');
    }

    public function hobbies()
    {
        return $this->belongsToMany('App\Hobby', 'hobby_user', 'user_id', 'hobby_id' );
    }

    public function conversations()
    {
        return $this->belongsToMany('App\Conversation', 'conversation_user');
    }

    public function products()
    {
        return $this->hasMany('App\Product', 'user_id');
    }

    public function votes()
    {
        return $this->hasMany('App\Vote', 'user_id');
    }

    public function posts()
    {
        return $this->hasMany('App\Post', 'user_id');
    }

    public function notifications()
    {
        return $this->hasMany('App\Notification', 'user_id');
    }
}
