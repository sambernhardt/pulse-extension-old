const style = `
  :root {
    --pulseLightBlue: #bfdfe7; 
    --grayLight: #f0f3f5; 
    --graySuperLight: #f7f9fa; 
    --grayMediumLight: #d9e0e3; 
    --grayMedium: #87949b; 
    --grayMediumDark: #55666f; 
    --grayDark: #29363d; 
    --background: var(--grayDark);
    --accent: var(--grayMediumDark);
    --body: white;
    --body2: rgba(255,255,255,.4);
    --highlight: rgba(255,255,255,.1);
  }

  .sl-container {
    z-index: 999;
    position: fixed;
    width: 100vw;
    height: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    perspective: 1000px;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  .sl-container.active {
    height: 100vh;
  }
  .sl-card {
    margin-top: 64px;
    background: var(--background);
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    border-radius: 8px;
    width: 400px;
    max-width: 100%;
    overflow: hidden;
    opacity: 0;
  }
  .sl-card .spotlightInput {
    border: none;
    padding: 24px;
    font-size: 20px;
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    color: var(--body);
  }
  .sl-card .spotlightInput:focus {
    outline: none;
  }
  .sl-container.active .sl-card {
    opacity: 1;
  }
  .results.hasResults {
    padding: 4px;
    border-top: 1px solid var(--accent);
    max-height: 200px;
    overflow: scroll
  }
  .result {
    padding: 8px 16px 8px 12px;
    border-radius: 8px;
    color: var(--body);
    display: flex;
    align-items: center;

  }
  .result:hover, .result:focus {
    background: var(--accent);
    cursor: pointer;
  }
  .result .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .result .sl-label {
    font-size: 16px;
    font-weight: 600;
  }
  .result .spotlight-icon {
    margin-right: 12px;
    font-size: 12px;
  }
  .result .sl-sublabel {
    font-size: 14px;
    color: var(--body2);
    font-weight: 500;
  }
  .result:focus {
    background: var(--highlight);
    outline: none;
  }
  .empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }
  .empty-state .message {
    border-radius: 12px;
    color: var(--body2);
  }
`;

const spotlightContainer = document.createElement('div');
spotlightContainer.classList.add('sl-container');
spotlightContainer.innerHTML = `
  <style>${style}</style>
  <div class="sl-card">
    <input type="text" placeholder="Search" class="spotlightInput keyboard-navigable">
    <div class="results">
    </div>
  </div>
`;
document.body.appendChild(spotlightContainer);

const initialize = () => {
  let navigableElements = Array.from(document.querySelectorAll('.keyboard-navigable'));

  const wrapper = document.querySelector('.sl-container');
  const container = document.querySelector('.sl-card');
  const resultsContainer = document.querySelector('.results');
  const spotlightInput = document.querySelector('.spotlightInput');
  window.addEventListener('keydown', e => {
    if (e.key === '/') {
      if (wrapper.classList.contains('active')) {
        spotlightInput.focus();
      } else {
        wrapper.classList.add('active');
      }
      spotlightInput.focus();
      setTimeout(() => {
        spotlightInput.value = '';
      }, 1);
    } else if (e.key === 'Backspace' && wrapper.classList.contains('active') && !spotlightInput.value.length) {
      spotlightInput.value = '';
      wrapper.classList.remove('active');
    } else if (e.key === 'Escape' && wrapper.classList.contains('active')) {
      spotlightInput.value = '';
      wrapper.classList.remove('active');
    } else {
      const index = navigableElements.indexOf(e.target);
      switch(e.key) {
        case 'ArrowDown': 
          if (wrapper.classList.contains('active')) {
            e.preventDefault();
          }
          const nextElement = navigableElements[index + 1];
          if (nextElement) {
            nextElement.focus();
          }
          break;
        case 'ArrowUp': 
          const prevElement = navigableElements[index - 1];
          if (prevElement) prevElement.focus();
          break;
        default:
          break;
      }
    }
  });
  wrapper.addEventListener('click', () => {
    if (wrapper.classList.contains('active')) {
      wrapper.classList.remove('active');
      resultsContainer.innerHTML = '';
    }
  })

  function navigate(link) {
    resultsContainer.innerHTML = '';
    resultsContainer.classList.remove('hasResults');
    wrapper.classList.remove('active');
    spotlightInput.value = '';
    window.location.href = origin + link;
  }

  const createResult = (r) => {
    const result = document.createElement('div');
    result.classList.add('result', 'keyboard-navigable');
    result.tabIndex = '0';
    result.innerHTML = `
      <i class="fa fa-${r.icon} spotlight-icon"></i>
      <div class="text-container">
        <div class="sl-label">
          ${r.label}
        </div>
        ${r.sublabel ? `<div class="sl-sublabel">${r.sublabel}</div>` : ''}
      </div>
    `;
    result.addEventListener('keyup', e => {
      if (e.key == 'Enter') {
        navigate(r.url);
      }
    });
    result.addEventListener('click', () => navigate(r.url));
    JSON.stringify();
    return result;
  };

  const createEmptyState = () => {
    const container = document.createElement('div');
    container.classList.add('empty-state');
    container.innerHTML = '<div class="message">No results found</div>';
    return container;
  };

  spotlightInput.addEventListener('keyup', e => {
    if (e.key === 'Shift' || e.key === "Meta" || e.key === 'Alt' || e.key === 'Tab') return;

    const search = e.target.value.toLowerCase();
    resultsContainer.innerHTML = '';
    resultsContainer.classList.remove('hasResults');

    if (!search) {
      return;
    } else {
      resultsContainer.classList.add('hasResults');
      let results = shortcuts.filter(i => i.label.toLowerCase().includes(search));
      results = results.sort((a, b) => (a.label < b.label) ? -1 : (a.label > b.label) ? 1 : 0);
      if (!results.length) {
        resultsContainer.appendChild(createEmptyState());
      }
      results.forEach(r => {
        const result = createResult(r);
        resultsContainer.appendChild(result);
        navigableElements = Array.from(document.querySelectorAll('.keyboard-navigable'));
      })
      // fetch(origin + `/impersonate/search/?q=${search.replace(' ', '+')}`).then(res => res.text()).then(html => {
      //   var parser = new DOMParser();
      //   var doc = parser.parseFromString(html, 'text/html');
      //   var results = Array.from(doc.querySelectorAll('li a')).filter(el => el.href.includes('impersonate')).map(el => {
      //     return {
      //       label: el.innerText,
      //       sublabel: 'Impersonate',
      //       url: '/' + el.href.replace(el.baseURI, ''),
      //       icon: 'user-secret'
      //     }
      //   });
      //   results.forEach(r => {
      //     const result = createResult(r);
      //     resultsContainer.appendChild(result);
      //     navigableElements = Array.from(document.querySelectorAll('.keyboard-navigable'));
      //   })
      // });
    }
  });
};

setTimeout(initialize);
