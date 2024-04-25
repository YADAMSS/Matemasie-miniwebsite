// let specimen = document.getElementById('typeSpecimen');
// let userInput = document.getElementById('userInput');

// // Function to update the specimen text
// function updateText() {
//     specimen.textContent = userInput.value || 'Your Text Here'; // Use input text or default
// }

// // Listen for input event to dynamically update the text
// userInput.addEventListener('input', updateText);

// function changeColor() {
//     specimen.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
// }

// function increaseSize() {
//     let currentSize = parseFloat(window.getComputedStyle(specimen, null).getPropertyValue('font-size'));
//     specimen.style.fontSize = (currentSize + 5) + 'px';
// }

// function decreaseSize() {
//     let currentSize = parseFloat(window.getComputedStyle(specimen, null).getPropertyValue('font-size'));
//     specimen.style.fontSize = Math.max(currentSize - 5, 10) + 'px'; // Don't go below 10px
// }

const gridContainer = document.querySelector('.grid');

function displayCharacters(start, end) {
    for (let i = start; i <= end; i++) {
        let character = String.fromCharCode(i);
        let characterDiv = document.createElement('div');
        characterDiv.textContent = character;
        gridContainer.appendChild(characterDiv);
    }
}

// Example range: Basic Latin block (U+0020 to U+007E)
displayCharacters(0,85,200);



