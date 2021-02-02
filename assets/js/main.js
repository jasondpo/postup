$("#profileBtn").click(function () {
    localStorage.clear();
    window.location = 'index.php'
})

// Profile pic
$("#profileBtn").css("background-image", "url(assets/images/profiles/" + localStorage.profileName + ".png)");

$("#profileBtn").mouseover(function () {
    $(this).css("background-image", "url(assets/images/profiles/logOut_icon.png)")
});

$("#profileBtn").mouseout(function () {
    $(this).css("background-image", "url(assets/images/profiles/" + localStorage.profileName + ".png)")
});

// Floating infobox
$(document).on('mouseover', '.infoHere', function () {
    $('.nameHolder').html("");
    var x = $(this).offset();
    var above = x.top;
    var fromLeft = x.left;
    var divWords = $(this).find(':first-child').html();
    $('#infoBox').fadeIn(200).css({ 'right': 110, 'top': above - 7 });
    $('.nameHolder').html(divWords);
});
$(document).on('mouseout', '.infoHere', function () {
    $('#infoBox').hide();
});

// Options
var overlay = document.getElementById("overlayOptions");
var claimOn = "";

$("#chooseAlbumBox").click(function () {
    if (overlay.style.right == "100%" || overlay.style.right != "100px") {
        overlay.style.right = "100px";
        $("#triangle-right").css({ "top": "142px", "right": "-14px" });
        $("#logo").css("z-index", "100");
        claimOn = "chooseAlbumBox"
    } else if (claimOn != "uploadAlbumBox") {
        overlay.style.right = "100%";
        $("#triangle-right").css({ "top": "142px", "right": "0" });
        $("#logo").css("z-index", "5");
        claimOn = ""
    }
})

$("#uploadAlbumBox").click(function () {
    if (overlay.style.right == "100%" || overlay.style.right != "100px") {
        overlay.style.right = "100px";
        $("#triangle-right").css({ "top": "193px", "right": "-14px" });
        $("#logo").css("z-index", "100");
        claimOn = "uploadAlbumBox"
    } else if (claimOn != "chooseAlbumBox") {
        overlay.style.right = "100%";
        $("#triangle-right").css({ "top": "193px", "right": "0" });
        $("#logo").css("z-index", "5");
        claimOn = ""
    }
})
