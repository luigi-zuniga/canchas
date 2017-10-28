<?php
header('Access-Control-Allow-Origin: http://localhost:9000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Authorization, X-Requested-With, Content-Type');
use App\Usuario;
use App\User;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::post('login', function (){
    $userdata = array(
        'username' => Input::get('username'),
        'password' => Input::get('password')
    );
    //$usuario = User::where('username', $userdata['username'])->first();
    if ( Auth::attempt($userdata) ){       
        
        return Response::json(array("success" => true, "mensaje" => "Acceso Correcto"));
    }else{
        return Response::json(array("success" => false, "mensaje" => "El Nombre de Usuario y/o la Contraseña son incorrectos"));
    }
});

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
