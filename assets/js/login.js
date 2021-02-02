// localStorage.clear();
// Start Session and Enter
// $("#enterBtn").click(function () {
//     $("#startBtn").click();
// })

$('form').on('submit', function (e) {

    e.preventDefault();

    $.ajax({
        type: 'post',
        url: 'functions.php',
        data: $('form').serialize(),
        success: function () {
        }
    });

});


var profileName = "";
var themeName = "";

$("#profiles").change(function () {
    profileName = $('#profiles :selected').val();
    $("#profileSelectedBox").css('background-image', 'url(assets/images/profiles/' + profileName + '.png)');
    activateEnterBtn();
})

$("#theme").change(function () {
    themeName = $('#theme :selected').val();
    $("#themeSelectedBox").css('background-image', 'url(assets/images/themes/' + themeName + '.png)');
    activateEnterBtn();
})

function activateEnterBtn() {
    if (profileName != "" && profileName != "person_icon" && themeName != "" && themeName != "picture_icon") {
        $("#enterBtn").addClass('enterBtnActive');
        $("#enterBtnLink").addClass('enterBtnLink');
        $("#enterBtn h11").html('<i class="fas fa-lock-open"></i> Unlocked');
        $("#startBtn").click();
    } else {
        $("#enterBtn h11").html('<i class="fas fa-lock"></i> Locked');
        $("#enterBtn").removeClass('enterBtnActive');
        $("#enterBtnLink").removeClass('enterBtnLink');
    }
    storeProfileName();
    storeThemeName();
}

$("#chooseBtn").mouseover(function () {
    $("#rectangleUnderLogin").addClass('rectangleUnderLoginClass');
})
$("#chooseBtn").mouseout(function () {
    $("#rectangleUnderLogin").removeClass('rectangleUnderLoginClass');
})

//// Greeting ////
d = new Date();
currtime = d.getHours() * 100 + d.getMinutes();

if (currtime > 1199 && currtime < 1800) {
    document.querySelector('#greet').innerHTML = 'Good Afternoon...';
} if (currtime > 1799 && currtime < 2399) {
    document.querySelector('#greet').innerHTML = 'Good Evening...';
} if (currtime > 0 && currtime < 1200) {
    document.querySelector('#greet').innerHTML = 'Good Morning...';
}


//// Random Quotes ////
var quotes = [
    "If you always do what you did you'll always get what you got.",
    "If you don't know where you are going, any road will get you there.",
    "The journey of a thousand miles begins with one step.",
    "Never interrupt your enemy when he is making a mistake.",
    "It's not what happens to you, but how you react to it that matters.",
    "It's better to be a lion for a day than a sheep all your life.",
    "Be happy. It's one way of being wise.",
    "It's not what you look at that matters, it's what you see.",
    "Even if you're on the right track, you'll get run over if you just sit there.",
    "Slow and steady wins the race.",
    "To win without risk is to triumph without glory.",
    "Beware of false knowledge; it is more dangerous than ignorance.",
    "The best way to predict the future is to invent it.",
    "Discipline is the bridge between goals and accomplishment.",
    "It's not the having, it's the getting.",
    "The time to repair the roof is when the sun is shining.",
    "Habit, if not resisted, soon becomes necessity.",
    "No one wants advice - only corroboration.",
    "Nobody can give you wiser advice than yourself.",
    "Wise men make more opportunities than they find."
];

function randomQuote() {
    var randomNo = Math.floor((Math.random() * 18) + 1);
    $("#quote").html(quotes[randomNo]);
}

randomQuote();

//////////// Local Storage ////////////

function storeProfileName() {
    localStorage.profileName = profileName;
}
$("#profileSelectedBox").css('background-image', 'url(assets/images/profiles/' + localStorage.profileName + '.png)');
if (localStorage.profileName != null) {
    $("#profiles").val(localStorage.profileName);
}
///

function storeThemeName() {
    localStorage.themeName = themeName;
}
$("#themeSelectedBox").css('background-image', 'url(assets/images/themes/' + localStorage.themeName + '.png)');
if (localStorage.themeName != null) {
    $("#theme").val(localStorage.themeName);
}
///

if (localStorage.profileName != null && localStorage.profileName != "" && localStorage.themeName != "" && localStorage.themeName != null) {
    $("#enterBtn").addClass('enterBtnActive');
    $("#enterBtnLink").addClass('enterBtnLink');
    profileName = localStorage.profileName;
    themeName = localStorage.themeName;
    activateEnterBtn();
} else {
    $('select option:first-child').attr('selected', 'selected');
    $("#profileSelectedBox",).css('background-image', 'url(assets/images/person_icon.png)');
    $("#themeSelectedBox",).css('background-image', 'url(assets/images/picture_icon.png)');
}

