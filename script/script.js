$(document).ready(function () {
    var a = 0;
    $(".mainmenu .sub").click(function () {
        if (a == 0) {
            $(".submenu").show();
            a = 1
        } else {
            $(".submenu").hide();
            a = 0
        }
    })
})
