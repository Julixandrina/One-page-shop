'use strict'
document.querySelector('#btn').onclick = function () {
    let btn = this;
    btn.classList.toggle('open');

    btn.classList.toggle('collapsed', !btn.classList.contains('open'));
    document.querySelector('.item-menu').classList.toggle('open', btn.classList.contains('open'));
}