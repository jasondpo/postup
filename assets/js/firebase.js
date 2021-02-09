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
var n = d.getDate();
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
    // profileTwo = document.getElementById('namebox').value;
    sender = localStorage.profileName;
    postData = document.getElementById('postBox').value;
    document.getElementById('postBox').value = "";
};

//-------------------------------- Post Data ---------------------------------//
document.getElementById('postBtn').onclick = function () {
    Ready();
    firebase.database().ref('student/' + personID).set({
        Message: postData,
        PrimaryProfile: personID,
        LastSenderName: sender,
        Timestamp: stamp
    });
    notifyAvailability();
}

//--------------------------------- Read & Display ---------------------------------//

var alertSound = document.getElementById("chime");

window.onload = function () {
    Ready();
    checkAvailability();
    firebase.database().ref('student/' + personID).on('value', function (snapshot) {
        document.getElementById('namebox').value = snapshot.val().secondProfile;

        if (snapshot.val().LastSenderName == localStorage.profileName) {
            document.getElementById('convoBox').innerHTML += "<div class='individualChatBlockEnd'><div class='messengerRight'><div class='timestampDiv'>" + snapshot.val().Timestamp + "</div>" + snapshot.val().Message + "</div></div>";
        } else {
            document.getElementById('convoBox').innerHTML += "<div class='individualChatBlockStart'><div class='messengerLeft'><div class='timestampDivLeft'>" + snapshot.val().Timestamp + "</div>" + snapshot.val().Message + "</div></div>";
        }

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



//--------------------------------- Check Availability ---------------------------------//
function getTime() {
    var exactTime = new Date();
    var milliTime = exactTime.getTime()
    return milliTime
}

function checkAvailability() {
    firebase.database().ref('availability/' + personID).on('value', function (snapshot) {
        if (snapshot.val().LastSenderName != localStorage.profileName && getTime() - snapshot.val().Timestamp <= 60000) {
            $(".startChatBottomActivityBtn").css("background-color", "#00e400");
            $(".startChatBottomBtn, #senderProfilePic").css("background-image", "url(assets/images/profiles/" + snapshot.val().LastSenderName + ".png)");
            $("#senderProfileName").html(snapshot.val().LastSenderName)
        } else if (snapshot.val().LastSenderName != localStorage.profileName && getTime() - snapshot.val().Timestamp >= 60000) {
            $(".startChatBottomActivityBtn").css("background-color", "#CCCCCC");
        } else if (snapshot.val().LastSenderName == localStorage.profileName) {
            // alert("Other user is me")
        }
    });
    setTimeout(function () { checkAvailability() }, 60000)
}

function notifyAvailability() {
    firebase.database().ref('availability/' + personID).set({
        LastSenderName: sender,
        PrimaryProfile: personID,
        Timestamp: getTime()
    });
}


// if(new_message){
//     if(!document.hasFocus()){
//         audio.play();
//         document.title="Have new messages";
//     }
//     else{
//         audio.stop();
//         document.title="Application Name";
//     } 
// }