/// Parallax

window.onscroll = function () {

    const target = document.querySelectorAll('.scroll');

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        target[index].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
    }

    reveal();

};

/// Reveal on scroll
var hideElem = document.getElementsByClassName('hideme');

function reveal() {
    //Use next two lines (then add variable) ONLY if the parent is a div
    var parentElem = document.getElementById('aboutSection');
    parentElem = parentElem.offsetTop;

    for (var hde = 0; hde < hideElem.length; hde++) {

        var top_of_object = hideElem[hde].offsetTop + parentElem;
        var bottom_of_object = hideElem[hde].offsetTop + hideElem[hde].offsetHeight + parentElem;
        var bottom_of_window = window.scrollY + window.innerHeight;

        if (bottom_of_window > bottom_of_object || bottom_of_window > top_of_object + 250) {
            hideElem[hde].classList.add("reveal-elem")
        }
    }
}


