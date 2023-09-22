const stars = document.querySelectorAll(".star");
const submitbtn = document.querySelector("#btn");
const frontCard = document.querySelector(".front");
const backCard = document.querySelector(".back");
let score = document.querySelector(".score");

let selected = false;
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    if (!selected) {
      for (let i = 0; i <= index; i++) {
        stars[i].style.opacity = 1;
        stars[i].style.backgroundColor = "rgb(122 136 153)";
        stars[i].style.cursor = "pointer";
      }
    }
  });

  star.addEventListener("mouseout", () => {
    if (!selected) {
      stars.forEach((star, i) => {
        star.style.opacity = 0.5;
        star.style.backgroundColor = "rgb(48, 62, 75)";
      });
    }
  });

  star.addEventListener("click", () => {
    if (!selected) {
      for (let i = 0; i <= index; i++) {
        stars[i].style.backgroundColor = "rgb(255 106 0)";
        submitbtn.style.backgroundColor = "white";
        submitbtn.style.color = "var(--pirmery-color)";
        submitbtn.style.letterSpacing = "5px";
        submitbtn.style.border = "1px solid var(--pirmery-color)";
        score.textContent = `You selected  ${index + 1} out of 5`;
      }
      for (let i = 0; i < stars.length; i++) {
        stars[i].style.cursor = "default";
      }
    }
    selected = true;
  });
});
submitbtn.addEventListener("click", () => {
  frontCard.style.display="none"
  backCard.style.display = "flex";
});
