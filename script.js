const text = "Happy Birthday, [Anikt Mahaske!!!]! 🎉"; // Change name here
let index = 0;
const typingText = document.getElementById("typing-text");

function typeLetter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeLetter, 100);
  }
}
typeLetter();

document.getElementById("reveal-btn").addEventListener("click", () => {
  document.getElementById("surprise").classList.remove("hidden");
  document.getElementById("birthday-music").play();
});
