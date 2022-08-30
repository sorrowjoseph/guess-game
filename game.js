// "use strict";
// // document.querySelector(".number").textContent = 4;
// let score = 20;
// let highScore = 0;
// let random = Math.trunc(Math.random() * 20) + 1;
// console.log(random);
// document.querySelector(".score").textContent = score;
// // document.querySelector(".number").textContent = random;
// let guess;
// document.querySelector(".label-highscore").style.visibility = "hidden";
// document.querySelector(".check").addEventListener("click", function () {

//   guess = Number(document.querySelector(".guess").value);
//   //   alert(typeof guess, guess);

//   if (!guess) {
//     document.querySelector(".message").textContent = "this is not a number";
//   } else if (guess == random) {
//     document.querySelector(".message").textContent = "you are correct";
//     document.querySelector(".number").textContent = random;

//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(".highscore").textContent = highScore;
//     }
//   } else if (guess > random) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "too high";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you lost";
//     }
//   } else if (guess < random) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "you lost";
//     }
//   }
// });

// document.querySelector(".again").addEventListener("click", () => {
//   score = 20;
//   guess = Number(document.querySelector(".guess").value);
//   document.querySelector(".message").textContent = "start guessing";
//   document.querySelector(".score").textContent = 20;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "?";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
//   random = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(".label-highscore").style.visibility = "hidden";
// });

"use strict";
// document.querySelector(".number").textContent = 4;
let score = 20;
let highScore = 0;
let random = Math.trunc(Math.random() * 20) + 1;
console.log(random);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".score").textContent = score;
// document.querySelector(".number").textContent = random;
let guess;
document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);
  //   alert(typeof guess, guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "this is not a number";
    displayMessage("this is not a number");
  } else if (guess == random) {
    // document.querySelector(".message").textContent = "you are correct";
    displayMessage("you are correct");

    document.querySelector(".number").textContent = random;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      console.log(highScore);
      document.querySelector(".label-highscore").style.display = "block";
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != random) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > random ? "too high" : "too low";
      displayMessage(guess > random ? "too high" : "too low");

      score--;
      document.querySelector(".score").textcontent = score;
    } else {
      // document.querySelector(".message").textContent = "you lost";
      displayMessage("you lost");
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  guess = Number(document.querySelector(".guess").value);
  // document.querySelector(".message").textContent = "start guessing";
  displayMessage("start guessing");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  random = Math.trunc(Math.random() * 20) + 1;
  console.log(random);
});
