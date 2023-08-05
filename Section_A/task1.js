const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");

form.addEventListener('submit' , ()=>{
    closeForm();
})

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        openForm();
    })
});

function closeForm(){
    overlay.classList.remove("overlay-mask");
    form.style.display = "none";
}
function openForm(){
    form.style.display = 'block';
    overlay.classList.add("overlay-mask");
}

// slider 

const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
sliderValue.innerHTML = slider.value;

const container = document.querySelector('.container');
const [firstCard, secondCard, thirdCard] = container.querySelectorAll('.card');
  
slider.oninput = function() {
  sliderValue.innerHTML = this.value;
  if(this.value <= 10) {
    firstCard.style.background = "red";
    secondCard.style.background = "white";
    thirdCard.style.background = "white";
  }
  else if (this.value > 10 && this.value <= 20) {
    firstCard.style.background = "white";
    secondCard.style.background = "red";
    thirdCard.style.background = "white";
  }
  else {
    firstCard.style.background = "white";
    secondCard.style.background = "white";
    thirdCard.style.background = "red";
  }
}

