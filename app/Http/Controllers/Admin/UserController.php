<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Users\UserCreateRequest;
use App\Http\Requests\Admin\Users\UserEditRequest;
use App\Models\User;
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
            'users' => $users,
            'filters' => $request->query()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/User/Create');
    }

    public function store(UserCreateRequest $request)
    {
        $this->userServices->create($request->validated());
        return redirect()->route('admin.users.index')->toast('Usuário cadastrado com sucesso!');
    }

    public function edit(User $user)
    {
        return Inertia::render('Admin/User/Edit', [
            'user' => $user
        ]);
    }

    public function update(UserEditRequest $request, User $user)
    {
        $user->update($request->validated());
        return redirect()->route('admin.users.index')->toast('Usuário atualizado com sucesso!');
    }

    public function destroy(User $user)
    {
        if ($user->id == auth()->user()->id) {
            return redirect()->back()->toast('Não é possível excluir o próprio usuário!', 'error');
        }

        $user->delete();
        return redirect()->back()->toast('Usuário excluído com sucesso!');
    }
}
