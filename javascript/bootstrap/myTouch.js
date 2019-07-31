var wWidth = 0;
var wHeight = 0;
var lookLv = false;
// A $( document ).ready() block.
$(document).ready(function () {

    wWidth = $(window).width();
    wHeight = $(window).height();
    centrarLogin();
    height100();

    generarHTML(); 

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
        height100();
    });
});





function centrarLogin() {
    let div_alto = $("#contentLogin .card").height();
    $('#contentLogin .card').css('top', (wHeight - div_alto) / 2);
}

function height100() {
    $('#divContentBarra').css('height', wHeight - 10);
}