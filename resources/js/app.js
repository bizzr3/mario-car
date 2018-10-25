$(() => {
    let car = $('<div>');
    car.addClass('car');

    $('.table_row .cell').on('click', function () {
        $.post('/api/place', { 'x': $(this).attr('data-x'), 'y': $(this).attr('data-y') })
            .done(result => {
                $('.car').remove();
                $(this).append(car);
            })
    })
});
