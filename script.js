const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.querySelector('.nav');
const icon = document.getElementById('icon');

open.addEventListener('click', function () {
    nav.classList.toggle('no-nav')
    icon.classList.toggle('fas fa-times')
})