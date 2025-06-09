const words = ['Grow.', 'Deliver.', 'Thrive.'];
const changingWord = document.getElementById('changing-word');
let index = 0;

setInterval(() => {
  // Start slide-up-out animation
  changingWord.classList.add('slide-up-out');

  setTimeout(() => {
    index = (index + 1) % words.length;
    changingWord.textContent = words[index];

    changingWord.classList.remove('slide-up-out');
    changingWord.classList.add('slide-up-in');

    setTimeout(() => {
      changingWord.classList.remove('slide-up-in');
    }, 500);

  }, 500);

}, 2000);
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => preloader.style.display = "none", 500);
  });
