function showPopup() {
  if (document.getElementById("customPopup")) return;
  const popup = document.createElement("div");
  popup.className = "custom-popup";
  popup.id = "customPopup";
  popup.innerHTML = `
        <div class="popup-content">
          <h3>Oops! 💔</h3>
          <p>That password isn't correct.<br>Try again, my love!<br><span style="font-size:1.5rem;">😭</span></p>
          <button class="close-btn" onclick="closePopup()">Try Again</button>
        </div>
      `;
  document.body.appendChild(popup);
  setTimeout(() => {
    document.querySelector(".close-btn").focus();
  }, 200);
}
function closePopup() {
  const popup = document.getElementById("customPopup");
  if (popup) popup.remove();
  document.getElementById("password").focus();
}
function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === "17-06-2025") {
    window.location.href = "3months.html";
  } else {
    showPopup();
  }
}
function togglePassword() {
  const pwd = document.getElementById("password");
  const eye = document.getElementById("toggleEye");
  if (pwd.type === "password") {
    pwd.type = "text";
    eye.textContent = "🙈";
  } else {
    pwd.type = "password";
    eye.textContent = "👁️";
  }
}
document.getElementById("password").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    checkPassword();
  }
});
// Close popup on Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closePopup();
});
