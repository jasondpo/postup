
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


//--------------------------------- Configuration ---------------------------------//
var firebaseConfig = {
    apiKey: "AIzaSyDyF2tISFgVAHOL_efMz-4Cnm_yHXYXLh8",
    authDomain: "second-project-3d7a7.firebaseapp.com",
    projectId: "second-project-3d7a7",
    storageBucket: "second-project-3d7a7.appspot.com",
    messagingSenderId: "650733216383",
    appId: "1:650733216383:web:68eb5eed0e650c4108154a"
};
firebase.initializeApp(firebaseConfig);

//--------------------------------- Collect Data ---------------------------------//
var nameV, convo, msglength;
personID = 14;

function Ready() {
    profileTwo = document.getElementById('namebox').value;
    postData = document.getElementById('postBox').value;
    document.getElementById('postBox').value = "";
};

//-------------------------------- Post Data ---------------------------------//
document.getElementById('postBtn').onclick = function () {
    Ready();
    firebase.database().ref('student/' + personID).set({
        Message: postData,
        primaryProfile: personID,
        secondaryProfile: profileTwo
    });
}

//--------------------------------- Read ---------------------------------//
var alertSound = document.getElementById("chime");

window.onload = function () {
    Ready();
    firebase.database().ref('student/' + personID).on('value', function (snapshot) { // personID must be primary Profile
        document.getElementById('namebox').value = snapshot.val().secondProfile;
        document.getElementById('convoBox').innerHTML += "<div class='messengerRight'>" + localStorage.profileName + ": " + snapshot.val().Message + "</div>";

        msglength = snapshot.val().Message
        if (msglength.length > 10) {
            alertSound.play();
            scrollDown();
        }
    });
}

// function changeTitle() {
//     count++;
//     var newTitle = '(' + count + ') ' + title;
//     document.title = newTitle;
// }
//--------------------------------- Update ---------------------------------//
// document.getElementById('update').onclick = function () {
//     Ready();
//     firebase.database().ref('student/' + personID).update({
//         secondProfile: nameV,
//         Gender: convo
//     });
// }

//--------------------------------- Delete ---------------------------------//
document.getElementById('delete').onclick = function () {
    Ready();
    firebase.database().ref('student/' + personID).remove();
}

/// Auto scroll to bottom of message div
var objDiv = document.getElementById("convoBox");
function scrollDown() {
    objDiv.scrollTop = objDiv.scrollHeight;
}

/// Trigger postBtn when keycode 13 is pressed
$("body").keydown(function (event) {
    var x = event.which || event.keyCode;
    if (x == 13) {
        event.preventDefault();
        $("#postBtn").click();
    }
})
