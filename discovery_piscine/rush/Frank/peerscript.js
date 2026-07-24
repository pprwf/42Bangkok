function changeActiveLink(linkId) {
    var links = document.getElementsByClassName('nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active-link');
    }

    document.getElementById(linkId).classList.add('active-link');
}

document.getElementById('user-menu-button').addEventListener('click', function (e) {
    e.stopPropagation();

    var dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('hidden');

    var buttonRect = document.getElementById('user-menu-button').getBoundingClientRect();

    var dropdownTop = buttonRect.bottom + window.scrollY;
    var dropdownLeft = buttonRect.left + window.scrollX;

    dropdown.style.top = dropdownTop + 'px';
    dropdown.style.left = dropdownLeft - 80 + 'px';
    dropdown.style.position = 'absolute';
});

document.addEventListener('click', function () {
    var dropdown = document.getElementById('user-dropdown');
    if (!dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
    }
});
