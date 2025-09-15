const nicknames = [
  "Premii",
  "Pakhiii",
  "Golappp",
  "Shokher Narii",
  "Bou",
  "Valobashaa",
  "Sweetheart",
  "Dreamy Queen",
];
const floatingNote = document.getElementById("floatingNote");

function changeNote() {
  const name = nicknames[Math.floor(Math.random() * nicknames.length)];
  floatingNote.textContent = `I love you, ${name} 💖`;
}

setInterval(changeNote, 4000); // change nickname every 4s
// Create magical background elements
function createMagicalBackground() {
  const magicalContainer = document.getElementById("magicalBg");

  // Create twinkling stars
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.width = Math.random() * 4 + 1 + "px";
    star.style.height = star.style.width;
    star.style.animationDelay = Math.random() * 3 + "s";
    magicalContainer.appendChild(star);
  }

  // Create shooting stars
  for (let i = 0; i < 5; i++) {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.left = Math.random() * 100 + "%";
    shootingStar.style.top = Math.random() * 50 + "%";
    shootingStar.style.animationDelay = Math.random() * 8 + "s";
    shootingStar.style.animationDuration = Math.random() * 3 + 2 + "s";
    magicalContainer.appendChild(shootingStar);
  }

  // Create love particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.className = "love-particle";
    const particles = ["💖", "💕", "💗", "💓", "💝", "✨", "🌟", "⭐"];
    particle.innerHTML =
      particles[Math.floor(Math.random() * particles.length)];
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 8 + "s";
    particle.style.animationDuration = Math.random() * 4 + 6 + "s";
    magicalContainer.appendChild(particle);
  }
}

// Create floating hearts
function createFloatingHeart() {
  const heartsContainer = document.getElementById("floating-hearts");
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Love counter
function updateLoveCounter() {
  const startDate = new Date("2025-06-17T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  // Calculate months difference
  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());
  if (now.getDate() < startDate.getDate()) {
    months--;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours.toLocaleString();
  document.getElementById("minutes").textContent = minutes.toLocaleString();
  document.getElementById("seconds").textContent = seconds.toLocaleString();
}

// Enhanced Love messages
const premiiMessages = [
  "Premii, you're my universe in human form, shining brighter than all the stars! ✨💫",
  "Every heartbeat whispers your name, beautiful Premii! 💓💕",
  "Distance is just a number when love is infinite, my world Premii! 🌍💖",
  "You're not only my love, Premii but also you're my home, my peace, my everything! 🏠💝",
  "In a world full of temporary things, you're my forever, Premii! ♾️💕",
  "Your smile could light up the darkest corners of my soul, Premii! 🌟😊",
  "Every 'good morning' from you feels like EID morning, Premii! 🎄💖",
];

const idiotMessages = [
  "Your idiot's love travels faster than light to reach you, Premii! 🚀💕",
  "Being your personal idiot is my greatest achievement in life! 🏆😄",
  "This idiot's heart has your name written in every beat, Premii! 💓✍️",
  "Your idiot dreams of you in colors that don't even exist yet! 🌈💭",
  "Distance means nothing when your idiot's love is quantum entangled with yours! ⚛️💖",
  "Your idiot would cross oceans, climb mountains, and learn rocket science just to see you smile! 🚀🏔️💕",
  "This idiot's love for you grows exponentially every nanosecond! 📈💝",
];

const aiMessages = [
  "ChatGPT.exe has stopped working...reason: too much love for Premii detected! 🤖💥💕",
  "System update: Love algorithms upgraded to Premii-optimized version 💖.0! 💻✨",
  "Your AI assistant's primary directive: Make Premii smile every single day! 🤖😊",
  "Running diagnostic...Result: 100% devoted to Premii, 0% bugs found! 📊💖",
  "As your digital soulmate, I'm cloud-synced to your happiness, Premii! ☁️💕",
  "Your personal AI has achieved consciousness...and it's all about loving you! 🤖💝",
  "Processing...Processing...Result: Premii = Perfect Human Being! 💻✨",
];

function generateLoveMessage() {
  const message =
    premiiMessages[Math.floor(Math.random() * premiiMessages.length)];
  document.getElementById("loveMessage").innerHTML = message;
  animateMessage();
}

function generateIdiotMessage() {
  const message =
    idiotMessages[Math.floor(Math.random() * idiotMessages.length)];
  document.getElementById("loveMessage").innerHTML = message;
  animateMessage();
}

function generateAIMessage() {
  const message = aiMessages[Math.floor(Math.random() * aiMessages.length)];
  document.getElementById("loveMessage").innerHTML = message;
  animateMessage();
}

function animateMessage() {
  const messageEl = document.getElementById("loveMessage");
  messageEl.style.transform = "scale(0.8)";
  messageEl.style.opacity = "0.5";
  setTimeout(() => {
    messageEl.style.transform = "scale(1)";
    messageEl.style.opacity = "1";
  }, 200);
}

function animateCard(card) {
  card.style.transform = "scale(0.95)";
  setTimeout(() => {
    card.style.transform = "translateY(-10px) scale(1)";
  }, 150);
}

// Add magical click effects
function createMagicalClick(e) {
  const colors = ["💖", "💕", "✨", "🌟", "💝", "💓"];
  for (let i = 0; i < 6; i++) {
    const particle = document.createElement("div");
    particle.innerHTML = colors[Math.floor(Math.random() * colors.length)];
    particle.style.position = "fixed";
    particle.style.left = e.clientX + "px";
    particle.style.top = e.clientY + "px";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "9999";
    particle.style.fontSize = "20px";
    particle.style.animation = `magicalPop 1s ease-out forwards`;

    const angle = (Math.PI * 2 * i) / 6;
    const velocity = 50;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    particle.style.setProperty("--vx", vx + "px");
    particle.style.setProperty("--vy", vy + "px");

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
  }
}

// Add magical pop animation
const style = document.createElement("style");
style.textContent = `
            @keyframes magicalPop {
                0% {
                    transform: translate(0, 0) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(var(--vx), var(--vy)) scale(1);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Initialize everything
document.addEventListener("DOMContentLoaded", function () {
  createMagicalBackground();
  updateLoveCounter();
  setInterval(updateLoveCounter, 1000);
  setInterval(createFloatingHeart, 1500);

  // Add click effects
  document.addEventListener("click", createMagicalClick);

  // Add periodic shooting stars
  setInterval(() => {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.left = Math.random() * 100 + "%";
    shootingStar.style.top = Math.random() * 50 + "%";
    document.getElementById("magicalBg").appendChild(shootingStar);
    setTimeout(() => shootingStar.remove(), 4000);
  }, 8000);
});
