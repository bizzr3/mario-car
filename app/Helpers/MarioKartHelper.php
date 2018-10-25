<?php

namespace App\Helpers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MarioKartHelper
{
    /**
     * Place the car on the table if valid location provided.
     *
     * @param Request $request
     *
     * @return bool
     */
    public function place(Request $request) : bool
    {
        $validation = $this->validateCarLocation($request->all());

        if (!$validation) {
            return false;
        }

        return true;
    }


    /**
     * move the car on the table if next location is valid.
     *
     * @param Request $request
     *
     * @return array|bool
     */
    public function move(Request $request)
    {
        $validation = $this->validateMoveOrTurn($request);

        if (!$validation) {
            return false;
        }

        $nextTileLocation = $this->generateNextTileLocation($request);

        if (!$nextTileLocation) {
            return false;
        }

        $validation = $this->validateCarLocation([
            'x' => $nextTileLocation['nextX'],
            'y' => $nextTileLocation['nextY']
        ]);

        if (!$validation) {
            return false;
        }

        return [
            'can_move' => true,
            'x' => $nextTileLocation['nextX'],
            'y' => $nextTileLocation['nextY']
        ];
    }


    /**
     * Turn the car on the table if next location is valid.
     *
     * @param Request $request
     *
     * @return bool
     */
    public function turn(Request $request) : bool
    {
        $validation = $this->validateCarLocation($request->all());

        if (!$validation) {
            return false;
        }

        $nextTileLocation = $this->generateNextTileLocation($request);

        if (!$nextTileLocation) {
            return false;
        }

        $validation = $this->validateCarLocation([
            'x' => $nextTileLocation['nextX'],
            'y' => $nextTileLocation['nextY']
        ]);

        if (!$validation) {
            return false;
        }

        return true;
    }


    /**
     * Validate provided car location.
     *
     * @param array $param
     *
     * @return bool
     *
     * @todo merge validation methods.
     */
    private function validateCarLocation(array $param) : bool
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


    /**
     * Validate provided Move or Turn locations.
     *
     * @param Request $request
     *
     * @return bool
     */
    private function validateMoveOrTurn(Request $request) : bool
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


    /**
     * Generate next location on the table base on provided location.
     *
     * @param Request $request
     *
     * @return array|bool
     *
     * @todo optimize switch checks and avoid accepting out of range indexes
     */
    private function generateNextTileLocation(Request $request)
    {
        $y = $request->get('y');
        $x = $request->get('x');
        $nodes = config('mario.nodes');

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
            return false;
        }

        return ['nextX' => $x, 'nextY' => $y];
    }
}
