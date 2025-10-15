const image = document.querySelector("#myimage");
const content = document.querySelector("#content");
const btnNext = document.querySelector("#next");
const btnPrevious = document.querySelector("#previous");
let count = 0;

const slides = [
  "./slides/image0.jpg",
  "./slides/image1.jpg",
  "./slides/image2.jpg",
  "./slides/image3.jpg",
  "./slides/image4.jpg",
];

btnPrevious.disabled = true;
btnPrevious.style.backgroundColor = 'grey';

function setButtonStates(count) {
  if (count == slides.length - 1) {
    btnNext.disabled = true;
    btnNext.style.backgroundColor = 'grey';
  }
  else if (count == 0) {
    btnPrevious.disabled = true;
    btnPrevious.style.backgroundColor = 'grey';
  }

  else if (count > 0 && count < slides.length - 1) {
    btnNext.disabled = false;
    btnNext.style.backgroundColor = 'green';
    btnPrevious.disabled = false;
    btnPrevious.style.backgroundColor = 'green';
  }
}

btnNext.addEventListener("click", function (e) {
  ++count;
  setButtonStates(count);
  console.log(count);

  const newimg = document.createElement("img");
  newimg.src = slides[count];

  if (count <= slides.length - 1) {
    newimg.classList.add("fadeinimg");
    content.appendChild(newimg);
  } else {
    btnNext.disabled = true;
    btnNext.style.backgroundColor = 'grey';
  }

  if (content.children.length == 2) {
    content.removeChild(content.children[0]);
  }


});

btnPrevious.addEventListener("click", function (e) {
  --count;

  setButtonStates(count);
  const newimg = document.createElement("img");
  newimg.src = `./slides/image${count}.jpg`;
  newimg.classList.add("fadeinimg");
  content.appendChild(newimg);

  if (content.children.length == 2) {
    content.removeChild(content.children[0]);
  }

  console.log(count);
});
