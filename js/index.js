// Your code goes here

// Thought type writer on double click

let thoughtBtn = document.getElementById('thought-button');
thoughtBtn.style.background = '#00FFFF';
thoughtBtn.style.height = '40px';
thoughtBtn.style.borderRadius = '50px';
thoughtBtn.style.fontSize = '2rem';

let i = 0;
let thoughtText = 'I badly need a vacation... from EVERYTHING';

let speed = 50;

function thoughtTypeWriter() {
    if(i < thoughtText.length) {
        document.getElementById('thought-text').innerHTML += thoughtText.charAt(i);
        i++;
        setTimeout(thoughtTypeWriter, speed)
    }
}
thoughtBtn.addEventListener('dblclick', thoughtTypeWriter);

// // Enlarge text on mouseover

// let textContent = document.querySelectorAll('.text-content p');
// textContent.addEventListener('mouseover', )

// changing background
let contentSection = document.querySelector('.content-section');
function changeBackground(e) {    
    contentSection.style.background = "rgb("+e.offsetX+","+e.offsetY+",40)";
}

function resetBackground() {
    contentSection.style.background = "white";

}


let swapTextBtn = document.getElementById('swap-text');
swapTextBtn.style.background = '#00FFFF';
swapTextBtn.style.borderRadius = '20px';
swapTextBtn.style.fontSize = '2rem';

swapTextBtn.addEventListener('mouseover', changeBackground);
swapTextBtn.addEventListener('mouseout', resetBackground);

// disappearing div
let containerDiv = document.querySelector('.home');
console.log(containerDiv);

function disappearDiv() {    
    containerDiv.style.display = 'none';   
}

let disappearBtn = document.getElementById('disappear');
disappearBtn.style.background = '#00FFFF'
disappearBtn.style.borderRadius = '20px';
disappearBtn.style.fontSize = '2rem';

disappearBtn.addEventListener('mousedown', disappearDiv);

// appear div
let selectBtn = document.getElementById('select-text');
function selectAlert() {
    document.getElementById('appear-text').innerHTML = 'And well make all your dreams come true!';
    }

selectBtn.addEventListener('select', selectAlert);

function focusFunc() {
    selectBtn.style.background = '#00FFFF';    
}

selectBtn.addEventListener('focus', focusFunc);



let enlargeText = document.querySelectorAll('.destination');
let enlargedParagraphs = document.querySelectorAll('.destination p');
console.log(enlargedParagraphs);

function fontChangeFunc() {
    enlargedParagraphs[0].style.fontSize = '3rem'; 
    enlargedParagraphs[1].style.fontSize = '3rem';  
    enlargedParagraphs[2].style.fontSize = '3rem';    
}
function colorChangeFunc() {
    enlargedParagraphs[0].style.color = 'red'; 
    enlargedParagraphs[1].style.color = 'red';  
    enlargedParagraphs[2].style.color = 'red'; 

}

enlargeText.forEach((item) => {
    item.addEventListener('wheel', fontChangeFunc);
});
enlargeText.forEach((item) => {
    item.addEventListener('mouseup', colorChangeFunc);
});


// let home = document.querySelector('.nav-link');
// console.log(home);
// home.addEventListener('load', alertFunc);
// function alertFunc() {
//  let example = document.querySelector('.nav-link');
//  console.log(example);  
//  example.style.backgroundColor = 'red';
 

// }
// // alertFunc();

let funBusImg = document.querySelector('.intro img');
console.log(funBusImg);

function bodyColorChange(event) {
    document.body.style.backgroundColor = "rgb("+event.offsetX+","+event.offsetY+",40)";
}
function bodyColorNormal() {
    document.body.style.backgroundColor = 'white';
}

funBusImg.addEventListener('mouseenter', bodyColorChange);

funBusImg.addEventListener('mouseleave', bodyColorNormal);


let containerClick = document.querySelector('.home');
containerClick.addEventListener('click', function anEvent(e) {
    console.log(`I just clicked container`);
});

let introClick = document.querySelector('.intro');
introClick.addEventListener('click', function anotherEvent(e) {
    console.log(`I only clicked on intro`);
    e.stopPropagation();
});

let preventRefresh = document.querySelectorAll('.nav-link');
// preventRefresh[0].addEventListener('click', function noRefresh(e) {
//     e.preventDefault();
// });

preventRefresh.forEach((eachItem) => {
    eachItem.addEventListener('click', function noRefresh(e) {
    e.preventDefault();
})
});
    







    
