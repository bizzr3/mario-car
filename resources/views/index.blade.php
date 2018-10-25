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

    <script src="{{ elixir('js/vendor/jquery.min.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
