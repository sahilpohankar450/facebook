// Array of jokes
const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call fake spaghetti? An impasta!",
    "Why do cows have hooves instead of feet? Because they lactose."
];

// Get references to the DOM elements
const jokeElement = document.getElementById('joke');
const newJokeButton = document.getElementById('newJoke');

// Function to get a random joke
function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Event listener for the button
newJokeButton.addEventListener('click', () => {
    jokeElement.textContent = getRandomJoke();
});



