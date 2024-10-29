let track = document.querySelector('.track-carousal');
let rightButton = document.querySelector('.right-button');
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

