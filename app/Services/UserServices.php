<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;

class UserServices
{
    public function __construct(
        private User $user
    ){}

    public function getAll(Request $request)
    {
        $query = $this->user->query();
        if ($request->has('sort')) {
            $query->orderBy($request->input('sort'), $request->input('direction', 'asc'));
        }

        return $query->paginate(10)->withQueryString();
    }
}
