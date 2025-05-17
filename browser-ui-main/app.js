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
    const myArticle = document.createElement("article");
    myArticle.className = "extension-info";
    
    myArticle.innerHTML = `
    <section class="extension-main">
        <img src="${item.logo}" alt="${item.name}">
        <div class="extension-text">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      </section>
      <div class="switch-wrapper">
        <button class="remove-btn">Remove</button>
        <div class="toggle-switch">
          <div class="switch"></div>
        </div>
      </div>
    `;
    
  const toggleSwitch = myArticle.querySelector(".toggle-switch");
    const switchEl = myArticle.querySelector(".switch");
    
    if(item.isActive) {
      toggleSwitch.classList.add("active");
      switchEl.classList.add("switch-active");
    }
    
    switchEl.addEventListener("click", () => {
      toggleSwitch.classList.toggle("active");
      switchEl.classList.toggle("switch-active");
    }
    )
    
    mainEl.appendChild(myArticle);
  });
}

populate();

const themeToggle = document.getElementById("toggle-theme");
the