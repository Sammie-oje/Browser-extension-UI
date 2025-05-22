//Fetch data from json
async function populate () {
  const requestURL = "data.json";
  const request = new Request(requestURL);
  
  const response = await fetch(request);
  const data = await response.json();
  
  populateMainUI(data);
}

//Populate the body
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
    //Show modal upon clicking the "remove" button
    const removeBtn = myArticle.querySelector(".remove-btn");
    
    removeBtn.addEventListener("click",() =>{
      document.querySelector(".modal").showModal();
    });
    
    mainEl.appendChild(myArticle);
  });
}

populate();

const themeToggle = document.getElementById("toggle-theme");
//Theme toggle function
themeToggle.addEventListener("click", () =>{
  const body = document.body;
  const logo = document.getElementById("logo");
  
  const themeIcon = document.getElementById("theme-icon");
  
  if(body.classList.contains("dark")) {
  body.classList.remove("dark");
    logo.src = "./assets/images/logo.svg";
    themeIcon.src = "./assets/images/icon-moon.svg"
  }else{
    body.classList.add("dark");
    logo.src = "./assets/images/logo-dark.svg";
    themeIcon.src = "./assets/images/icon-sun.svg";
  }
});

function closeModal() {
  document.querySelector(".modal").close();
}

//Close modal when "cancel" button is clicked
const cancelBtn = document.querySelector("#cancel-btn");

cancelBtn.addEventListener("click", () => {
  closeModal();
})
//Remove article when "continue" button is clicked
const continueBtn = document.querySelector("#continue-btn");

continueBtn.addEventListener("click", () => {
  closeModal();
  const articles = document.querySelectorAll(".extension-info");
  articles.forEach(article => {
    article.style.transform = "translateX(30em)";
    article.style.position = "fixed";
  })
})