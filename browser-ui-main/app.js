async function populate () {
  const requestURL = "data.json";
  const request = new Request(requestURL);
  
  const response = await fetch(request);
  const data = await response.json();
  
  populateMainUI(data);
}

function populateMainUI(el) {
  const mainEl = document.querySelector("main")
  el.forEach(item => {
    mainEl.innerHTML += `
    <article class="extension-info">
        <section class="extension-main">
         <img src="${item.logo}" alt="${item.name}">
         <div class="extension-text">
           <h3>${item.name}</h3>
           <p>${item.description}</p>
         </div>
        </section>
        <div class="switch-wrapper">
          <button class="remove-btn">Remove</button>
          <div class="toggle-switch active">
           <div class="switch switch-active"></div>
          </div>
        </div>
    </article>
    `
    
    const toggleSwitches = document.querySelectorAll(".toggle-switch");
      const switchEls = document.querySelectorAll(".switch");
    
    toggleSwitches.forEach(el => {
      if (item.isActive) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
    });
    switchEls.forEach(el => {
      if (item.isActive) {
      el.classList.add("switch-active");
    } else {
      el.classList.remove("switch-active");
    }
    });
  });
}

populate();