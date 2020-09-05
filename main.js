$(document).ready(function(){
    if (window.jQuery) {
        let jQversion = $.fn.jquery;
        console.log("enabled jQuery version " + jQversion);
    }else{
        console.log("jQuery not found!");
    }
    $('.menu__box li').click(function () {

        $("#menu__toggle").prop('checked', false);
    });
});