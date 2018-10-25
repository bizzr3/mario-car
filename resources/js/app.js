$(() => {
    let gameStarted = false;
    let car = $('<div>');
    car.addClass('car');

    $('.table_row .cell').on('click', function () {
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
            })
    })
});
