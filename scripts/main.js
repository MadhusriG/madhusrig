let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox-non-profit.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please tell me your name')
    if(!myName){
        setUserName()
    }
    localStorage.setItem('name',myName)
    myHeading.textContent = 'JavaScript is cool!' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'JavaScript is cool!' + storedName
}

myButton.onclick = function() {
    setUserName()
}