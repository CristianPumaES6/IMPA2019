var wWidth = 0;
var wHeight = 0;

// A $( document ).ready() block.
$(document).ready(function () {

    wWidth = $(window).width();
    wHeight = $(window).height();
    centrarLogin();

    $("#login").click(() => {
        let user = $('#validationTooltipUsername').val();
        let pass = $('#validationTooltipPassword').val();

        if (user === 'admin' && pass === 'admin') {
            $('#contentLogin').addClass('d-none');
            $('#contentData').removeClass('d-none');
        } else {
            $('#contentLogin .alert').removeClass('d-none');
        }
    });


    $(window).resize(function () {
        wWidth = $(window).width();
        wHeight = $(window).height();
        centrarLogin();
    });
});





function centrarLogin() {
    let div_alto = $("#contentLogin .card").height();
    $('#contentLogin .card').css('top', (wHeight - div_alto) / 2);
}