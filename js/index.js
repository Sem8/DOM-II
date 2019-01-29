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

// swap text
let contentSection = document.querySelector('.content-section');
function changeBackground(e) {    
    contentSection.style.background = "rgb("+e.offsetX+","+e.offsetY+",40)";
}

function resetBackground() {
    contentSection.style.background = "white";

}


let swapTextBtn = document.getElementById('swap-text');
swapTextBtn.style.background = '#00FFFF';
swapTextBtn.style.borderRadius = '50px';
swapTextBtn.style.fontSize = '2rem';

swapTextBtn.addEventListener('mouseover', changeBackground);
swapTextBtn.addEventListener('mouseout', resetBackground);



    
