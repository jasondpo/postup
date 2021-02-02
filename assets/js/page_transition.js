fadeInPage();

function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader');
    var fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1)
    if (fileName == "index.php") {
        fader.style.top = "100%";
        fader.classList.add('fade-out');
        fader.addEventListener('animationend', function () {
            fader.style.top = 0;
        })
    } else {
        fader.classList.add('fade-out');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var anchors = document.getElementsByTagName('a');

    for (var idx = 0; idx < anchors.length; idx += 1) {

        if (anchors[idx].hostname != window.location.hostname ||
            anchors[idx].pathname == window.location.pathname) {
            continue;
        }

        anchors[idx].addEventListener('click', function (event) { // Change this

            var fader = document.getElementById('fader'),
                anchor = event.currentTarget;

            var listener = function () {
                window.location = anchor.href; // Change this
                fader.removeEventListener('animationend', listener);
            };

            fader.addEventListener('animationend', listener);

            event.preventDefault();

            fader.classList.add('fade-in');
        });

    }
});