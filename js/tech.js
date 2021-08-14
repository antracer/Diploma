$(window).on('load', function() {
    $('.preloader').fadeOut('slow'); // и скрываем сам блок прелоудера.
    $('.article, .main-link').fadeIn('slow'); // показываем блок с контентом
    $('.article, .main-link').css('opacity', '1');
}); 

$('.android, .h-android').click(function() {
    $('.android').toggle();
    $('.h-android').toggle();
});

$('.windows, .h-windows').click(function() {
    $('.windows').toggle();
    $('.h-windows').toggle();
});

$('.mi, .h-mi').click(function() {
    $('.mi').toggle();
    $('.h-mi').toggle();
});

$('.samsung, .h-samsung').click(function() {
    $('.samsung').toggle();
    $('.h-samsung').toggle();
});

$('.chia, .h-chia').click(function() {
    $('.chia').toggle();
    $('.h-chia').toggle();
});

$('.lambo, .h-lambo').click(function() {
    $('.lambo').toggle();
    $('.h-lambo').toggle();
});

$('.snapdragon, .h-snapdragon').click(function() {
    $('.snapdragon').toggle();
    $('.h-snapdragon').toggle();
});

$('.viber, .h-viber').click(function() {
    $('.viber').toggle();
    $('.h-viber').toggle();
});

$('.hhonor, .h-honor').click(function() {
    $('.hhonor').toggle();
    $('.h-honor').toggle();
});

$('.bbattery, .h-battery').click(function() {
    $('.bbattery').toggle();
    $('.h-battery').toggle();
});

$('.article').mouseenter(function(event) {
        this.title='Натисніть, щоб дізнатись більше';
});

$('.hidden').mouseenter(function(event) {
        this.title='Натисніть, щоб згорнути дану статтю';
});