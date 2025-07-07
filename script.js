
const quotes = [
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");
const saveBtn = document.getElementById("save-fav");
const favList = document.getElementById("fav-list");
const toggleMode = document.getElementById("toggle-mode");

let currentQuote = {};

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[random];
  quoteText.textContent = `"${currentQuote.quote}"`;
  authorText.textContent = `- ${currentQuote.author}`;
  tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote.quote}" - ${currentQuote.author}`)}`;
}

function saveFavorite() {
  const listItem = document.createElement("li");
  listItem.textContent = `"${currentQuote.quote}" — ${currentQuote.author}`;
  favList.appendChild(listItem);
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

newQuoteBtn.addEventListener("click", showQuote);
saveBtn.addEventListener("click", saveFavorite);
toggleMode.addEventListener("click", toggleTheme);

window.onload = showQuote;
