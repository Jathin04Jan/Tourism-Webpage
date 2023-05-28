let text = document.getElementById('text');
let cloud = document.getElementById('2a');
let hill1 = document.getElementById('3a');
let hill2 = document.getElementById('4a');
let hill3 = document.getElementById('5a');
let hill4 = document.getElementById('6a');
let hill5 = document.getElementById('7a');
let trees = document.getElementById('8a');

let wave1 = document.getElementById('2b');
let wave2= document.getElementById('3b');

//let parachute = document.getElementById('parachute');

window.addEventListener('scroll', () => {
    let value = window.scrollY

    text.style.marginTop = value * -2.5 + 'px';

    cloud.style.top = value * 1.5 + 'px';

    hill3.style.left = value * -1.5 + 'px'; 
    hill4.style.left = value * 1.5 + 'px'; 

    trees.style.marginTop = value * 1.5 + 'px';

    wave1.style.top = value * 0.05 + 'px';
    wave2.style.top = value * -0.05 + 'px';

})