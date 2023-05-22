const texts = ["Juan de Santos", "Front End Developer"];
let currentTextIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 60;
let pause = 2000;

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
    type: "Scrum",
    icon: "assets/icons/scrum.png",
  },
  {
    type: "API",
    icon: "assets/icons/api.png",
  },
  {
    type: "Github",
    icon: "assets/icons/githubBlack.svg",
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

let strengths = ["Hard-working", "Look for solutions"];
let weaknesses = ["Non-native German/English language", "Impulsive"];

/*
 * the function inits some necessary functions in onload
 */
function initIndex() {
  type();
  includeHTML();
  renderSkills();
  renderStrengthsCont();
  renderWeaknessesCont();
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

/*
 * the function renders the skills to the HTML document
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

/*
 * the function renders the skills to the HTML document
 * {strength}:
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

function renderWeaknesses(weakness) {
  return `
  <a class="characteristics">${weakness}</a>
                        `;
}
