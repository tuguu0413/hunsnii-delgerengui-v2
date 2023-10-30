const dialog = document.getElementById('dialog');
const content = document.getElementById('content');
const close = document.getElementById('close');

document.getElementById('potato').addEventListener('click', () => {
    document.getElementById('1').style.display = 'block';
    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'none';
    dialog.style.display = 'block';
});

document.getElementById('carrot').addEventListener('click', () => {
    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'block';
    document.getElementById('3').style.display = 'none';
    dialog.style.display = 'block';
});

document.getElementById('cabbage').addEventListener('click', () => {
    document.getElementById('1').style.display = 'none';
    document.getElementById('2').style.display = 'none';
    document.getElementById('3').style.display = 'block';
    dialog.style.display = 'block';
});

document.addEventListener('click', (event) => {
    if (event.target === dialog) {
        document.getElementById('1').style.display = 'none';
        document.getElementById('2').style.display = 'none';
        document.getElementById('3').style.display = 'none';
        dialog.style.display = 'none';
    }
});

function toggleDarkMode() {
    window.location.href = 'darkmode/main_dm.html';
}

document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);
function createParagraph() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") {
      alert("Please enter some text.");
      return;
    }

    var newParagraph = document.createElement("p");
    newParagraph.textContent = userInput;

    document.getElementById("output").appendChild(newParagraph);
    document.getElementById("userInput").value = "";
  }
  document.getElementById("createButton").addEventListener("click", createParagraph);
  
  let currentSlide = 0;
    const slides = document.querySelectorAll(".slider-slide");

    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        slideIndex = 0;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[slideIndex].style.display = "block";
      currentSlide = slideIndex;
    }

    function changeSlide(n) {
      showSlide(currentSlide + n);
    }
    showSlide(currentSlide);
