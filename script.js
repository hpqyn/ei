document.addEventListener('DOMContentLoaded', () => {
  const startDate = new Date('2023-11-17T00:00:00');

  function updateCountdown() {
    // Đồng hồ dừng tại 24/06/2026 00:00:00
    const now = new Date('2026-06-24T00:00:00');

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }

    if (minutes < 0) {
      minutes += 60;
      hours--;
    }

    if (hours < 0) {
      hours += 24;
      days--;
    }

    if (days < 0) {
      const previousMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();

      days += previousMonth;
      months--;
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }

  updateCountdown();
});

document.addEventListener('DOMContentLoaded', () => {
  const neonChars = document.querySelectorAll('.neon-char');

  neonChars.forEach((char, index) => {
    char.style.animation = `fadeInChar 0.5s ease-in-out forwards ${index * 0.1}s`;
  });
});

const message = `Thương em khi mùa thu
Thương em sang mùa hạ
Thương em băng qua mùa đông
Gửi gió xuân ôm em vào lòng
Thương em bao mùa mưa
Thầm thương luôn bao mùa nắng.
Lời hát trên cũng là điều mà anh muốn nói.
Vậy nên em bé nhỏ của anh hãy luôn vui vẻ và hạnh phúc nhé!
Anh sẽ luôn bên em, cùng em đi hết những ngày vui, ngày buồn.
💖💖💖
Yêu Qyn nhiều🥰`;

const openBtn = document.getElementById('openBtn');
const messageCard = document.getElementById('messageCard');
const typewriterEl = document.getElementById('typewriter');

function typewriter(text, el, speed = 35) {
  el.textContent = '';
  let i = 0;
  const t = setInterval(() => {
    if (i >= text.length) {
      clearInterval(t);
      return;
    }
    el.textContent += text[i++];
  }, speed);
}

if (openBtn) {
  openBtn.addEventListener('click', () => {
    openBtn.style.display = "none";

    messageCard.style.display = "block";
    messageCard.style.opacity = 0;
    messageCard.style.transition = "opacity .25s ease";

    requestAnimationFrame(() => messageCard.style.opacity = 1);

    typewriter(message, typewriterEl, 35);
  });
}

/* ---------- 1. Floating Hearts ---------- */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 10) + "px";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 800);

/* ---------- 2. Soft Glow Sparkles ---------- */
function createSparkle() {
  const s = document.createElement("div");
  s.classList.add("sparkle");

  s.style.left = Math.random() * 100 + "vw";
  s.style.top = Math.random() * 100 + "vh";
  s.style.animationDuration = (1.8 + Math.random() * 1.5) + "s";

  document.body.appendChild(s);

  setTimeout(() => s.remove(), 3000);
}
setInterval(createSparkle, 600);

/* ---------- 3. Heartbeat text ---------- */
/* Chỉ cần thêm class "heartbeat" vào đoạn text bạn muốn */
