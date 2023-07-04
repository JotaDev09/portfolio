/*
 * This function initializes some necessary functions when the page is loaded.
 */
function initIndex() {
  type();
  setLanguages();
  responsiveButtonMenu();
  renderInfo();
  renderProjects();
  renderKnowledges();
}

/*
 * Add click event to each link of the differents languages
 */
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the "active" class from the previous active element and add it to the current element
    langs.querySelector(".active").classList.remove("active");
    link.classList.add("active");

    const attr = link.getAttribute("language");

    setLanguages(attr);
  });
});

/*
 * Update the content of various DOM elements with the corresponding language from the "data" object.
 */
function setLanguages(attr) {
  const languageData = data[attr] || data["english"];

  home.textContent = languageData.menuHome;
  me.textContent = languageData.menuMe;
  project.textContent = languageData.menuProjects;
  menucontact.textContent = languageData.menucontact;
  follow.textContent = languageData.followMe;
  title.textContent = languageData.title;
  aboutME.textContent = languageData.hello;
  buttonCV.textContent = languageData.buttonCV;
  description.textContent = languageData.description;
  projectsT.textContent = languageData.projectsTitle;
  attributions.textContent = languageData.attributions;
  design_.textContent = languageData.design_;
  design.textContent = languageData.design;
}

/*
 * It generates a button specifically for the header when in responsive mode
 */
function responsiveButtonMenu() {
  let headButton = document.getElementById("headButton");
  let headLinks = document.getElementById("headLinks");
  let headMenu = document.getElementById("head_menu");
  let menuElements = document.getElementsByClassName("menu_contain");

  headButton.addEventListener("click", function () {
    headLinks.classList.toggle("active");
    headButton.classList.toggle("open");
  });

  for (let i = 0; i < menuElements.length; i++) {
    menuElements[i].addEventListener("click", function () {
      headLinks.classList.remove("active");
      headButton.classList.remove("open");
    });
  }
}

/*
 * the function types the text of the title like a typewriter
 */
function type() {
  if (currentTextIndex >= texts.length) {
    currentTextIndex = 0;
  }

  const currentTextToType = texts[currentTextIndex];

  if (isDeleting) {
    currentText = currentText.substring(0, currentText.length - 1);
  } else {
    currentText = currentTextToType.substring(0, currentText.length + 1);
  }

  document.getElementById("typed-text").innerHTML = currentText;

  if (!isDeleting && currentText === currentTextToType) {
    isDeleting = true;
    typingSpeed = 60;
    setTimeout(type, pause);
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentTextIndex++;
    typingSpeed = 60;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, typingSpeed);
  }
}

/*
 * the function takes the array of the newKnowledge and send it to the renderSkill function
 */
function renderKnowledges() {
  let knowledgeContainer = document.getElementById("knowledgeContainer");
  knowledgeContainer.innerHTML = "";
  let knowledgeContainerResp = document.getElementById(
    "knowledgeContainerResp"
  );
  knowledgeContainerResp.innerHTML = "";

  let maxWidth = window.innerWidth || document.documentElement.clientWidth;

  for (let knowledge = 0; knowledge < knowledges.length; knowledge++) {
    let newKnowledge = knowledges[knowledge];
    if (maxWidth < 800) {
      knowledgeContainerResp.innerHTML += renderKnowledge(newKnowledge);
    } else {
      knowledgeContainer.innerHTML += renderKnowledge(newKnowledge);
    }
  }
}
/**
 * the function renders the newKnowledges to the HTML document
 *
 * @param {object} newKnowledge - the object that contains the newKnowledges.
 * @returns {string} - A text template representing the HTML element of the newKnowledge.
 */
function renderKnowledge(newKnowledge) {
  return `
  <div class="knowledge column-center-center">
      <img class="knowledge_img" src="${newKnowledge["icon"]}">
      <a class="knowledge_type" id="knowledgeType">${newKnowledge["type"]}</a>
  </div>
  `;
}

/*
 * the function takes the array of the projects and send it to the renderProject function
 */
function renderProjects() {
  let projectsContainer = document.getElementById("projectsContainer");
  projectsContainer.innerHTML = "";
  for (let project = 0; project < projects.length; project++) {
    let newProject = projects[project];
    projectsContainer.innerHTML += renderProject(newProject);
  }
}

/**
 * the function renders the projects to the HTML document
 *
 * @param {object} newProject - the object that contains the projects.
 * @returns {string} - A text template representing the HTML element of the project.
 */
function renderProject(newProject) {
  return `
  <div class="projects column-center-center">
      <img class="projects_img" style="background-image: url('${newProject["screenshot"]}')" data-webSite="${newProject["website"]}" onClick="openWebSite()">
      <div class="projects_name_cont">
        <a class="projects_name" id="projectsName">${newProject["name"]}</a>
        <img class="projects_github" src="assets/icons/github.svg" data-github="${newProject["github"]}" onClick="openGithub()">
      </div>
  </div>
  `;
}

/*
 * the function open the website's link of the project
 */
function openWebSite() {
  let webSiteLink = event.target.dataset.website;
  if (webSiteLink) {
    window.open(webSiteLink);
  }
}

/*
 * the function open the github's link of the project
 */
function openGithub() {
  let githubLink = event.target.dataset.github;
  if (githubLink) {
    window.open(githubLink);
  }
}

/*
 * the function takes the array myInfo and send it to the renderInformation function
 */
function renderInfo() {
  let infoContainer = document.getElementById("infoContainer");
  infoContainer.innerHTML = "";
  let newInfo = myInfo[0];
  infoContainer.innerHTML += renderInformation(newInfo);
}

/**
 * the function renders the info to the HTML document
 *
 * @param {object} newInfo - the object that contains the information.
 * @returns {string} - A text template representing the HTML element of the skill.
 */
function renderInformation(newInfo) {
  return `
  <a class="info_type info_info">${newInfo["name"]}</a>
  <img class="info_linie" src="assets/icons/linieBlue.png"><img/>
  <a class="info_type" href="tel:+491786082868">${newInfo["phone"]}</a>
  <img class="info_linie linie_600" src="assets/icons/linieBlue.png"><img/>
  <a class="info_type info_info" href="mailto:juanj.desantos@gmail.com">${newInfo["email"]}</a>
  <img class="info_linie" src="assets/icons/linieBlue.png"><img/>
  <a class="info_type">${newInfo["address"]}</a>`;
}
