<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use MarioKart;

class MarioController extends Controller
{

    protected $marioKart;

    public function __construct(MarioKart $marioKartHelper)
    {
        $this->marioKart = $marioKartHelper;
    }

    public function index() : View
    {
        return View('index');
    }


    public function place(Request $request)
    {
        $isValidLocation = $this->marioKart->place($request);

        if (!$isValidLocation) {
            return response()->json(false, Response::HTTP_BAD_REQUEST);
        }

        return response()->json(true, Response::HTTP_ACCEPTED);
    }


    public function move(Request $request)
    {
        $validMove = $this->marioKart->move($request);

        if (!$validMove) {
            return response()->json(false, Response::HTTP_BAD_REQUEST);
        }

        return response()->json([
            'can_move' => true,
            'x' => $validMove['x'],
            'y' => $validMove['y']
        ], Response::HTTP_ACCEPTED);
    }


    public function turn(Request $request)
    {
        $isValidTurn = $this->marioKart->turn($request);

        if (!$isValidTurn) {
            return response()->json(false, Response::HTTP_BAD_REQUEST);
        }

        return response()->json(true, Response::HTTP_ACCEPTED);
    }
}
