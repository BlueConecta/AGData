(function (initCode) {
    initCode(window.jQuery, window, document);
}
    (function ($, window, document) {
        $(function () {
            $(".indicators-list li").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
                $(".indicators-list li").not(item).each(function () {
                    $(this).switchClass("on", "off");
                });
                item.addClass("on");
                item.removeClass("off");
            })
            $(".navigation-links-desktop p").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
            })
            $(".navigation-links-desktop button").click(function () {
                var item = $(this);
                $.scrollify.move(item.data("section"));
            })
            $("#arrow-to-top").click(function () {
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
            $(".indicators-list li").each(function () {
                $(this).removeClass("on").addClass("off");
            });            
            
            $.scrollify({
                section: ".sessao",
                InterstitialSection: ".sessao, .footer",
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
                        $("#m-button-desktop").removeClass("disabled").addClass("button-home");
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
                        $("#m-paragraph-home").removeClass("paragraph-home").addClass("disabled");
                        $("#m-title-home").removeClass("title-home").addClass("disabled");
                        $("#m-title-home-desktop").removeClass("title-home-desktop").addClass("disabled");
                        $("#m-button-desktop").removeClass("button-home").addClass("disabled");
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
                        $(".control-desk-div2").removeClass("desktop-div-section2-1-0").addClass("desktop-div-section2-1");
                        $(".control2-desk-div2").removeClass("desktop-div-section2-2-0").addClass("desktop-div-section2-2");
                        $(".control3-desk-div2").removeClass("desktop-div-section2-3-0").addClass("desktop-div-section2-3");
                        $(".control4-desk-div2").removeClass("desktop-div-section2-4-0").addClass("desktop-div-section2-4");
                        $(".m-image-about-desktop").removeClass("disabled").addClass("image-about-desktop");
                        $(".m-content-about").removeClass("disabled").addClass("content-about-mobile");
                        $(".controlador-sobre-segunda-sessao").removeClass("sobre-segunda-sessao-0").addClass("sobre-segunda-sessao");
                    } else {
                        $(".control-desk-div2").removeClass("desktop-div-section2-1").addClass("desktop-div-section2-1-0");
                        $(".control2-desk-div2").removeClass("desktop-div-section2-2").addClass("desktop-div-section2-2-0");
                        $(".control3-desk-div2").removeClass("desktop-div-section2-3").addClass("desktop-div-section2-3-0");
                        $(".control4-desk-div2").removeClass("desktop-div-section2-4").addClass("desktop-div-section2-4-0");
                        $(".m-image-about-desktop").removeClass("image-about-desktop").addClass("disabled");
                        $(".m-content-about").removeClass("content-about-mobile").addClass("disabled");
                        $(".controlador-sobre-segunda-sessao").removeClass("sobre-segunda-sessao").addClass("sobre-segunda-sessao-0");
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
                        $("#circle-six").switchClass("off", "on");
                        $(".indicators-list li").each(function () {
                            $(this).removeClass("on").addClass("off");
                        });
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


