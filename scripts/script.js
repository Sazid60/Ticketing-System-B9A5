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


    // button disable after 4 click
    const clickedCount = getElementValue('seat-count')

    if (clickedCount >= 4) {
        alert('You cannot buy more than 4 tickets');
        for (const element of targetElements) {
            element.removeEventListener('click', handleSelect);
        }
    }
}





