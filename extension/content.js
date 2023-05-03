// Create chordify button element
function createChordifyButton() {
  // Create button element
  const chordifyButton = document.createElement("button");
  chordifyButton.id = "chordify-button";
  chordifyButton.style.borderRadius = "20px";
  chordifyButton.style.backgroundColor = "#fff";
  chordifyButton.style.color = "#030303";
  chordifyButton.style.padding = "10px 20px";
  chordifyButton.style.borderWidth = "1px";
  chordifyButton.style.borderColor = "#000";
  chordifyButton.style.borderStyle = "solid";
  chordifyButton.style.cursor = "pointer";
  chordifyButton.style.fontFamily = "Roboto";
  chordifyButton.style.fontWeight = "500";
  chordifyButton.textContent = "Open in Chordify";

  // Add margin to chordify button
  chordifyButton.style.marginTop = "15px";

  // Insert chordify button into DOM
  const copyLink = document.getElementById("copy-link");
  copyLink.appendChild(chordifyButton);

  // Add hover and click event listeners to change button color
  chordifyButton.addEventListener("mouseenter", () => {
    chordifyButton.style.backgroundColor = "#65b8ff";
    chordifyButton.style.borderColor = "#3ea6ff";
    chordifyButton.style.opacity = "1";
  });

  chordifyButton.addEventListener("mouseleave", () => {
    chordifyButton.style.backgroundColor = "#fff";
    chordifyButton.style.borderColor = "#000";
    chordifyButton.style.opacity = "1";
  });

  chordifyButton.addEventListener("mousedown", () => {
    chordifyButton.style.backgroundColor = "#3ea6ff";
    chordifyButton.style.borderColor = "#65b8ff";
    chordifyButton.style.opacity = "0.8";
  });

  chordifyButton.addEventListener("touchstart", () => {
    chordifyButton.style.backgroundColor = "#3ea6ff";
    chordifyButton.style.borderColor = "#65b8ff";
    chordifyButton.style.opacity = "0.8";
  });

  chordifyButton.addEventListener("touchend", () => {
    chordifyButton.style.backgroundColor = "#fff";
    chordifyButton.style.borderColor = "#000";
    chordifyButton.style.opacity = "1";
  });

  chordifyButton.addEventListener("touchcancel", () => {
    chordifyButton.style.backgroundColor = "#fff";
    chordifyButton.style.borderColor = "#000";
    chordifyButton.style.opacity = "1";
  });

  // Add click event listener to open Chordify search in new tab
  chordifyButton.addEventListener("click", () => {
    const shareUrl = document.getElementById("share-url");
    const url =
      "https://chordify.net/search/" + encodeURIComponent(shareUrl.value);
    window.open(url, "_blank");
  });

  return chordifyButton;
}

const observer = new MutationObserver(() => {
  const shareUrl = document.getElementById("share-url");
  const url = shareUrl ? shareUrl.value : "";

  const chordifyButton = document.getElementById("chordify-button");
  if (url.includes("watch")) {
    if (!chordifyButton) {
      createChordifyButton();
    }
  } else {
    if (chordifyButton) {
      chordifyButton.parentNode.removeChild(chordifyButton);
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
