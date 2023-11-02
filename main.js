// const quoteElement = document.getElementById("quote");
// const authorElement = document.getElementById("author");

// let currentQuoteIndex = 0;

// function displayQuote() {
//   const currentQuote = quotes[currentQuoteIndex];
//   quoteElement.textContent = currentQuote.quote;
//   authorElement.innerHTML = `- <a href="${currentQuote.profilLink}" target="_blank">${currentQuote.name}</a>`;
//   // currentQuoteIndex = Math.floor(Math.random() * quotes.length)
//   currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length ;
// }

// // Initial display
// displayQuote();

// // Change the quote every 3 seconds
// setInterval(displayQuote, 3000);

// Sample data (quotes)

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

let currentQuoteIndex = 0;

function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const currentQuote = quotes[randomIndex];
  quoteElement.textContent = currentQuote.quote;
  authorElement.innerHTML = `- <a href="${currentQuote.profilLink}" target="_blank">${currentQuote.name}</a>`;

}

// Initial display
displayQuote();

// // Change the quote every 3 seconds
// setInterval(displayQuote, 3000);

// Change the quote every 5 seconds
setInterval(displayQuote, 5000); // 5 seconds in milliseconds

// Change background function 
// Array containing URLs of background images
const backgrounds = [
  "images/20.png",
        "images/21.png",
        "images/22.png",
        "images/23.png",
        "images/24.png",
        "images/25.png",
        "images/26.png",
        "images/27.png",
        "images/28.png",
        "images/29.png",
        "images/30.png",
        "images/31.png",
        "images/32.png",
        "images/33.png",
        "images/34.png",
        "images/35.png",
        "images/36.png",
        "images/37.png",
        "images/38.png",
        "images/39.png",
        "images/40.png",
        "images/41.png",
        "images/42.png",
        "images/43.png",
        "images/44.png",
        "images/45.png",
        "images/46.png",
        "images/47.png",
        "images/48.png",
        "images/49.png",
        "images/50.png"
  // Add more background image URLs here
];

// Function to change the background image
function changeBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
}

// Change the initial background and every 1 minute
changeBackground(); // Initial change
setInterval(changeBackground, 60 * 1000); // Change every 1 minute

