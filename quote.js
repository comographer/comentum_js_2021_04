const quote = document.querySelector(".js-quote");

const QUOTE_NUMBER = 9;

const quotes = [
  "Anger is the ultimate destroyer of your own peace of mind. - Dalai Lama",
  "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered. - Michelle Obama",
  "Desire fuels our search for the life we prize. - John Eldredge",
  "Look at the sky; feel the rain on your face, your hands, your smile. - Glenn Berkenkamp",
  "Love is happiness, Love is life. - Thomas Henry Burrowes",
  "Honesty is the first ingredient to create self-confidence. - NK Sondhi",
  "Wherever you go, no matter what the weather, always bring your own sunshine. - Anthony J. D’Angelo",
  "Live life to the fullest and focus on the positive. - Matt Cameron",
  "No one is perfect - that’s why pencils have erasers. - Wolfgang Riebe",
];

function writeQuote(quoteNumber) {
  const newQuote = quotes[quoteNumber + 1];
  console.log(newQuote);
  quote.innerText = newQuote;
}

function genRandom() {
  const number = Math.floor(Math.random() * QUOTE_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  writeQuote(randomNumber);
}

init();

// RNG in js can be done with module Math.random()
