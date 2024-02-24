const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getWord() {
  const randomWord =
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)] +
    alphabet[Math.floor(Math.random() * alphabet.length)];

  document.getElementById("randomWord").textContent = randomWord;
}

// второй способ, просто для себя
const alph = "abcdefghijklmnopqrstuvwxyz";
function randomWord() {
  return Math.floor(Math.random() * alph.length);
}
function getNewWord() {
  const a1 = alph[randomWord()];
  const a2 = alph[randomWord()];
  const a3 = alph[randomWord()];
  const a4 = alph[randomWord()];
  return a1 + a2 + a3 + a4;
}
console.log(getNewWord());
