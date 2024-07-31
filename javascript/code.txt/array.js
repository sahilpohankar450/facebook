let array = [1, 2, 3, 4, 5];

// Searching for element 3
let searchElement = 3;
let index = array.indexOf(searchElement);

if (index !== -1) {
    console.log(`Element ${searchElement} found at index ${index}.`);
} else {
    console.log(`Element ${searchElement} not found in the array.`);
}
