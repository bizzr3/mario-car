<?php

namespace App\Http\Controllers;

use http\Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;

class MarioController extends Controller
{

    public function index() : View
    {
        return View('index');
    }


    public function place(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'x' => 'required|string',
            'y' => 'required|integer|min:1|max:5'
        ]);

        if ($validator->fails() || !in_array($request->get('x'), config('mario.nodes'))) {
            return response()->json(false, Response::HTTP_BAD_REQUEST);
        }

        return response()->json(true, Response::HTTP_ACCEPTED);
    }
}
