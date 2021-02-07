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

