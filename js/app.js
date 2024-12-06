const slides = document.querySelectorAll("#slider ul li");
const nextButton = document.querySelector(".control_next");
const prevButton = document.querySelector(".control_prev");
let currentSlide = 0;
let points;

function showSlide(index) {

    slides.forEach(slide => slide.classList.remove("active"));

    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add("active");
}

nextButton.addEventListener("click", function(event) {
    event.preventDefault();
    showSlide(currentSlide + 1);
});

prevButton.addEventListener("click", function(event) {
    event.preventDefault();
    showSlide(currentSlide - 1);
});





function checkResult(){
    let brand = parseInt(document.getElementById("brandSelect").value)
console.log(brand, currentSlide)
    if(brand === 0 ){
        // let points =+ 10
        console.log("Entra aqui")
    }
     console.log("nada")
}