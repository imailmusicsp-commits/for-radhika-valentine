
const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");

function playClick() {
  clickSound.play();
  bgMusic.volume = 0.4;
  bgMusic.play();
}

function unlock() {
  playClick();
  const pass = document.getElementById("password").value;
  if (pass === "3101") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  } else {
    alert("Not quite ❤️");
  }
}

const today = new Date();
if (!(today.getDate() === 14 && today.getMonth() === 1)) {
  document.getElementById("final").classList.add("hidden");
}
