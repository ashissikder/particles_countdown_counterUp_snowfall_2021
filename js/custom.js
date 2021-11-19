$(document).ready(function(){
    // typed.js plugIn
    var typed = new Typed('.element', {
        strings: ["web developer", "content creator" ,"web designer"],
        typeSpeed: 200,
        backSpeed: 100,
        showCursor: false,
        loop: true,
    });
     // counter up plugIn
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    $('#countdown').countdown({
        year: 2021,
        month: 12,
        day:24,
        hour: 0,
        minute: 0,
        second: 0,
    })
    $("#snow" ).fallingSnow();
});