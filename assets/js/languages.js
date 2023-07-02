/*
 * Add click event to each link of the differents languages
 */
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the "active" class from the previous active element and add it to the current element
    langs.querySelector(".active").classList.remove("active");
    link.classList.add("active");

    const attr = link.getAttribute("language");
    // Update the content of various DOM elements with the corresponding values from the "data" object

    home.textContent = data[attr].menuHome;
    me.textContent = data[attr].menuMe;
    project.textContent = data[attr].menuProjects;
    skill.textContent = data[attr].menuSkills;
    follow.textContent = data[attr].followMe;
    title.textContent = data[attr].title;
    aboutME.textContent = data[attr].menuMe;
    buttonCV.textContent = data[attr].buttonCV;
    description.textContent = data[attr].description;
    strength.textContent = data[attr].strengths;
    weakness.textContent = data[attr].weaknesses;
    projectsT.textContent = data[attr].projectsTitle;
    skillsTitle.textContent = data[attr].skillsTitle;
    languagesTitle.textContent = data[attr].languagesTitle;
    attributions.textContent = data[attr].attributions;
    design_.textContent = data[attr].design_;
    design.textContent = data[attr].design;

    // Call the function to render the attributes corresponding to the selected language
    renderAttributesCont(attr);
  });
});

/**
 * The function renders the attributes based on the selected language.
 *
 * @param {object} attr - The selected language attributes.
 */
function renderAttributesCont(attr) {
  let strengths = [];
  let weaknesses = [];
  let languages = [];

  if (attr === "german") {
    strengths = strengthsDE;
    weaknesses = weaknessesDE;
    languages = languagesDE;
  } else if (attr === "spanish") {
    strengths = strengthsES;
    weaknesses = weaknessesES;
    languages = languagesES;
  } else {
    strengths = strengthsEN;
    weaknesses = weaknessesEN;
    languages = languagesEN;
  }

  renderAttributes(strengths, weaknesses, languages);
}

/**
 * the function renders the attributes corresponding to the selected language.
 *
 * @param {object} strengths - the object that contains the strengths.
 * @param {object} weaknesses - the object that contains the waknesses.
 * @param {object} languages - the object that contains the languages.
 */
function renderAttributes(strengths, weaknesses, languages) {
  let strengthsHTML = "";
  let weaknessesHTML = "";
  let languagesHTNL = "";

  strengths.forEach((strength) => {
    strengthsHTML += renderStrength(strength);
  });

  weaknesses.forEach((weakness) => {
    weaknessesHTML += renderWeaknesses(weakness);
  });

  languages.forEach((language) => {
    languagesHTNL += renderLanguage(language);
  });

  strengthsCont.innerHTML = strengthsHTML;
  weaknessesCont.innerHTML = weaknessesHTML;
  languagesContainer.innerHTML = languagesHTNL;
}

/**
 * the function renders the strengths to the HTML document
 *
 * @param {object} strength - the object that contains the strengths.
 * @returns {string} - A text template representing the HTML element of the language.
 */
function renderStrength(strength) {
  return `
    <a class="characteristics">${strength}</a>
  `;
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
 * the function renders the languages to the HTML document
 *
 * @param {object} language - the object that contains the languages.
 * @returns {string} - A text template representing the HTML element of the language.
 */
function renderLanguage(language) {
  return `
  <div class="skills column-center-center">
  <img class="skills_img" src="${language["flag"]}">
  <a class="skills_type" >${language["language"]}</a>
  <a class="skills_type" >${language["level"]}</a>
  </div>
  `;
}
