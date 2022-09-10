/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suits = ["♦", "♥", "♠", "♣"];
  let regex = /^\d+$/;

  //Genera la carta aleatoria al recargar la pagina
  cardGenerator(cards, suits);

  let card = document.querySelector(".card");
  let dimensionInput = document.querySelector(".dimension");
  let width = document.querySelector("#width");
  let height = document.querySelector("#height");

  //Permítele al usuario especificar el width y height de la carta
  dimensionInput.addEventListener("keyup", event => {
    if (event.key === "Enter" && regex.test(width.value)) {
      card.style.width = `${width.value}px`;
      console.log(width.value);
      width.value = "";
    }
    if (event.key === "Enter" && regex.test(height.value)) {
      card.style.height = `${height.value}px`;
      console.log(height.value);
      height.value = "";
    }
  });

  //Genera una nueva carta aleatoria al presionar el boton "New Card"
  document.querySelector(".button").addEventListener("click", () => {
    cardGenerator(cards, suits);
  });

  //Genera una nueva carta aleatoria automaticamente cada 10 segundos
  setInterval(() => {
    cardGenerator(cards, suits);
  }, 10000);

  //Resetea la carta a su tamaño original
  document.querySelector(".reset").addEventListener("click", () => {
    card.style.removeProperty("width");
    card.style.removeProperty("height");
  });
};

//Crea una carta aleatoria
const cardGenerator = (cardArray, suitArray) => {
  let suitTop = document.querySelector(".top-suit");
  let suitBottom = document.querySelector(".bottom-suit");
  let number = document.querySelector(".number");

  let suit = randomGenerator(suitArray);

  suitTop.innerHTML = suitArray[suit];
  suitBottom.innerHTML = suitArray[suit];

  number.innerHTML = cardArray[randomGenerator(cardArray)];

  if (suitArray[suit] === "♥" || suitArray[suit] === "♦") {
    suitTop.style.color = "red";
    suitBottom.style.color = "red";
    number.style.color = "red";
  } else {
    suitTop.style.color = "black";
    suitBottom.style.color = "black";
    number.style.color = "black";
  }
};

//Genera un número aleatorio
const randomGenerator = array => {
  let randomNumber = Math.floor(Math.random() * array.length);

  return randomNumber;
};
