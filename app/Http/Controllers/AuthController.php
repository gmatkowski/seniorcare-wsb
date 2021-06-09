<?php

namespace App\Http\Controllers;

use App\Dto\UserRegisterDto;
use Illuminate\Http\Request;
use Hash;
use Session;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Services\UserService;
use RegisterRequest;
use Spatie\Permission\Models\Role;

class AuthController extends Controller
{
    public function login()
    {
        return view('auth.login');
    }

    public function customLogin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->intended('dashboard')
            ->withSuccess('Signed in');
        }

        return redirect("login")->withSuccess('Login details are not valid');
    }

    public function registration()
    {
        return view('auth.registration');
    }

    public function customRegistration(RegisterRequest $request, UserService $service)
    {
        $role = Role::where('name', $request->input('role'))->first();
        $dto = new UserRegisterDto(
            $request->input('name'),
            $request->input('email'),
            $request->input('password'),
            $role
        );

        if ($role->name === 'user')
        {
            $dto->setCity($request->input('city'));
            $dto->setAddress($request->input('address'));
            $dto->setPostcode($request->input('postcode'));
        }

        $user = $service->create($dto);

        Auth::login($user);

        return redirect("dashboard")->withSuccess('You have signed-in');
    }


    public function dashboard()
    {
        if (Auth::check()) {
            return view('dashboard');
        }

        return redirect("login")->withSuccess('You are not allowed to access');
    }

    public function signOut()
    {
        Session::flush();
        Auth::logout();

        return Redirect('login');
    }
}
