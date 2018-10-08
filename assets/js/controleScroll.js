(function (initCode){
    initCode(window.jQuery, window, document);
 }(function ($, window, document){
     $(function(){
         $(".lista-menu li").click(function(){
             var item = $(this);
             $.scrollify.move(item.data("section"));
             $(".lista-menu li").not(item).each(function () {
                 $(this).switchClass("liga","desliga");
             });
             item.addClass("liga");
             item.removeClass("desliga");
         })
         $(".links-navegacao-desk p").click(function(){
            var item = $(this);
            $.scrollify.move(item.data("section"));
        })
        $(".links-navegacao-desk button").click(function(){
            var item = $(this);
            $.scrollify.move(item.data("section"));
        })
        $("#arrow-to-top").click(function(){
            var item = $(this);
            $.scrollify.move(item.data("section"));
        })
        $(".conteudo-menu li a").click(function () {
            var item = $(this);
            $.scrollify.move(item.data("section"));
            $(".menu-navegacao").hide(600);
            $("#botao-menu2").hide(300);
            $(".menu-hamburguer").show(300);
            $(".menu-hamburguer2").hide(300);
        })
        $(".navegacao #botao-menu").click(function () {
            var item = $(this);
            $(".menu-navegacao").show(300);
            $("#botao-menu").hide(300);
            $(".menu-hamburguer2").show(300);
        })
        $(".navegacao #botao-menu2").click(function () {
            var item = $(this);
            $(".menu-navegacao").hide(600);
            $("#botao-menu2").hide(300);
            $(".menu-hamburguer").show(300);
            $(".menu-hamburguer2").hide(3000);
        })      
     })
     
 }));



$(function () {

    $.scrollify({
        section: ".sessao",
        InterstitialSection: ".sessao, .footer",
        before: function (section) {

            if (section === 0) {

                $(".controle-arrow").removeClass("arrow-up");
                $(".controle-arrow").addClass("arrow-up0");

                $(".elemento1").removeClass("logo-agdata0");
                $(".elemento1").addClass("logo-agdata");

                $(".logo").removeClass("logo-agdata0");
                $(".logo").addClass("logo-agdata-desk");

                $(".icon-shop").removeClass("shop0");
                $(".icon-shop").addClass("shop");

                $(".elemento2").removeClass("menu-hamburguer0");
                $(".elemento2").addClass("menu-hamburguer");

                $(".elemento3").removeClass("paragrafo10");
                $(".elemento3").addClass("paragrafo1");

                $(".elemento4").removeClass("titulo10");
                $(".elemento4").addClass("titulo1");

                $(".elemento5").removeClass("botao10");
                $(".elemento5").addClass("botao1");

                $(".elemento6").removeClass("facebook10");
                $(".elemento6").addClass("facebook1");

                $(".elemento7").removeClass("instagram10");
                $(".elemento7").addClass("instagram1");

                $(".elemento8").removeClass("youtube10");
                $(".elemento8").addClass("youtube1");

                $(".elemento9").removeClass("linkedin10");
                $(".elemento9").addClass("linkedin1");

                $(".menu01").removeClass("link-nav010");
                $(".menu01").addClass("link-nav01");

                $(".menu02").removeClass("link-nav020");
                $(".menu02").addClass("link-nav02");

                $(".menu03").removeClass("link-nav030");
                $(".menu03").addClass("link-nav03");

                $(".menu04").removeClass("link-nav040");
                $(".menu04").addClass("link-nav04");

                $(".menu05").removeClass("nav-button-desk0");
                $(".menu05").addClass("nav-button-desk");
                }

            if (section !== 0) {
                $(".controle-arrow").removeClass("arrow-up0");
                $(".controle-arrow").addClass("arrow-up");

                $(".elemento1").removeClass("logo-agdata");
                $(".elemento1").addClass("logo-agdata0");

                $(".logo").removeClass("logo-agdata-desk");
                $(".logo").addClass("logo-agdata0");

                $(".icon-shop").removeClass("shop");
                $(".icon-shop").addClass("shop0");

                $(".elemento2").removeClass("menu-hamburguer");
                $(".elemento2").addClass("menu-hamburguer0");

                $(".elemento3").removeClass("paragrafo1");
                $(".elemento3").addClass("paragrafo10");

                $(".elemento4").removeClass("titulo1");
                $(".elemento4").addClass("titulo10");

                $(".elemento5").removeClass("botao1");
                $(".elemento5").addClass("botao10");

                $(".elemento6").removeClass("facebook1");
                $(".elemento6").addClass("facebook10");

                $(".elemento7").removeClass("instagram1");
                $(".elemento7").addClass("instagram10");

                $(".elemento8").removeClass("youtube1");
                $(".elemento8").addClass("youtube10");

                $(".elemento9").removeClass("linkedin1");
                $(".elemento9").addClass("linkedin10");

                $(".menu01").removeClass("link-nav01");
                $(".menu01").addClass("link-nav010");

                $(".menu02").removeClass("link-nav02");
                $(".menu02").addClass("link-nav020");

                $(".menu03").removeClass("link-nav03");
                $(".menu03").addClass("link-nav030");

                $(".menu04").removeClass("link-nav04");
                $(".menu04").addClass("link-nav040");

                $(".menu05").removeClass("nav-button-desk");
                $(".menu05").addClass("nav-button-desk0");
            }
            if (section === 1) {

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

                $(".controladorbox1").removeClass("box-1");
                $(".controladorbox1").addClass("box-1-0");

                $(".controladorbox2").removeClass("box-2");
                $(".controladorbox2").addClass("box-2-0");

                $(".controladorbox3").removeClass("box-3");
                $(".controladorbox3").addClass("box-3-0");
            }
            if (section === 3) {

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
               
            }
            if (section !== 5) {
                
            }
            if (section === 6) {
                
            }
            if (section !== 6) {
                
            }
            if (section === 7) {
               
            }
            if (section !== 7) {
                
            }
            if (section === 8) {
                
            }
            if (section !== 8) {
                
            }
            if (section === 9) {
                
            }
            if (section !== 9) {
                
            }
        }
    });
});