const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const tapNote = document.getElementById("tapNote");
const foldButton = document.getElementById("foldButton");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");
const musicSymbol = document.getElementById("musicSymbol");

let letterOpened = false;

envelope.addEventListener("click", () => {
  if (letterOpened) return;
  letterOpened = true;

  envelope.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");
  tapNote.textContent = "a little love, just for you ♡";

  // Give the envelope flap time to open before showing the paper.
  window.setTimeout(() => {
    letter.classList.add("show");
    letter.setAttribute("aria-hidden", "false");
    foldButton.hidden = false;

    window.setTimeout(() => {
      letter.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }, 620);
});

foldButton.addEventListener("click", () => {
  letter.classList.remove("show");
  letter.setAttribute("aria-hidden", "true");
  envelope.classList.remove("is-open");
  envelope.setAttribute("aria-expanded", "false");
  foldButton.hidden = true;
  letterOpened = false;
  tapNote.textContent = "tap the little envelope to open";

  envelope.scrollIntoView({ behavior: "smooth", block: "center" });
});

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.classList.add("playing");
      musicText.textContent = "tap this to pause, baby";
      musicSymbol.textContent = "♫";
      musicButton.setAttribute("aria-pressed", "true");
    } catch (error) {
      musicText.textContent = "add your-song.mp3 first";
    }
  } else {
    music.pause();
    musicButton.classList.remove("playing");
    musicText.textContent = "tap this to play the song, baby";
    musicButton.setAttribute("aria-pressed", "false");
  }
});

music.addEventListener("error", () => {
  // The site still works without a song; add your own file to enable music.
});
