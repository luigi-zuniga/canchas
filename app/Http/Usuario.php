<?php
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;
class User extends Eloquent implements UserInterface, RemindableInterface {
	protected $table = 'usuarios';
    protected $connection = "principal";
	
}
