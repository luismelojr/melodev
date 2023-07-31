<?php

namespace App\Services;

use App\Models\User;
use Carbon\Carbon;
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

        if ($request->has('search')) {
            $query->where('name', 'like', "%{$request->query('search')}%")
            ->orWhere('email', 'like', "%{$request->query('search')}%");
        }

        if ($request->has('created_at')) {
            if (count($request->query('created_at')) == 1) {
                $date = Carbon::createFromDate($request->query('created_at')[0])->subHours(3)->endOfDay()->format('Y-m-d');
                $query->whereDate('created_at', $date);
            } else {
                $query->whereBetween('created_at', [
                    Carbon::createFromDate($request->query('created_at')[0])->subHours(3)->format('Y-m-d'),
                    Carbon::createFromDate($request->query('created_at')[1])->subHours(3)->endOfDay()->format('Y-m-d H:i:s')
                ]);
            }

        }

        return $query->paginate(10)->withQueryString();
    }

    public function create(array $data)
    {
        $data['password'] = bcrypt($data['password']);
        $user = $this->user->create($data);
        return $user;
    }
}
