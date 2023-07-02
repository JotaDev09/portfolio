/*
 * This function initializes some necessary functions when the page is loaded.
 */
function initIndex() {
  type();
  renderArrays();
}

/*
 * This function calls the necessary functions to render the arrays in the HTML document.
 */
function renderArrays() {
  renderInfo();
  renderAttributesCont();
  renderProjects();
  renderSkills();
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
  <span class="info_type">${newInfo["name"]}</span><a class="info_linie">|<a/>
  <span class="info_type">${newInfo["phone"]}</span><a class="info_linie">|<a/>
  <span class="info_type">${newInfo["email"]}</span><a class="info_linie">|<a/>
  <span class="info_type">${newInfo["address"]}</span><br>`;
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
 * the function takes the array of the skills and send it to the renderSkill function
 */
function renderSkills() {
  let skillsContainer = document.getElementById("skillsContainer");
  skillsContainer.innerHTML = "";
  for (let skill = 0; skill < skills.length; skill++) {
    let newSkill = skills[skill];
    skillsContainer.innerHTML += renderSkill(newSkill);
  }
}

/**
 * the function renders the skills to the HTML document
 *
 * @param {object} newSkill - the object that contains the skills.
 * @returns {string} - A text template representing the HTML element of the skill.
 */
function renderSkill(newSkill) {
  return `
  <div class="skills column-center-center">
      <img class="skills_img" src="${newSkill["icon"]}">
      <a class="skills_type" id="skillsType">${newSkill["type"]}</a>
  </div>
  `;
}
