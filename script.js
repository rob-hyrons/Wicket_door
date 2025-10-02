const modelViewer = document.querySelector('#viewer');

// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
modelViewer.addEventListener('progress', onProgress);

// --- New code for play and stop buttons ---

// Get the buttons
const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');

// Add a click event listener to the play button
playButton.addEventListener('click', () => {
  modelViewer.play();
});

// Add a click event listener to the pause button
pauseButton.addEventListener('click', () => {
  modelViewer.pause();
});