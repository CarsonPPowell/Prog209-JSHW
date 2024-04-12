let words = [];
let buttons = ["RED", "SWAP"];
let swappedWords = [];
let isSwapped = false;

console.log("Hello World");
function getWords() {
  for (i = 0; i <= 2; i++) {
    response = prompt("Enter a word: ");
    swappedWords.push(response);
    words.push(response);
  }
}

function displayWords(word) {
    let ul = document.querySelector("ul");
    if (!ul) {
      ul = document.createElement("ul");
      document.body.appendChild(ul);
    }
    let listElements = ul.querySelectorAll("li");
  
    for (let i = 0; i < 3; i++) {
      let li;
      if (listElements[i]) {
          li = listElements[i];
      } else {
          li = document.createElement('li');
          ul.appendChild(li);
      }

      li.textContent = word[i];
    }
  }
function createButtons() {
  for (i = 0; i < 2; i++) {
    let button = document.createElement("button");
    button.textContent = buttons[i];

    if (button.textContent == "RED") {
      button.onclick = function () {
        document.body.style.color = "red";
      };
    }
    else if (button.textContent == "SWAP") {
      button.addEventListener('click', function(){
        swap(words);
    });
    }
    document.getElementById("buttons").appendChild(button);
  }
}

function swap(word){
  if (!isSwapped){
    console.log("Words are being Swapped");
    swappedWords = word.map((oneWord) => {
        return oneWord.charAt(oneWord.length - 1) +
          oneWord.substring(1, oneWord.length - 1) +
          oneWord.charAt(0);
      });
      displayWords(swappedWords);
      isSwapped = true;
    }
    else{
      console.log("Words are not swapped");
      displayWords(words);
      isSwapped = false;
    }
}

function capWords() {
  words = words.map((oneWord) => {
    return oneWord.toUpperCase();
  });
  displayWords(words);
}

window.addEventListener("DOMContentLoaded", () => {
  getWords();
  displayWords(words);
  createButtons();
});
