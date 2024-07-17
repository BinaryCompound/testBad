$(document).ready(function() {

    $('.feedback').click(function() {
        $('.popup-window').show();
    });

    $('.close-popup').click(function() {
        $('.popup-window').hide();
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top}, 500);
        return false;
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoHeight: true,
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        nav: true,
        navText: ""
    });

    function updateTimer() {
        var now = new Date();
        var finish = new Date(now);
        finish.setHours(23, 59, 59, 999);

        if (now.getHours() === 23 && now.getMinutes() === 59 && now.getSeconds() === 59) {
            finish.setDate(finish.getDate() + 1);
        }

        var diff = finish - now;
        var hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * 1000 * 60;
        var seconds = Math.floor(diff / 1000);

        $(".timer .hours").html(pad(hours));
        $(".timer .minutes").html(pad(minutes));
        $(".timer .seconds").html(pad(seconds));
    }

    function pad(s) {
        return ("00" + s).slice(-2);
    }

    updateTimer();
    setInterval(updateTimer, 1000);
});

(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(71396785, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});