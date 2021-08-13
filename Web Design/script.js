const button = document.querySelector(".button");
const randomNumber = document.querySelector(".random-number");

button.addEventListener("click", () => {
  let number = Math.trunc(Math.random() * 500);
  console.log(number);
  randomNumber.textContent = `${number}`;
});
