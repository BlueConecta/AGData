(function (initCode){
    initCode(window.jQuery, window, document);
 }
 (function ($, window, document){
     $(function(){
         $(".indicators-list li").click(function(){
             var item = $(this);
             $.scrollify.move(item.data("section"));
             $(".indicators-list li").not(item).each(function () {
                 $(this).switchClass("on","off");
             });
             item.addClass("on");
             item.removeClass("off");
         })
         $(".navigation-links-desktop p").click(function(){
            var item = $(this);
            $.scrollify.move(item.data("section"));
        })
        $(".navigation-links-desktop button").click(function(){
            var item = $(this);
            $.scrollify.move(item.data("section"));
        })
        $("#arrow-to-top").click(function(){
            var item = $(this);
            $.scrollify.move(item.data("section"));
        })
        $(".content-mobile-menu li a").click(function () {
            var item = $(this);
            $.scrollify.move(item.data("section"));
            $(".navigation-mobile-menu").hide(600);
            $("#button-mobile-closed").hide(300);
            $(".menu-hamburguer").show(300);
            $(".menu-hamburguer-closed").hide(300);
        })
        $(".navigation-desktop-menu #button-mobile").click(function () {
            var item = $(this);
            $(".navigation-mobile-menu").show(300);
            $("#button-mobile").hide(300);
            $(".menu-hamburguer-closed").show(300);
        })
        $(".navigation-desktop-menu #button-mobile-closed").click(function () {
            var item = $(this);
            $(".navigation-mobile-menu").hide(600);
            $("#button-mobile-closed").hide(300);
            $(".menu-hamburguer").show(300);
            $(".menu-hamburguer-closed").hide(3000);
        })  
     })
 }));
