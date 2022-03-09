$(document).ready(function () {
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar;SameSite=None;Secure";
    var a = 0;
    $(".submenu").show();
    $(".mainmenu .sub").click(function () {
        if (a == 0) {
            $(".submenu").hide();
            a = 1
        } else {
            $(".submenu").show();
            a = 0
        }
    })

    //    $("#fp-nav ul li a.active span, #fp-nav ul li a.active span").click(function () {
    //        $("#fp-nav ul li a>span+span").removeClass("on1"); $(this).addClass("on1");
    //    })

})
