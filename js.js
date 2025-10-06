const messageText = `Setiap tahun kamu selalu diberkati, dan selamat ulang tahun untuk orang paling istimewa! 🎉

Semoga tahun barumu menjadi awal dari segala hal indah dalam hidupmu, dipenuhi dengan kebahagiaan dan ketenangan, serta tercapai semua yang kamu impikan dan lebih lagi 🌸

Kamu adalah orang yang istimewa, kehadiranmu memberi banyak arti bagi orang di sekitarmu. Karena itu, hari ulang tahunmu harus istimewa seperti dirimu ❤️

Selamat ulang tahun, semoga kamu selalu diberkati dengan kebahagiaan dan kesuksesan 🌟


BY: YOUSSIF ALKADY
`;

const timer = document.getElementById('timer');
const message = document.getElementById('message');
const main = document.querySelector('main');
let count = 5;

function countdown() {
  if (count > 0) {
    timer.textContent = count;
    count--;
    setTimeout(countdown, 1000);
  } else {
    timer.style.display = 'none';
    main.style.display = 'block';
    typeWriterEffect();
  }
}

let index = 5;
function typeWriterEffect() {
  if (index < messageText.length) {
    message.textContent += messageText.charAt(index);
    index++;
    main.scrollTop = main.scrollHeight;
    setTimeout(typeWriterEffect, 2); // ✅ تم تسريع الكتابة (بدلاً من 1000)
  }
}

countdown();

/* Particles */
const particlesContainer = document.querySelector('.particles');
const numParticles = 30;

for (let i = 0; i < numParticles; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 10 + 5;
  p.style.width = size + 'px';
  p.style.height = size + 'px';
  p.style.top = Math.random() * 100 + '%';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = (Math.random() * 6 + 4) + 's';
  const anims = ['particleMove1', 'particleMove2', 'particleMove3'];
  p.style.animationName = anims[Math.floor(Math.random() * anims.length)];
  particlesContainer.appendChild(p);
}
