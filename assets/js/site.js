(function (initCode) {
    initCode(window.jQuery, window, document);
}
    (function ($, window, document) {
        $(function () {

            // Ativa o indicador da Seção ativa e Desativa os demais, através do Click
            $(".indicators-list li").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
                $(".indicators-list li").not(item).each(function () {
                    $(this).switchClass("on", "off");
                });
                item.addClass("on");
                item.removeClass("off");
            })
            // Âncoras de Navegação do menu Versão Desktop 
            $(".navigation-links-desktop p, .navigation-links-desktop button").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
            })            
            // Âncora de Retorno ao topo do Site
            $("#arrow-to-top").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
            })
            
// --------> // Menu Responsivo <--------

            // Âncoras de Navegação do menu Versão Mobile
            $(".navigation__mobile li a").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
                $(".navigation__mobile").hide(200);
                $("#button-mobile-closed").hide(100);
                $(".menu-hamburguer").show(100);
                $(".menu-hamburguer-closed").hide(100);
            })
            
            //Os 2 próximos trechos de código podem ser feitos em um único trecho
            // Botão para Abrir menu
            $("#button-mobile").click(function () {
                var item = $(this);
                $(".navigation__mobile").show(200);
                $("#button-mobile").hide(100);
                $(".menu-hamburguer-closed").show(100);
            })

            // Botão para Fechar menu
            $("#button-mobile-closed").click(function () {
                var item = $(this);
                $(".navigation__mobile").hide(200);
                $("#button-mobile-closed").hide(100);
                $(".menu-hamburguer").show(100);
                $(".menu-hamburguer-closed").hide(100);
            })     
            
            //Aqui dá pra usar sim o switch. Todos os ifs podem ser substituídos por switch
            // Inicio da Navegação por sessões e Animações            
            $.scrollify({
                section: ".sessao",
                InterstitialSection: ".sessao, .footer",
                setHeights: false,
                before: function (section) {
                    $(".indicators-list li").each(function () {
                        $(this).removeClass("on").addClass("off");
                    });       
                    if (section === 0) {
                        $("#circle-one").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                        $("#arrow-to-top").removeClass("arrow-up").addClass("disabled");
                        $("#m-logo-mobile").removeClass("disabled").addClass("logo-agdata-mobile");
                        $("#m-logo-desktop").removeClass("disabled").addClass("logo-agdata-desktop");
                        $("#m-icon-shop").removeClass("disabled").addClass("icon-shop");
                        $(".m-paragraph-home").removeClass("disabled").addClass("paragraph-home");
                        $("#m-title-home").removeClass("disabled").addClass("title-home");
                        $("#m-title-home-desktop").removeClass("disabled").addClass("title-home-desktop");
                        $(".m-button-desktop").removeClass("disabled").addClass("button-home");
                        $(".m-facebook").removeClass("disabled").addClass("facebook");
                        $(".m-instagram").removeClass("disabled").addClass("instagram");
                        $(".m-youtube").removeClass("disabled").addClass("youtube");
                        $(".m-linkedin").removeClass("disabled").addClass("linkedin");
                        $("#m-agency").removeClass("disabled").addClass("agency-desktop-link");
                        $("#m-video").removeClass("disabled").addClass("video-desktop-link");
                        $("#m-services").removeClass("disabled").addClass("services-desktop-link");
                        $("#m-technology").removeClass("disabled").addClass("technology-desktop-link");
                        $("#m-contact").removeClass("disabled").addClass("contact-button-desktop");
                    } else {
                        $("#arrow-to-top").removeClass("disabled").addClass("arrow-up");
                        $("#m-logo-mobile").removeClass("logo-agdata-mobile").addClass("disabled");
                        $("#m-logo-desktop").removeClass("logo-agdata-desktop").addClass("disabled");
                        $("#m-icon-shop").removeClass("icon-shop").addClass("disabled");
                        $(".m-paragraph-home").removeClass("paragraph-home").addClass("disabled");
                        $("#m-title-home").removeClass("title-home").addClass("disabled");
                        $("#m-title-home-desktop").removeClass("title-home-desktop").addClass("disabled");
                        $(".m-button-desktop").removeClass("button-home").addClass("disabled");
                        $(".m-facebook").removeClass("facebook").addClass("disabled");
                        $(".m-instagram").removeClass("instagram").addClass("disabled");
                        $(".m-youtube").removeClass("youtube").addClass("disabled");
                        $(".m-linkedin").removeClass("linkedin").addClass("disabled");
                        $("#m-agency").removeClass("agency-desktop-link").addClass("disabled");
                        $("#m-video").removeClass("video-desktop-link").addClass("disabled");
                        $("#m-services").removeClass("services-desktop-link").addClass("disabled");
                        $("#m-technology").removeClass("technology-desktop-link").addClass("disabled");
                        $("#m-contact").removeClass("contact-button-desktop").addClass("disabled");
                    }
                    if (section === 1) {
                        $("#circle-two").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                        $("#control-one-desk-div").removeClass("disabled").addClass("desktop-div-section-about-one");
                        $("#control-two-desk-div").removeClass("disabled").addClass("desktop-div-section-about-two");
                        $("#control-three-desk-div").removeClass("disabled").addClass("desktop-div-section-about-three");
                        $("#control-four-desk-div").removeClass("disabled").addClass("desktop-div-section-about-four");
                        $("#control-image-about-desktop").removeClass("disabled").addClass("image-about-desktop");
                        $("#control-content-about").removeClass("disabled").addClass("content-about-mobile");
                        $(".controlador-sobre-segunda-sessao").removeClass("disabled").addClass("sobre-segunda-sessao");
                    } else {
                        $("#control-one-desk-div").removeClass("desktop-div-section-about-one").addClass("disabled");
                        $("#control-two-desk-div").removeClass("desktop-div-section-about-two").addClass("disabled");
                        $("#control-three-desk-div").removeClass("desktop-div-section-about-three").addClass("disabled");
                        $("#control-four-desk-div").removeClass("desktop-div-section-about-four").addClass("disabled");
                        $("#control-image-about-desktop").removeClass("image-about-desktop").addClass("disabled");
                        $("#control-content-about").removeClass("content-about-mobile").addClass("disabled");
                        $(".controlador-sobre-segunda-sessao").removeClass("sobre-segunda-sessao").addClass("disabled");
                    }
                    if (section === 2) {
                        $("#circle-three").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                        $(".controladorbox1").removeClass("box-1-0").addClass("box-1");
                        $(".controladorbox2").removeClass("box-2-0").addClass("box-2");
                        $(".controladorbox3").removeClass("box-3-0").addClass("box-3");
                        
                        
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

                    } else {
                        $(".controladorbox1").removeClass("box-1").addClass("box-1-0");
                        $(".controladorbox2").removeClass("box-2").addClass("box-2-0");
                        $(".controladorbox3").removeClass("box-3").addClass("box-3-0");
                    }
                    if (section === 3) {
                        $("#circle-four").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                        $(".control-h1-section-4").removeClass("titulo-quarta-sessao-desk-0").addClass("titulo-quarta-sessao-desk");
                        $(".control-p-section-4").removeClass("p-quarta-sessao-desk-0").addClass("p-quarta-sessao-desk");
                        $(".control-img-section-4").removeClass("imagem-quarta-sessao-desk-intern-0").addClass("imagem-quarta-sessao-desk-intern");
                        $(".m04").removeClass("name-menu").addClass("name-menu-color");
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
                    } else {
                        $(".manipulador04").removeClass("quarta-opcao").addClass("quarta-opcao-desativado");
                        $(".control-h1-section-4").removeClass("titulo-quarta-sessao-desk").addClass("titulo-quarta-sessao-desk-0");
                        $(".control-p-section-4").removeClass("p-quarta-sessao-desk").addClass("p-quarta-sessao-desk-0");
                        $(".control-img-section-4").removeClass("imagem-quarta-sessao-desk-intern").addClass("imagem-quarta-sessao-desk-intern-0");
                        $(".m04").removeClass("name-menu-color").addClass("name-menu");
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
                        $("#circle-five").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                        $(".manipulador05").removeClass("quinta-opcao-desativado").addClass("quinta-opcao");
                        $(".m05").removeClass("name-menu").addClass("name-menu-color");
                        $(".control-p-section-5").removeClass("p-quinta-sessao-desk-0").addClass("p-quinta-sessao-desk");
                        $(".control-h3-section-5").removeClass("h3-quinta-sessao-desk-0").addClass("h3-quinta-sessao-desk");
                        $(".control-button-section-5").removeClass("button-quinta-sessao-desk-0").addClass("button-quinta-sessao-desk");
                        $(".control-img-play").removeClass("img-play-0").addClass("img-play");
                    } else {
                        $(".manipulador05").removeClass("quinta-opcao").addClass("quinta-opcao-desativado");
                        $(".m05").removeClass("name-menu-color").addClass("name-menu");
                        $(".control-p-section-5").removeClass("p-quinta-sessao-desk").addClass("p-quinta-sessao-desk-0");
                        $(".control-h3-section-5").removeClass("h3-quinta-sessao-desk").addClass("h3-quinta-sessao-desk-0");
                        $(".control-button-section-5").removeClass("button-quinta-sessao-desk").addClass("button-quinta-sessao-desk-0");
                        $(".control-img-play").removeClass("img-play").addClass("img-play-0");
                    }
                    if (section === 5) {
                        $("#m-animate-one-our").removeClass("disabled").addClass("first-animated-our");
                        $("#m-animate-two-our").removeClass("disabled").addClass("second-animated-our");
                        $("#m-animate-three-our").removeClass("disabled").addClass("third-animated-our");
                        $("#m-animate-four-our").removeClass("disabled").addClass("fourth-animated-our");
                        $("#m-animate-five-our").removeClass("disabled").addClass("fifth-animated-our");
                        $("#m-animate-six-our").removeClass("disabled").addClass("sixth-animated-our");
                        $("#m-animate-h2-our").removeClass("disabled").addClass("h2-sexta-sessao");
                        $("#m-animate-h1-our").removeClass("disabled").addClass("h1-sexta-sessao-desk");
                        $("#m-animate-img-our").removeClass("disabled").addClass("img-sexta-sessao-desk");
                        $("#circle-six").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                    } else{
                        $("#m-animate-one-our").removeClass("first-animated-our").addClass("disabled");
                        $("#m-animate-two-our").removeClass("second-animated-our").addClass("disabled");
                        $("#m-animate-three-our").removeClass("third-animated-our").addClass("disabled");
                        $("#m-animate-four-our").removeClass("fourth-animated-our").addClass("disabled");
                        $("#m-animate-five-our").removeClass("fifth-animated-our").addClass("disabled");
                        $("#m-animate-six-our").removeClass("sixth-animated-our").addClass("disabled");
                        $("#m-animate-h2-our").removeClass("h2-sexta-sessao").addClass("disabled");
                        $("#m-animate-h1-our").removeClass("h1-sexta-sessao-desk").addClass("disabled");
                        $("#m-animate-img-our").removeClass("img-sexta-sessao-desk").addClass("disabled");
                    }
                    if (section === 6) {
                        $("#circle-seven").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                    }
                    if (section === 7) {
                        $("#circle-eight").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                    }
                    if (section === 8) {
                        $("#circle-nine").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                    }
                    if (section === 9) {
                        $("#circle-ten").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
                    }
                }
            });
        })
    }));


