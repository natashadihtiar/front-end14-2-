/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
const counter = (initial = 0, step = 1) => {
    let count = initial;

    return {
        next() {
            return count += step;
        },

        reset() {
            return count = initial;
        }
    };
};

const vkcounter = counter(4, 3);
const fbcounter = counter(1, 1);
const cleaner = counter(0);

const $VK = document.querySelector('#VK') ;
const $FB =document.querySelector('#FB');
const $Clean =document.querySelector('#Clean');

$VK.addEventListener('click', () => {
    vkcounter.next();
});

$FB.addEventListener('click', () => {
    fbcounter.next();
});

$Clean.addEventListener('click',() => {
    vkcounter.reset(); 
    fbcounter.reset(); 
});

