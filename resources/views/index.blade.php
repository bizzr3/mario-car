<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mario Car</title>

    <link href="{{ elixir('css/vendor/bootstrap.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div class="container">
        <table class="mario_table">
            <tr class="table_row">
                <td class="cell" data-x="a" data-y="5">&nbsp;</td>
                <td class="cell" data-x="b" data-y="5">&nbsp;</td>
                <td class="cell" data-x="c" data-y="5">&nbsp;</td>
                <td class="cell" data-x="d" data-y="5">&nbsp;</td>
                <td class="cell" data-x="e" data-y="5">&nbsp;</td>
            </tr>
            <tr class="table_row">
                <td class="cell" data-x="a" data-y="4">&nbsp;</td>
                <td class="cell" data-x="b" data-y="4">&nbsp;</td>
                <td class="cell" data-x="c" data-y="4">&nbsp;</td>
                <td class="cell" data-x="d" data-y="4">&nbsp;</td>
                <td class="cell" data-x="e" data-y="4">&nbsp;</td>
            </tr>
            <tr class="table_row">
                <td class="cell" data-x="a" data-y="3">&nbsp;</td>
                <td class="cell" data-x="b" data-y="3">&nbsp;</td>
                <td class="cell" data-x="c" data-y="3">&nbsp;</td>
                <td class="cell" data-x="d" data-y="3">&nbsp;</td>
                <td class="cell" data-x="e" data-y="3">&nbsp;</td>
            </tr>
            <tr class="table_row">
                <td class="cell" data-x="a" data-y="2">&nbsp;</td>
                <td class="cell" data-x="b" data-y="2">&nbsp;</td>
                <td class="cell" data-x="c" data-y="2">&nbsp;</td>
                <td class="cell" data-x="d" data-y="2">&nbsp;</td>
                <td class="cell" data-x="e" data-y="2">&nbsp;</td>
            </tr>
            <tr class="table_row">
                <td class="cell" data-x="a" data-y="1">&nbsp;</td>
                <td class="cell" data-x="b" data-y="1">&nbsp;</td>
                <td class="cell" data-x="c" data-y="1">&nbsp;</td>
                <td class="cell" data-x="d" data-y="1">&nbsp;</td>
                <td class="cell" data-x="e" data-y="1">&nbsp;</td>
            </tr>
        </table>
    </div>

    <div id="tip">
        <div class="icon"></div>
        <p>
            Welcome Mario Lovers, to start you can click on any tile in the table, even more,
            if you want to change the direction of the Mario's car, you can press arrow keys
            to set the direction and then place Mario's car.
        </p>
    </div>

    <div id="direction">
        <div class="icon"></div>
        <p>
            Direction:&nbsp;<strong id="dir_indicator" data-dir="r">Right</strong>
        </p>
    </div>

    <audio id="background_music">
        <source src="/sounds/background.mp3" type="audio/mpeg" />
        Your browser does not support HTML5 audio.
    </audio>

    <audio id="move_music">
        <source src="/sounds/move.mp3" type="audio/mpeg" />
        Your browser does not support HTML5 audio.
    </audio>

    <script src="{{ elixir('js/vendor/jquery.min.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
