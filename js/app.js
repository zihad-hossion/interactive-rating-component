const reviewShow = document.querySelector(".review");
const greetShow = document.querySelector(".greet");
const actualReview = document.getElementById("rating");
const ratings = document.querySelectorAll("li");
const submitBtn = document.getElementById("submit-btn");
const notValid = document.getElementById("error");
let value = 0;

ratings.forEach((rating) => {
  rating.addEventListener("click", selecTed);
});

submitBtn.addEventListener("click", () => {
  if (value !== 0) {
    greetShow.classList.remove("hidden");
    reviewShow.classList.add("hidden");
  } else {
    notValid.innerHTML = `Please, Select option.`;
  }
});

function selecTed(e) {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
    e.target.classList.add("active");
    value = e.target.innerHTML;
    actualReview.innerHTML = value;
  });
}
