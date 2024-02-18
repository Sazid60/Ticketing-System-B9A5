// alert('Connected')

// Common Functions

// Get Element value
function getElementValue(elementId) {
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
let count = 0;
const targetElements = document.getElementsByClassName('seats');

for (const element of targetElements) {
    element.addEventListener('click', handleSelect);
}

function handleSelect(event) {
    const element = event.currentTarget;
    element.style.backgroundColor = "green";
    element.classList.add('disable');
    count++;
    setElementText('seat-count', count)
    const seatDeductedValue = getElementValue('seat-deduct') - 1;
    console.log(seatDeductedValue)
    setElementText('seat-deduct', seatDeductedValue)

    // Appending 
    const containerDiv1 = document.getElementById('container-div-1');
    const containerDiv2 = document.getElementById('container-div-2');
    const containerDiv3 = document.getElementById('container-div-3');

    const p1 = document.createElement('p');
    p1.innerText = element.innerText;
    console.log(p1.innerText);

    const p2 = document.createElement('li');
    p2.innerText = 'Economy Class';

    const p3 = document.createElement('p');
    p3.innerText = getElementValue('per-seat-price');

    containerDiv1.appendChild(p1)
    containerDiv2.appendChild(p2)
    containerDiv3.appendChild(p3)



    // button disable after 4 click
    const clickedCount = getElementValue('seat-count')
    if (clickedCount >= 4) {
        alert('You cannot buy more than 4 tickets');
        for (const element of targetElements) {
            element.removeEventListener('click', handleSelect);
        }
    }

}





