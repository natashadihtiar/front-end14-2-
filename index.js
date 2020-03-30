/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */


const counter = function() {
    const clear= 0;
    let count = +prompt ( 'Задайте начальные значения:' );
    let step = +prompt ( 'Задайте шаг счетчика:' );
    function changeBy(step) {
        count += step;
    }
    return {
        adding: function() {
            changeBy(step);
        },
        value: function() {
            return count;
        },
        cleaning: function() {
            return count = 0;
        }
    };
}
const vkcounter = counter();
const fbcounter = counter();
const cleaner = counter();

const $VK = document.querySelector('#VK') ;
const $FB =document.querySelector('#FB');
const $Clean =document.querySelector('#Clean');

$VK.addEventListener('click', () => {
    vkcounter.adding();
    console.log('VK:' + vkcounter.value());
});

$FB.addEventListener('click', () => {
    fbcounter.adding();
    console.log('FB:' + fbcounter.value());
});
$Clean.addEventListener('click',() => {
    console.log(cleaner.cleaning()); 
});

