// .01A Toggle view emoji
$("#emojiBtn").click(function () {
    $("#emojiBar").toggle();
})

// .01B Close emoji if click outside
$(window).click(function () {
    $("#emojiBar").hide();
});

$('#emojiBar, #emojiList, #emojiBtn').click(function (event) {
    event.stopPropagation();
});

// .02 Add emoji
$(".emoji").click(function () {
    var chosenEmoji = $(this).html();
    var postVal = $("#postBox").val();
    var addEmoji = postVal + chosenEmoji;
    $("#postBox").val(addEmoji);
    $("#emojiBar").toggle();
})

// .03 Textarea autogrows with each new line
$('#postBox').on('keydown', function (e) {
    if (e.which == 13) {
        e.preventDefault();
        $(this).css("height", "40px");
    }
}).on('input', function () {
    $(this).height(1);
    var totalHeight = $(this).prop('scrollHeight') - parseInt($(this).css('padding-top')) - parseInt($(this).css('padding-bottom'));
    $(this).height(totalHeight);
});

/// .04 Trigger postBtn when keycode 13 is pressed
$("body").keydown(function (event) {
    var x = event.which || event.keyCode;
    if (x == 13) {
        event.preventDefault();
        $("#postBtn").click();
    }
})

/// .05 Auto scroll to bottom of message div
var objDiv = document.getElementById("convoBox");
function scrollDown() {
    objDiv.scrollTop = objDiv.scrollHeight;
}

//// .06 Icons

$('#postBox').keyup(function (event) {
    if ($('#postBox').val() != "" && $("#postBox").is(":focus")) {
        $("#postBtn").addClass('postBtnActive');
    }
});

$('#postBox').click(function () {
    if ($('#postBox').val() != "") {
        $("#postBtn").addClass('postBtnActive');
    }
});

$(window).click(function () {
    $("#postBtn").removeClass('postBtnActive');
});

$('#senderProfileTheme').click(function () {
    $("#senderProfileTheme").toggleClass("profileThemeActive");
});

$('#senderProfileTheme').mouseover(function () {
    $("#playThemeAlt").addClass("altClassActive");
});
$('#senderProfileTheme').mouseleave(function () {
    $("#playThemeAlt").removeClass("altClassActive");
});

$('#messageContainerClose').mouseover(function () {
    $("#closeChatAlt").addClass("altClassActive");
});
$('#messageContainerClose').mouseleave(function () {
    $("#closeChatAlt").removeClass("altClassActive");
});

$('#mydivheader').mouseover(function () {
    $("#headerAlt").addClass("altClassActive");
});
$('#mydivheader').mouseleave(function () {
    $("#headerAlt").removeClass("altClassActive");
});

$('#video').mouseover(function () {
    $("#videoAlt").addClass("altClassActive");
});
$('#video').mouseleave(function () {
    $("#videoAlt").removeClass("altClassActive");
});
$('#video').click(function () {
    $("#videoConference").toggle();
    $("#videoFrame").attr('src', "https://demo.tico.chat/powercall?room=postupvideo4852&entry=wondercall");
});