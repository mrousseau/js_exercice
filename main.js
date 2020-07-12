/****
 * 
 
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

let iceCream = 'chocolat';
if (iceCream === 'chocolat') {
  alert("J'adore la glace au chocolat !");    
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");    
}

let resultat = multiply(2, 6);

alert(resultat);

document.querySelector('h1').addEventListener('click', function() {
    alert('1 - Aïe, arrêtez de cliquer !!');
});

let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() { alert('2 - Aïe, arrêtez de cliquer !!'); });

function multiply (num1, num2){
    let result = num1 * num2; 
    return result; 
}

*
****/

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '01.jpg') 
    {
      myImage.setAttribute('src', '02.jpg');
    } else {
      myImage.setAttribute('src', '01.jpg');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

alert(localStorage.getItem('nom')); 

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mozilla est cool, ' + storedName;
}

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Mozilla est cool, ' + myName;
}

myButton.addEventListener('click', function() {
  setUserName();
});



