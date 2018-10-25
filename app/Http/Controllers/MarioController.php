<?php

namespace App\Http\Controllers;

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
        $validation = $this->validateCarLocation($request->all());

        if (!$validation) {
            return response()->json(false, Response::HTTP_BAD_REQUEST);
        }

        return response()->json(true, Response::HTTP_ACCEPTED);
    }

    public function move(Request $request)
    {
        $validation = $this->validateMove($request);

        if (!$validation) {
            return response()->json(false, Response::HTTP_BAD_REQUEST);
        }

        $y = $request->get('y');
        $x = $request->get('x');
        $nodes = config('mario.nodes');

        //TODO: optimize this check and avoid accepting out of range indexes
        try {
            switch ($request->get('dir')) {
                case 'u':
                    {
                        $y++;
                        break;
                    }
                case 'd':
                    {
                        $y--;

                        break;
                    }
                case 'l':
                    {
                        $x = $nodes[array_search($x, $nodes) - 1];

                        break;
                    }
                case 'r':
                    {
                        $x = $nodes[array_search($x, $nodes) + 1];

                        break;
                    }
            }
        } catch (\Exception $e) {
            return response()->json(false, Response::HTTP_BAD_REQUEST);
        }

        $validation = $this->validateCarLocation(['x' => $x, 'y' => $y]);

        if (!$validation) {
            return response()->json([
                'can_move' => false
            ], Response::HTTP_BAD_REQUEST);
        }

        return response()->json([
            'can_move' => true,
            'x' => $x,
            'y' => $y
        ], Response::HTTP_ACCEPTED);
    }

    //TODO: merge validation methods.

    private function validateCarLocation(array $param)
    {
        $validator = Validator::make($param, [
            'x' => 'required|string',
            'y' => 'required|integer|min:1|max:5'
        ]);

        if ($validator->fails() || !in_array($param['x'], config('mario.nodes'))) {
            return false;
        }

        return true;
    }

    private function validateMove(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'x' => 'required|string',
            'y' => 'required|integer|min:1|max:5',
            'dir' => 'required|string'
        ]);

        if ($validator->fails() || !in_array($request->get('x'), config('mario.nodes'))) {
            return false;
        }

        return true;
    }
}
