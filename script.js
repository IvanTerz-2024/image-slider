const images = [
  { src: "image1.jpg", alt: "Горный пейзаж" },
  { src: "image2.jpg", alt: "Морской пейзаж" },
  { src: "image3.jpg", alt: "Городской пейзаж" },
  { src: "image4.jpg", alt: "Лесной пейзаж" },
  { src: "image5.jpg", alt: "Пустынный пейзаж" }
];

let currentIndex = 0;

const imageElement = document.querySelector("#slider-image");
const counterElement = document.querySelector("#counter");
const previousButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

function showImage() {
  const currentImage = images[currentIndex];

  imageElement.src = currentImage.src;
  imageElement.alt = currentImage.alt;
  counterElement.textContent =
    `Изображение ${currentIndex + 1} из ${images.length}`;
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

previousButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    showPreviousImage();
  } else if (event.key === "ArrowRight") {
    showNextImage();
  }
});

showImage();
