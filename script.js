let track = document.querySelector('.track-carousal');
let rightButton = document.querySelector('.right-button');
const imageContainer = document.getElementById('image-container');
const radioButtons = document.querySelectorAll('.color .radios .active');
const images = document.querySelectorAll('#img img');
let totalImage = track.children.length;
let imageSlide = 3;
let currentIndex = 0;

function updateCarousal(){
    let translateX = -(currentIndex * 300);
    track.style.transform = `translateX(${translateX}px)`
}


rightButton.addEventListener('click',() =>
{
    if(currentIndex < totalImage - imageSlide){
        currentIndex++;
    }
    else{
        currentIndex = 0;
    }
    updateCarousal();
});


let disTab = document.getElementById("description-anchor");
let specsTab = document.getElementById("specs-anchor");


function showProductByColor(img, currentIndex) {
    radioButtons.forEach(el => el.classList.remove("active"))
    imageContainer.src = img
}