const scenes = [
  './images/lol (2).png',
  './images/lol (4).png',
  './images/lol (3).png',
  './images/lol (5).png'
];

let currentIndex = 0;

window.onload = () => {
  document.getElementById('scene-image').src = scenes[currentIndex];
};

async function changeScene(direction) {
  const img = document.getElementById('scene-image');

  img.classList.remove('fade-in', 'fade-out');
  img.classList.add('fade-out');

  // Esperar la salida
  await new Promise(resolve => setTimeout(resolve, 400));

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = scenes.length - 1;
  }

  if (currentIndex >= scenes.length) {
    currentIndex = 0;
  }


  img.src = scenes[currentIndex];


  img.classList.remove('fade-out');
  img.classList.add('fade-in');
}




const stack = document.getElementById('photoStack');

stack.addEventListener('click', () => {
  const photos = stack.querySelectorAll('.photo');
  const top = photos[photos.length - 1];

  top.classList.add('bounce');

  setTimeout(() => {
    top.classList.remove('bounce');
    stack.prepend(top);
    stack.querySelectorAll('.photo').forEach((photo, index) => {
      photo.style.zIndex = index + 1;
    });
  }, 10);
});


document.querySelector(".letter-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const msg = document.querySelector(".letter-sent-msg");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
    this.reset();
  }, 3000);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".fade-in-scroll").forEach((el) => {
    observer.observe(el);
  });
