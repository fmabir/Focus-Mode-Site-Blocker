// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading') {
    // Check if session is active
    chrome.storage.sync.get(['sessionActive', 'blockedSites'], (result) => {
      if (result.sessionActive === true && result.blockedSites) {
        const url = tab.url || '';
        const blockedSites = result.blockedSites;
        
        // Check if the URL includes any blocked site
        const isBlocked = blockedSites.some(site => url.includes(site));
        
        if (isBlocked) {
          // Redirect to blocked.html
          chrome.tabs.update(tabId, {
            url: chrome.runtime.getURL('blocked.html')
          });
        }
      }
    });
  }
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'start') {
    const duration = request.duration; // in minutes
    const sessionEnd = Date.now() + (duration * 60 * 1000);
    
    // Set session active and session end time
    chrome.storage.sync.set({
      sessionActive: true,
      sessionEnd: sessionEnd
    }, () => {
      // Create alarm for session end
      chrome.alarms.create('focusSessionEnd', {
        delayInMinutes: duration
      });
      sendResponse({ success: true });
    });
    return true; // Keep the message channel open for async response
  }
  
  if (request.command === 'stop') {
    chrome.storage.sync.set({
      sessionActive: false,
      sessionEnd: null
    }, () => {
      chrome.alarms.clear('focusSessionEnd', () => {
        sendResponse({ success: true });
      });
    });
    return true; // Keep the message channel open for async response
  }
  
  if (request.command === 'getStatus') {
    chrome.storage.sync.get(['sessionActive', 'sessionEnd'], (result) => {
      sendResponse({
        sessionActive: result.sessionActive || false,
        sessionEnd: result.sessionEnd || null
      });
    });
    return true; // Keep the message channel open for async response
  }
});

// Listen for alarm
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'focusSessionEnd') {
    chrome.storage.sync.set({
      sessionActive: false
    });
  }
});

