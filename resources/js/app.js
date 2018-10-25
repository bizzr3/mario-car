let gameStarted = false;
let carDirection = 'r';

let getCarDirection = () => {
    switch (carDirection) {
        case 'u':
            return 'to-up'
            break;
        case 'l':
            return 'to-left'
            break;
        case 'd':
            return 'to-down'
            break;
        case 'r':
            return 'to-right'
            break;
        default:
            break;
    }
};

let moveCar = (mode = 'move', tile = null) => {
    if (!gameStarted) {
        return;
    }

    tile = tile ? tile : $('.car').parent();

    $.post('/api/move', {
        'x': tile.attr('data-x'),
        'y': tile.attr('data-y'),
        'dir': carDirection
    }).done(result => {
        if (result.can_move) {

            if (mode !== 'move') {
                placeCar(tile);
            } else {
                let effect__ = $('#move_music').get(0);
                effect__.currentTime = 0;
                effect__.play();

                placeCar(null, result.x, result.y);
            }
        }
    })
}

let placeCar = (tile, ...location) => {
    let car = $('<div>');
    car.addClass('car');

    $('.car').remove();

    if (!tile) {
        $(`td[data-x="${location[0]}"][data-y="${location[1]}"]`).append(car);
    } else {
        $(tile).append(car);
    }

    let dir = getCarDirection();
    $('.car').addClass(dir ? dir : 'to-right');
}

$('body').keydown((e) => {
    e.preventDefault;

    let dirText = '';

    switch (e.keyCode) {
        case 38:
            carDirection = 'u';
            dirText = 'Up';
            moveCar('turn');

            break;
        case 40:
            carDirection = 'd';
            dirText = 'Down';
            moveCar('turn');

            break;
        case 37:
            carDirection = 'l';
            dirText = 'Left';
            moveCar('turn');

            break;
        case 39:
            carDirection = 'r';
            dirText = 'Right';
            moveCar('turn');

            break;
        case 32:
            moveCar('move');

            break;
    }

    if (dirText) {
        $('#dir_indicator').text(dirText).attr('data-dir', carDirection);
    }

});

$('.table_row .cell').on('click', function () {
    if (!gameStarted) {
        $('#background_music').get(0).play();
    }

    let x = $(this).attr('data-x');
    let y = $(this).attr('data-y');

    $.post('/api/place', { 'x': x, 'y': y })
        .done(result => {
            if (result) {
                let effect__ = $('#move_music').get(0);
                effect__.currentTime = 0;
                effect__.play();

                placeCar($(this));
                gameStarted = true;
            }
        })
});
