const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

let currentQuoteIndex = 0;

function displayQuote() {
  const currentQuote = quotes[currentQuoteIndex];
  quoteElement.textContent = currentQuote.quote;
  authorElement.innerHTML = `- <a href="${currentQuote.profilLink}" target="_blank">${currentQuote.name}</a>`;
  // currentQuoteIndex = Math.floor(Math.random() * quotes.length)
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length ;
}

// Initial display
displayQuote();

// Change the quote every 3 seconds
setInterval(displayQuote, 3000);
