const text = document.getElementById('text');
const cloud = document.getElementById('2a');
const hill3 = document.getElementById('5a');
const hill4 = document.getElementById('6a');
//const trees = document.getElementById('8a');
const wave3 = document.getElementById('3b');
const wave4 = document.getElementById('4b');
const wave5 = document.getElementById('5b');
const wave6 = document.getElementById('6b');
const wave7 = document.getElementById('7b');
const wave8 = document.getElementById('8b');
const parachute = document.getElementById('parachute');
const camp = document.getElementById('camp');
const trek = document.getElementById('trek');
const ski = document.getElementById('ski');
const scuba = document.getElementById('scuba');

window.addEventListener('scroll', () => {
  const section1Height = document.querySelector('.parallax1').offsetHeight;
  const section2Height = document.querySelector('.parallax2').offsetHeight;
  const scrollY = window.scrollY;

  // Parallax for section 1
  if (scrollY < section1Height) {
    const scrollPercentage = (scrollY / section1Height) * 100;
    text.style.marginTop = -scrollPercentage * 25 + 'px';
    cloud.style.top = scrollPercentage * 15 + 'px';
    hill3.style.left = scrollPercentage * -7.5 + 'px';
    hill4.style.left = scrollPercentage * 7.5 + 'px';
    //trees.style.marginTop = scrollPercentage * 15 + 'px';
    parachute.style.top = scrollPercentage * 25 + 'px';
    parachute.style.left = scrollPercentage * 15 + 'px';
    camp.style.left = scrollPercentage * 2.5 + 'px';
    trek.style.left = scrollPercentage * -10.5 + 'px';
    trek.style.top = scrollPercentage * -03 + 'px';
  }

  // Parallax for section 2
  if (scrollY >= section1Height && scrollY < section1Height + section2Height) {
    const scrollPercentage = ((scrollY - section1Height) / section2Height) * 100;
    wave3.style.top = scrollPercentage * -2.5 + 'px';
    wave4.style.top = scrollPercentage * -1.5 + 'px';
    wave5.style.top = scrollPercentage * -1.5 + 'px';
    wave6.style.top = scrollPercentage * -2.5 + 'px';
    wave7.style.top = scrollPercentage * -3 + 'px';
    wave8.style.top = scrollPercentage * -3.5 + 'px';
    
    ski.style.left = scrollPercentage * -3 + 'px';
    scuba.style.left = scrollPercentage * 3 + 'px';
    scuba.style.top = scrollPercentage * 1 + 'px';
  }
});

