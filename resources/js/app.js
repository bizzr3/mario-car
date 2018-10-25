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

$('body').keydown((e) => {
    e.preventDefault;

    let dirText = '';

    switch (e.keyCode) {
        case 38:
            carDirection = 'u';
            dirText = 'Up';

            break;
        case 40:
            carDirection = 'd';
            dirText = 'Down';

            break;
        case 37:
            carDirection = 'l';
            dirText = 'Left';

            break;
        case 39:
            carDirection = 'r';
            dirText = 'Right';

            break;
        default:
            break;
    }
    if (dirText) {
        $('#dir_indicator').text(dirText).attr('data-dir', carDirection);
    }
});

$('.table_row .cell').on('click', function () {
    let car = $('<div>');
    car.addClass('car');

    if (!gameStarted) {
        $('#background_music').get(0).play();
    }

    $.post('/api/place', { 'x': $(this).attr('data-x'), 'y': $(this).attr('data-y') })
        .done(result => {
            let effect__ = $('#move_music').get(0);
            effect__.currentTime = 0;
            effect__.play();

            $('.car').remove();
            $(this).append(car);
            let dir = getCarDirection();
            $('.car').addClass(dir ? dir : 'to-right');
        })
});
