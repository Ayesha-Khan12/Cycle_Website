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


let disTab = document.getElementById("discription-anchor");
let specsTab = document.getElementById("specs-anchor");
let disCon = document.getElementById("discription");
let specsCon = document.getElementById("specs");

disTab.onclick = function(){
    specsCon.style.display = 'none';
    disCon.style.display = 'block';
}
specsTab.onclick = function(){
    disCon.style.display = 'none';
    specsCon.style.display = 'block';
}




function updateHeaderImage(image) {
    // Get the src of the clicked image
    const imageSrc = image.src;

    // Set the src of the image in #image-container in the header
    document.getElementById("image-container").src = imageSrc;
}

function changeHeaderColor(color) {
    document.getElementById("header").style.backgroundColor = color;
}