$(function () {
    $.scrollify({
        section: ".sessao",
        scrollSpeed: 1800,
        InterstitialSection: ".sessao, .footer",
        before: function (section) {
            if (section === 0) {
                $(".circle-home").removeClass("off");
                $(".circle-home").addClass("on");

                $(".control-arrow").removeClass("arrow-up");
                $(".control-arrow").addClass("arrow-up-disabled");

                $(".m-logo-mobile").removeClass("logo-agdata-disabled");
                $(".m-logo-mobile").addClass("logo-agdata-mobile");

                $(".m-logo-desktop").removeClass("logo-agdata-disabled");
                $(".m-logo-desktop").addClass("logo-agdata-desktop");                

                $(".m-icon-shop").removeClass("icon-shop-disabled");
                $(".m-icon-shop").addClass("icon-shop");

                $(".m-paragraph-home").removeClass("paragraph-home-disabled");
                $(".m-paragraph-home").addClass("paragraph-home");

                $(".m-title-home").removeClass("title-home-disabled");
                $(".m-title-home").addClass("title-home");

                $(".m-title-home-desktop").removeClass("title-home-desktop-disabled");
                $(".m-title-home-desktop").addClass("title-home-desktop");

                $(".m-button-desktop").removeClass("button-home-disabled");
                $(".m-button-desktop").addClass("button-home");

                $(".m-facebook").removeClass("facebook-disabled");
                $(".m-facebook").addClass("facebook");

                $(".m-instagram").removeClass("instagram-disabled");
                $(".m-instagram").addClass("instagram");

                $(".m-youtube").removeClass("youtube-disabled");
                $(".m-youtube").addClass("youtube");

                $(".m-linkedin").removeClass("linkedin-disabled");
                $(".m-linkedin").addClass("linkedin");

                $(".m-agency").removeClass("agency-desktop-link-disabled");
                $(".m-agency").addClass("agency-desktop-link");

                $(".m-video").removeClass("video-desktop-link-disabled");
                $(".m-video").addClass("video-desktop-link");

                $(".m-services").removeClass("services-desktop-link-disabled");
                $(".m-services").addClass("services-desktop-link");

                $(".m-technology").removeClass("technology-desktop-link-disabled");
                $(".m-technology").addClass("technology-desktop-link");

                $(".m-contact").removeClass("contact-button-desktop-disabled");
                $(".m-contact").addClass("contact-button-desktop");
                }
            if (section !== 0) {
                $(".circle-home").removeClass("on");
                $(".circle-home").addClass("off");
                
                $(".control-arrow").removeClass("arrow-up-disabled");
                $(".control-arrow").addClass("arrow-up");

                $(".m-logo-mobile").removeClass("logo-agdata-mobile");
                $(".m-logo-mobile").addClass("logo-agdata-disabled");

                $(".m-logo-desktop").removeClass("logo-agdata-desktop");
                $(".m-logo-desktop").addClass("logo-agdata-disabled");

                $(".m-icon-shop").removeClass("icon-shop");
                $(".m-icon-shop").addClass("icon-shop-disabled");

                $(".m-paragraph-home").removeClass("paragraph-home");
                $(".m-paragraph-home").addClass("paragraph-home-disabled");

                $(".m-title-home").removeClass("title-home");
                $(".m-title-home").addClass("title-home-disabled");

                $(".m-title-home-desktop").removeClass("title-home-desktop");
                $(".m-title-home-desktop").addClass("title-home-desktop-disabled");

                $(".m-button-desktop").removeClass("button-home");
                $(".m-button-desktop").addClass("button-home-disabled");

                $(".m-facebook").removeClass("facebook");
                $(".m-facebook").addClass("facebook-disabled");

                $(".m-instagram").removeClass("instagram");
                $(".m-instagram").addClass("instagram-disabled");

                $(".m-youtube").removeClass("youtube");
                $(".m-youtube").addClass("youtube-disabled");

                $(".m-linkedin").removeClass("linkedin");
                $(".m-linkedin").addClass("linkedin-disabled");

                $(".m-agency").removeClass("agency-desktop-link");
                $(".m-agency").addClass("agency-desktop-link-disabled");

                $(".m-video").removeClass("video-desktop-link");
                $(".m-video").addClass("video-desktop-link-disabled");

                $(".m-services").removeClass("services-desktop-link");
                $(".m-services").addClass("services-desktop-link-disabled");

                $(".m-technology").removeClass("technology-desktop-link");
                $(".m-technology").addClass("technology-desktop-link-disabled");

                $(".m-contact").removeClass("contact-button-desktop");
                $(".m-contact").addClass("contact-button-desktop-disabled");
            }
            if (section === 1) {
                $(".circle-about").removeClass("off");
                $(".circle-about").addClass("on");

                $(".control-desk-div2").removeClass("desktop-div-section2-1-0");
                $(".control-desk-div2").addClass("desktop-div-section2-1");

                $(".control2-desk-div2").removeClass("desktop-div-section2-2-0");
                $(".control2-desk-div2").addClass("desktop-div-section2-2");

                $(".control3-desk-div2").removeClass("desktop-div-section2-3-0");
                $(".control3-desk-div2").addClass("desktop-div-section2-3");
                
                $(".control4-desk-div2").removeClass("desktop-div-section2-4-0");
                $(".control4-desk-div2").addClass("desktop-div-section2-4");

                $(".controlador-imagem-sessao2").removeClass("img-sessao-2-1-0");
                $(".controlador-imagem-sessao2").addClass("img-sessao-2-1");

                $(".controlador-sobre-segunda-sessao").removeClass("sobre-segunda-sessao-0");
                $(".controlador-sobre-segunda-sessao").addClass("sobre-segunda-sessao");

            }
            if (section !== 1) {

                $(".circle-about").removeClass("on");
                $(".circle-about").addClass("off");

                $(".control-desk-div2").removeClass("desktop-div-section2-1");
                $(".control-desk-div2").addClass("desktop-div-section2-1-0");

                $(".control2-desk-div2").removeClass("desktop-div-section2-2");
                $(".control2-desk-div2").addClass("desktop-div-section2-2-0");

                $(".control3-desk-div2").removeClass("desktop-div-section2-3");
                $(".control3-desk-div2").addClass("desktop-div-section2-3-0");
                
                $(".control4-desk-div2").removeClass("desktop-div-section2-4");
                $(".control4-desk-div2").addClass("desktop-div-section2-4-0");

                $(".controlador-imagem-sessao2").removeClass("img-sessao-2-1");
                $(".controlador-imagem-sessao2").addClass("img-sessao-2-1-0");

                $(".controlador-sobre-segunda-sessao").removeClass("sobre-segunda-sessao");
                $(".controlador-sobre-segunda-sessao").addClass("sobre-segunda-sessao-0");
            }
            if (section === 2) {
                $(".circle-design").removeClass("off");
                $(".circle-design").addClass("on");

                $(".controladorbox1").removeClass("box-1-0");
                $(".controladorbox1").addClass("box-1");

                $(".controladorbox2").removeClass("box-2-0");
                $(".controladorbox2").addClass("box-2");

                $(".controladorbox3").removeClass("box-3-0");
                $(".controladorbox3").addClass("box-3");

                // Primeiro Contador
                var max_number = 5000000;

                var padding_zeros = '';
                for (var i = 0, l = max_number.toString().length; i < l; i++) {
                    padding_zeros += '0';
                }

                var padded_now, numberStep = function (now, tween) {
                    var target = $(tween.elem),
                        rounded_now = Math.round(now);

                    var rounded_now_string = rounded_now.toString()
                    padded_now = padding_zeros + rounded_now_string;
                    padded_now = padded_now.substring(rounded_now_string.length);

                    target.prop('number2', rounded_now).text(padded_now);
                };

                var use_max_power = $('');
                $('#titulo-contador1').ready(function () {
                    $('#titulo-contador1').animateNumber({
                        number: max_number,
                        numberStep: numberStep
                    }, 2000);
                });
                $('#titulo-contador1-desk').ready(function () {
                    $('#titulo-contador1-desk').animateNumber({
                        number: max_number,
                        numberStep: numberStep
                    }, 2000);
                });

                //   Segundo Contador
                var max_number2 = 2600;

                var padding_zeros2 = '';
                for (var j = 0, n = max_number2.toString().length; j < n; j++) {
                    padding_zeros2 += '0';
                }

                var padded_now2, numberStep2 = function (now2, tween2) {
                    var target = $(tween2.elem),
                        rounded_now2 = Math.round(now2);

                    var rounded_now_string2 = rounded_now2.toString()
                    padded_now2 = padding_zeros2 + rounded_now_string2;
                    padded_now2 = padded_now2.substring(rounded_now_string2.length);

                    target.prop('number2', rounded_now2).text(padded_now2);
                };

                var use_max_power2 = $('');
                $('#titulo-contador2').ready(function () {
                    $('#titulo-contador2').animateNumber({
                        number: max_number2,
                        numberStep2: numberStep
                    }, 2000);
                });
                $('#titulo-contador2-desk').ready(function () {
                    $('#titulo-contador2-desk').animateNumber({
                        number: max_number2,
                        numberStep2: numberStep
                    }, 2000);
                });

                //   Terceiro Contador
                var max_number3 = 300000;

                var padding_zeros3 = '';
                for (var k = 0, m = max_number2.toString().length; k < m; k++) {
                    padding_zeros3 += '0';
                }

                var padded_now3, numberStep2 = function (now3, tween3) {
                    var target = $(tween3.elem),
                        rounded_now3 = Math.round(now3);

                    var rounded_now_string3 = rounded_now3.toString()
                    padded_now3 = padding_zeros3 + rounded_now_string3;
                    padded_now3 = padded_now3.substring(rounded_now_string3.length);

                    target.prop('number2', rounded_now3).text(padded_now3);
                };

                var use_max_power3 = $('');
                $('#titulo-contador3').ready(function () {
                    $('#titulo-contador3').animateNumber({
                        number: max_number3,
                        numberStep3: numberStep
                    }, 2000);
                });

            }
            if (section !== 2) {
                $(".circle-design").removeClass("on");
                $(".circle-design").addClass("off");

                $(".controladorbox1").removeClass("box-1");
                $(".controladorbox1").addClass("box-1-0");

                $(".controladorbox2").removeClass("box-2");
                $(".controladorbox2").addClass("box-2-0");

                $(".controladorbox3").removeClass("box-3");
                $(".controladorbox3").addClass("box-3-0");
            }
            if (section === 3) {
                $(".circle-experience").removeClass("off");
                $(".circle-experience").addClass("on");

                $(".control-h1-section-4").removeClass("titulo-quarta-sessao-desk-0");
                $(".control-h1-section-4").addClass("titulo-quarta-sessao-desk");

                $(".control-p-section-4").removeClass("p-quarta-sessao-desk-0");
                $(".control-p-section-4").addClass("p-quarta-sessao-desk");

                $(".control-img-section-4").removeClass("imagem-quarta-sessao-desk-intern-0");
                $(".control-img-section-4").addClass("imagem-quarta-sessao-desk-intern");
                
                
                $(".m04").removeClass("name-menu");
                $(".m04").addClass("name-menu-color");

                $(".bar1").animate({
                    width: "90%"
                }, 1500);

                $(".bar2").animate({
                    width: "77%"
                }, 1500);

                $(".bar3").animate({
                    width: "63%"
                }, 1500);

                $(".bar4").animate({
                    width: "45%"
                }, 1500);
            }
            if (section !== 3) {
                $(".circle-experience").removeClass("on");
                $(".circle-experience").addClass("off");

                $(".manipulador04").removeClass("quarta-opcao");
                $(".manipulador04").addClass("quarta-opcao-desativado");

                $(".control-h1-section-4").removeClass("titulo-quarta-sessao-desk");
                $(".control-h1-section-4").addClass("titulo-quarta-sessao-desk-0");

                $(".control-p-section-4").removeClass("p-quarta-sessao-desk");
                $(".control-p-section-4").addClass("p-quarta-sessao-desk-0");

                $(".control-img-section-4").removeClass("imagem-quarta-sessao-desk-intern");
                $(".control-img-section-4").addClass("imagem-quarta-sessao-desk-intern-0")

                $(".m04").removeClass("name-menu-color");
                $(".m04").addClass("name-menu");

                $(".bar1").animate({
                    width: "0%"
                }, 10);

                $(".bar2").animate({
                    width: "0%"
                }, 10);

                $(".bar3").animate({
                    width: "0%"
                }, 10);

                $(".bar4").animate({
                    width: "0%"
                }, 10);
            }
            if (section === 4) {
                $(".circle-video").removeClass("off");
                $(".circle-video").addClass("on");

                $(".manipulador05").removeClass("quinta-opcao-desativado");
                $(".manipulador05").addClass("quinta-opcao");

                $(".m05").removeClass("name-menu");
                $(".m05").addClass("name-menu-color");

                $(".control-p-section-5").removeClass("p-quinta-sessao-desk-0");
                $(".control-p-section-5").addClass("p-quinta-sessao-desk");

                $(".control-h3-section-5").removeClass("h3-quinta-sessao-desk-0");
                $(".control-h3-section-5").addClass("h3-quinta-sessao-desk"); 
                
                $(".control-button-section-5").removeClass("button-quinta-sessao-desk-0");
                $(".control-button-section-5").addClass("button-quinta-sessao-desk");

                $(".control-img-play").removeClass("img-play-0");
                $(".control-img-play").addClass("img-play");
                
            }
            if (section !== 4) {
                $(".circle-video").removeClass("on");
                $(".circle-video").addClass("off");

                $(".manipulador05").removeClass("quinta-opcao");
                $(".manipulador05").addClass("quinta-opcao-desativado");

                $(".m05").removeClass("name-menu-color");
                $(".m05").addClass("name-menu");

                $(".control-p-section-5").removeClass("p-quinta-sessao-desk");
                $(".control-p-section-5").addClass("p-quinta-sessao-desk-0");

                $(".control-h3-section-5").removeClass("h3-quinta-sessao-desk");
                $(".control-h3-section-5").addClass("h3-quinta-sessao-desk-0");

                $(".control-button-section-5").removeClass("button-quinta-sessao-desk");
                $(".control-button-section-5").addClass("button-quinta-sessao-desk-0");

                $(".control-img-play").removeClass("img-play");
                $(".control-img-play").addClass("img-play-0");
                                
            }
            if (section === 5) {
                $(".circle-our").removeClass("off");
                $(".circle-our").addClass("on");               
            }
            if (section !== 5) {
                $(".circle-our").removeClass("on");
                $(".circle-our").addClass("off");
            }
            if (section === 6) {
                $(".circle-services").removeClass("off");
                $(".circle-services").addClass("on");                
            }
            if (section !== 6) {
                $(".circle-services").removeClass("on");
                $(".circle-services").addClass("off");
            }
            if (section === 7) {
                $(".circle-testimonials").removeClass("off");
                $(".circle-testimonials").addClass("on");
            }
            if (section !== 7) {
                $(".circle-testimonials").removeClass("on");
                $(".circle-testimonials").addClass("off");
            }
            if (section === 8) {
                $(".circle-technology").removeClass("off");
                $(".circle-technology").addClass("on");
            }
            if (section !== 8) {
                $(".circle-technology").removeClass("on");
                $(".circle-technology").addClass("off");
            }
            if (section === 9) {
                $(".circle-contact").removeClass("off");
                $(".circle-contact").addClass("on");
            }
            if (section !== 9) {
                $(".circle-contact").removeClass("on");
                $(".circle-contact").addClass("off");
            }
        }
    });
});