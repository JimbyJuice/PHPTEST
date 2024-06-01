const totalPagesInput = document.getElementById("total-pages");
const currentPageInput = document.getElementById("current-page");
const incrementBtn = document.getElementById("increment-btn");
const progressBar = document.getElementById("progress");
const progressText = document.getElementById("progress-text");
const backgroundAnimation = document.getElementById("background-animation");

let totalPages = parseInt(totalPagesInput.value);
let currentPage = parseInt(currentPageInput.value);

function updateProgress() {
  const percentage = (currentPage / totalPages) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${currentPage} / ${totalPages} pages completed`;
}

totalPagesInput.addEventListener("input", () => {
  totalPages = parseInt(totalPagesInput.value);
  updateProgress();
});

currentPageInput.addEventListener("input", () => {
  currentPage = parseInt(currentPageInput.value);
  updateProgress();
});

incrementBtn.addEventListener("click", () => {
  currentPage++;
  currentPageInput.value = currentPage;
  updateProgress();
  triggerBackgroundAnimation();
});

function triggerBackgroundAnimation() {
  backgroundAnimation.style.animation = "none";
  void backgroundAnimation.offsetWidth; // Trigger reflow
  backgroundAnimation.style.animation = null;
}

updateProgress();
