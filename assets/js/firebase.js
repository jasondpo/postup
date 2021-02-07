
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
///////
var d = new Date();
var n = d.getDay();
var h = d.getHours();
var ampm = h >= 12 ? ' PM' : ' AM';
h = h % 12;
h = h ? h : 12;
var m = d.getMinutes();
m = m < 10 ? '0' + m : m;
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
var stamp = months[d.getMonth()] + " " + n + " AT " + h + ":" + m + ampm;
//////
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
        PrimaryProfile: personID,
        SecondaryProfile: profileTwo,
        Timestamp: stamp
    });
}

//--------------------------------- Read ---------------------------------//

var alertSound = document.getElementById("chime");

window.onload = function () {
    Ready();
    firebase.database().ref('student/' + personID).on('value', function (snapshot) {
        document.getElementById('namebox').value = snapshot.val().secondProfile;

        document.getElementById('convoBox').innerHTML += "<div class='individualChatBlock'><div class='messengerRight'><div class='timestampDiv'>" + snapshot.val().Timestamp + "</div>" + snapshot.val().Message + "</div></div>";

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







