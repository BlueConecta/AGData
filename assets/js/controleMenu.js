$("#botao-menu").click(function () {
    event.preventDefault();
    $(".menu-navegacao").show(300);
    $("#botao-menu").hide(300);
    $(".menu-hamburguer2").show(300);
});
$("#botao-menu2").click(function () {
    event.preventDefault();
    $(".menu-navegacao").hide(600);
    $("#botao-menu2").hide(300);
    $(".menu-hamburguer").show(300);
    $(".menu-hamburguer2").hide(3000);
});
$("#about-menu").click(function () {
    event.preventDefault();
    $.scrollify.move("#home-section");
    $(".menu-navegacao").hide(600);
    $("#botao-menu2").hide(300);
    $(".menu-hamburguer").show(300);
    $(".menu-hamburguer2").hide(300);
});
$("#video-menu").click(function () {
    event.preventDefault();
    $.scrollify.move("#video-section");
    $(".menu-navegacao").hide(600);
    $("#botao-menu2").hide(300);
    $(".menu-hamburguer").show(300);
    $(".menu-hamburguer2").hide(300);
});
$("#services-menu").click(function () {
    event.preventDefault();
    $.scrollify.move("#services-section");
    $(".menu-navegacao").hide(600);
    $("#botao-menu2").hide(300);
    $(".menu-hamburguer").show(300);
    $(".menu-hamburguer2").hide(300);
});
$("#technology-menu").click(function () {
    event.preventDefault();
    $.scrollify.move("#technology-section");
    $(".menu-navegacao").hide(600);
    $("#botao-menu2").hide(300);
    $(".menu-hamburguer").show(300);
    $(".menu-hamburguer2").hide(300);
});
$("#ten-menu").click(function () {
    event.preventDefault();
    $.scrollify.move("#contact-section");
    $(".menu-navegacao").hide(600);
    $("#botao-menu2").hide(300);
    $(".menu-hamburguer").show(300);
    $(".menu-hamburguer2").hide(300);
});

$("#arrow-to-top").click(function () {
    event.preventDefault();
    $.scrollify.move("#home-section");
});

