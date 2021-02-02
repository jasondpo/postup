
$("#slideshow > .imgHolder:gt(0)").hide();

var navSlide = document.body.getElementsByClassName("fa-circle");
var imgHolder = document.body.getElementsByClassName("imgHolder");
var currentFrame = 0;
var slideShowDot = 0;
var currentSecond = 0;
var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webRequestAnimationFrame ||
    window.msRequestAnimationFrame;


function startSlideShow(this_instance) {
    $('#slideshow > .imgHolder:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}

throttle();

function throttle(this_instance) {
    if (this_instance != 'stop') {
        currentFrame++
        if (currentFrame >= 1080) {
            startSlideShow()
            currentFrame = 0;
            slideShowDot++
        }
        if (slideShowDot == 8) { slideShowDot = 0 }
        inactiveSlideDot();
        navSlide[slideShowDot].style.color = "white";
        window.requestAnimationFrame(throttle);
    }
}

function inactiveSlideDot() {
    for (var i = 0; i < navSlide.length; i++) {
        navSlide[i].style.color = "";
    }
}

$(".fa-circle").click(function () {
    var indexNo = $(this).attr("id");
    indexNo = indexNo.charAt(indexNo.length - 1);
    slideShowDot = indexNo - 1;
    removePics();
    $(".imgHolder").hide(function () {
        $('#slideshowFreezeFrame').addClass('pic' + indexNo);
    });
    inactiveSlideDot();
    navSlide[slideShowDot].style.color = "white";
})

function removePics() { // Remove pics from slideshowFreezeFrame stops animation
    throttle('stop');
    requestAnimationFrame = "";
    for (var x = 0; x < imgHolder.length + 1; x++) {
        $("#slideshowFreezeFrame").removeClass('pic' + (x));
    }
}

// Automatically insert chosen theme.
$("#slideTheme").attr("href", "assets/styles/slides"+localStorage.themeName+".css?v<?php echo(rand(0,1000));?>")

