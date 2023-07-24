<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\UserServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(
        private UserServices $userServices
    ){}

    public function index(Request $request)
    {
        $users = $this->userServices->getAll($request);

        return Inertia::render('Admin/User/Index', [
            'users' => $users
        ]);
    }
}
