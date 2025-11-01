// Load and display sites on page load
chrome.storage.sync.get(['blockedSites'], (result) => {
  const sites = result.blockedSites || [];
  displaySites(sites);
});

function displaySites(sites) {
  const list = document.getElementById('blockedSitesList');
  const emptyState = document.getElementById('emptyState');
  const sitesCount = document.getElementById('sitesCount');
  
  list.innerHTML = '';
  
  // Update count
  sitesCount.textContent = `${sites.length} ${sites.length === 1 ? 'site' : 'sites'}`;
  
  // Show/hide empty state
  if (sites.length === 0) {
    emptyState.style.display = 'flex';
    list.style.display = 'none';
  } else {
    emptyState.style.display = 'none';
    list.style.display = 'grid';
  }
  
  sites.forEach((site, index) => {
    const li = document.createElement('li');
    li.className = 'site-item-card';
    
    const siteInfo = document.createElement('div');
    siteInfo.className = 'site-info';
    
    const siteIcon = document.createElement('div');
    siteIcon.className = 'site-icon';
    siteIcon.textContent = '🌐';
    
    const siteDetails = document.createElement('div');
    siteDetails.className = 'site-details';
    
    const siteName = document.createElement('span');
    siteName.className = 'site-name';
    siteName.textContent = site;
    
    const siteUrl = document.createElement('span');
    siteUrl.className = 'site-url';
    siteUrl.textContent = site;
    
    siteDetails.appendChild(siteName);
    siteDetails.appendChild(siteUrl);
    siteInfo.appendChild(siteIcon);
    siteInfo.appendChild(siteDetails);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('aria-label', `Remove ${site}`);
    deleteBtn.innerHTML = '×';
    deleteBtn.addEventListener('click', () => {
      deleteSite(site);
    });
    
    li.appendChild(siteInfo);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function deleteSite(siteToDelete) {
  chrome.storage.sync.get(['blockedSites'], (result) => {
    const sites = result.blockedSites || [];
    const updatedSites = sites.filter(site => site !== siteToDelete);
    
    chrome.storage.sync.set({ blockedSites: updatedSites }, () => {
      displaySites(updatedSites);
    });
  });
}

// Form submit listener
document.getElementById('siteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const input = document.getElementById('siteInput');
  const newSite = input.value.trim();
  
  if (newSite) {
    chrome.storage.sync.get(['blockedSites'], (result) => {
      const sites = result.blockedSites || [];
      
      // Check if site already exists
      if (!sites.includes(newSite)) {
        sites.push(newSite);
        chrome.storage.sync.set({ blockedSites: sites }, () => {
          displaySites(sites);
          input.value = '';
        });
      } else {
        // Show visual feedback for duplicate
        const input = document.getElementById('siteInput');
        input.classList.add('error-shake');
        setTimeout(() => {
          input.classList.remove('error-shake');
        }, 500);
      }
    });
  }
});

