/* Typing animation */

var typed = new Typed("#typing", {

strings: [
"Software Developer",
"Web Developer",
"Java Programmer",
"Python Enthusiast"
],

typeSpeed: 60,
backSpeed: 40,
loop: true

});


/* Scroll animation */

ScrollReveal().reveal('.item', {
distance:'50px',
duration:1000,
origin:'bottom',
interval:200
});

ScrollReveal().reveal('.project', {
distance:'60px',
duration:1000,
origin:'bottom',
interval:200
});


/* Particle background */

particlesJS("particles-js", {

particles: {

number: { value: 80 },

size: { value: 3 },

move: { speed: 2 }

}

});
var text = ["Software Developer","Java Programmer","Python Developer","Web Developer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1000);

}else{

setTimeout(type,100);

}

}

type();