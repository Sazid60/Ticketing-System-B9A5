// alert('Connected')

// Common Functions

// Get Element value
function getElementText(elementId) {
    const elementField = document.getElementById(elementId);
    const elementInnerText = elementField.innerText;
    const elementInnerValue = parseInt(elementInnerText)
    return elementInnerValue;
}

// Set Element Value
function setElementText(elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}

// ______________________________________________Main Functionality_____________________________________
const targetElements = document.getElementsByClassName('seats');
// console.log(targetElements)

for (const element of targetElements) {
    // console.log(element.innerText)
    element.addEventListener('click', function(){
        element.style.backgroundColor ="green"
    })
}



