const texts = ["Juan de Santos", "Front End Developer"];
let currentTextIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 60;
let pause = 2000;

let myInfo = [
  {
    name: "Juan de Santos",
    phone: "+49 0178 5546224",
    address: "Berlin, Germany",
    email: "juanj.desantos@gmail.com",
  },
];

let strengths = [
  "Hard-working",
  "Look for solutions",
  "Dedicated",
  "Enthusiastic",
  "Methodical",
  "Patient",
  "Trustworthy",
  "Team Player",
  "Optimistic",
];
let weaknesses = [
  "Non-native German/English language",
  "Impulsive",
  "Shy person in the beginning",
  "Overthinking",
  "Self-critical",
  "Public speaking",
];

let projects = [
  {
    name: "Portfolio",
    github: "",
    screenshot: "",
    website: "",
  },
  {
    name: "Weather App",
    github: "https://github.com/JotaDev09/WeatherApp.git",
    screenshot: "/assets/img/weatherApp.png",
    website: "https://jotadev09.github.io/WeatherApp/",
  },
  {
    name: "El Pollo loco",
    github: "https://github.com/JotaDev09/Crazy-Chicken.git",
    screenshot: "/assets/img/polloLoco.jpg",
    website: "https://jotadev09.github.io/Crazy-Chicken/",
  },
  {
    name: "Instagram",
    github: "https://github.com/JotaDev09/InstagramCopy.git",
    screenshot: "/assets/img/instagram.png",
    website: "https://jotadev09.github.io/InstagramCopy/",
  },
];

let skills = [
  {
    type: "HTML",
    icon: "assets/icons/html.png",
  },
  {
    type: "CSS",
    icon: "assets/icons/css.png",
  },
  {
    type: "Javascript",
    icon: "assets/icons/javascript.svg",
  },
  {
    type: "React",
    icon: "assets/icons/react.png",
  },
  {
    type: "API",
    icon: "assets/icons/api.png",
  },
  {
    type: "Github",
    icon: "assets/icons/githubBlack.svg",
  },
  {
    type: "Scrum",
    icon: "assets/icons/scrum.png",
  },
];

let languages = [
  {
    language: "Spanish",
    level: "Native",
    flag: "assets/icons/spanien.png",
  },
  {
    language: "German",
    level: "B2",
    flag: "assets/icons/deutschland.png",
  },
  {
    language: "English",
    level: "B1",
    flag: "assets/icons/großbritannien.png",
  },
];

/*
 * This function initializes some necessary functions when the page is loaded.
 */
function initIndex() {
  type();
  includeHTML();
  renderArrays();
}

/*
 * This function calls the necessary functions to render the arrays in the HTML document.
 */
function renderArrays() {
  renderInfo();
  renderStrengthsCont();
  renderWeaknessesCont();
  renderProjects();
  renderSkills();
  renderlanguages();
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

/*
 * the function takes the array of the strengths and send it to the renderStrengths function
 */
function renderStrengthsCont() {
  let strengthsCont = document.getElementById("strengthsCont");
  strengthsCont.innerHTML = "";
  for (let adj = 0; adj < strengths.length; adj++) {
    const strength = strengths[adj];
    strengthsCont.innerHTML += renderStrengths(strength);
  }
}

/**
 * the function renders the strengths to the HTML document
 *
 * @param {object} strength - the object that contains the strengths.
 * @returns {string} - A text template representing the HTML element of the language.
 */
function renderStrengths(strength) {
  return `
  <a class="characteristics">${strength}</a>
                        `;
}

/*
 * the function takes the array of the weaknesses and send it to the renderWeaknesses function
 */
function renderWeaknessesCont() {
  let weaknessesCont = document.getElementById("weaknessesCont");
  weaknessesCont.innerHTML = "";
  for (let adj = 0; adj < weaknesses.length; adj++) {
    const weakness = weaknesses[adj];
    weaknessesCont.innerHTML += renderWeaknesses(weakness);
  }
}

/**
 * the function renders the weaknesses to the HTML document
 *
 * @param {object} weakness - the object that contains the weaknesses.
 * @returns {string} - A text template representing the HTML element of the language.
 */
function renderWeaknesses(weakness) {
  return `
  <a class="characteristics">${weakness}</a>
                        `;
}

/**
 * the function renders the info to the HTML document
 *
 * @param {object} newInfo - the object that contains the information.
 * @returns {string} - A text template representing the HTML element of the skill.
 */
function renderInformation(newInfo) {
  return `
  <a class="info_type">Name: <span>${newInfo["name"]}</span></a><br>
  <a class="info_type">Phone: <span>${newInfo["phone"]}</span></a><br>
  <a class="info_type">Address: <span>${newInfo["address"]}</span></a><br>
  <a class="info_type">Email: <span>${newInfo["email"]}</span></a>`;
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
        <img class="projects_github" src="/assets/icons/github.svg" data-github="${newProject["github"]}" onClick="openGithub()">
      </div>
  </div>
  `;
}

function openWebSite() {
  let webSiteLink = event.target.dataset.website;
  if (webSiteLink) {
    window.open(webSiteLink);
  }
}

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

/*
 * the function takes the array of the skills and send it to the renderSkill function
 */
function renderlanguages() {
  let languagesContainer = document.getElementById("languagesContainer");
  languagesContainer.innerHTML = "";
  for (let language = 0; language < languages.length; language++) {
    let newLanguage = languages[language];
    languagesContainer.innerHTML += renderLanguage(newLanguage);
  }
}

/**
 * the function renders the skills to the HTML document
 *
 * @param {object} newLanguage - the object that contains the languages.
 * @returns {string} - A text template representing the HTML element of the language.
 */
function renderLanguage(newLanguage) {
  return `
  <div class="skills column-center-center">
  <img class="skills_img" src="${newLanguage["flag"]}">
  <a class="skills_type" >${newLanguage["language"]}</a>
  <a class="skills_type" >${newLanguage["level"]}</a>
  </div>
  `;
}
