const images = document.querySelectorAll('img');
const leftArrow = document.querySelector('#arrow-left');
const rightArrow = document.querySelector('#arrow-right');

let currentImage = 0;

// display initial image
function initializeImage() {
  images[currentImage].style.display = "block";
  images[currentImage].classList.add('animate');
}

initializeImage();

function resetImages() {
  images.forEach(img => img.style.display = "none");
}

function moveRight() {
  resetImages();
  currentImage++;
  images[currentImage].style.display = "block";

  //
  setTimeout(() => images[currentImage].classList.add('animate'));
  if (currentImage === 0) {
    images[currentImage].classList.remove('animate');
  } else {
    images[currentImage-1].classList.remove('animate');
  }
}

function moveLeft() {
  resetImages();
  currentImage--;
  images[currentImage].style.display = "block";
  setTimeout(() => images[currentImage].classList.add('animate'));
  if (currentImage === images.length-1) {
    images[currentImage].classList.remove('animate');
  } else {
    images[currentImage+1].classList.remove('animate');
  }
}

rightArrow.addEventListener('click', function() {
  if (currentImage === images.length - 1) {
    images[currentImage].classList.remove('animate');
    currentImage = -1;
  }
  moveRight();
  
});

leftArrow.addEventListener('click', function() {
  if (currentImage === 0) {
    images[currentImage].classList.remove('animate');
    currentImage = images.length;
  }
  moveLeft();
});


let interval = setInterval(() => {
  rightArrow.click();
},5000);



