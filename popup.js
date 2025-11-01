// Check status when popup opens
chrome.runtime.sendMessage({ command: 'getStatus' }, (response) => {
  if (response && response.sessionActive) {
    showActiveView(response.sessionEnd);
  } else {
    showStartView();
  }
});

function showStartView() {
  document.getElementById('start-view').style.display = 'flex';
  document.getElementById('active-view').style.display = 'none';
}

function showActiveView(sessionEnd) {
  document.getElementById('start-view').style.display = 'none';
  document.getElementById('active-view').style.display = 'flex';
  
  // Start countdown timer
  updateTimer(sessionEnd);
  const timerInterval = setInterval(() => {
    chrome.runtime.sendMessage({ command: 'getStatus' }, (response) => {
      if (response && response.sessionActive && response.sessionEnd) {
        updateTimer(response.sessionEnd);
      } else {
        clearInterval(timerInterval);
        showStartView();
      }
    });
  }, 1000);
}

function updateTimer(sessionEnd) {
  const now = Date.now();
  const remaining = Math.max(0, sessionEnd - now);
  
  const minutes = Math.floor(remaining / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer-display').textContent = display;
}

// Start button listener
document.getElementById('start-btn').addEventListener('click', () => {
  const duration = parseInt(document.getElementById('duration-input').value);
  if (duration && duration > 0) {
    chrome.runtime.sendMessage({ 
      command: 'start', 
      duration: duration 
    }, (response) => {
      if (response && response.success) {
        chrome.runtime.sendMessage({ command: 'getStatus' }, (statusResponse) => {
          if (statusResponse && statusResponse.sessionActive) {
            showActiveView(statusResponse.sessionEnd);
          }
        });
      }
    });
  }
});

// Stop button listener
document.getElementById('stop-btn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ command: 'stop' }, (response) => {
    if (response && response.success) {
      showStartView();
    }
  });
});

// Options button listener
document.getElementById('options-btn').addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});

