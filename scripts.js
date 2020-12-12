let time = 2000, // tempo que vai rodar
  currentImageIndex = 0,
  images = document
  .querySelectorAll("#slider img"); // pega do html o id = slider e o filho img
max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++
    if(currentImageIndex >= max)
    currentImageIndex = 0


  images[currentImageIndex].classList.add("selected");

}

function start() {    //Troca de imagem
  setInterval(() => {
     
     nextImage()

  }, time);
}
window.addEventListener("load",start);
