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
    skill.textContent = data[attr].menuknowledge;
    follow.textContent = data[attr].followMe;
    title.textContent = data[attr].title;
    aboutME.textContent = data[attr].hello;
    buttonCV.textContent = data[attr].buttonCV;
    description.textContent = data[attr].description;
    strength.textContent = data[attr].strengths;
    projectsT.textContent = data[attr].projectsTitle;
    knowledgeTitle.textContent = data[attr].knowledgeTitle;
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
  let languages = [];

  if (attr === "german") {
    strengths = strengthsDE;
    languages = languagesDE;
  } else if (attr === "spanish") {
    strengths = strengthsES;
    languages = languagesES;
  } else {
    strengths = strengthsEN;
    languages = languagesEN;
  }

  renderAttributes(strengths, languages);
}

/**
 * the function renders the attributes corresponding to the selected language.
 *
 * @param {object} strengths - the object that contains the strengths.
 * @param {object} languages - the object that contains the languages.
 */
function renderAttributes(strengths, languages) {
  let strengthsHTML = "";
  let languagesHTNL = "";

  strengths.forEach((strength) => {
    strengthsHTML += renderStrength(strength);
  });

  languages.forEach((language) => {
    languagesHTNL += renderLanguage(language);
  });

  strengthsCont.innerHTML = strengthsHTML;
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
 * the function renders the languages to the HTML document
 *
 * @param {object} language - the object that contains the languages.
 * @returns {string} - A text template representing the HTML element of the language.
 */
function renderLanguage(language) {
  return `
  <div class="languages_cont">
  <a class="characteristics" >${language["language"]}</a>
  <a class="characteristics" >${language["level"]}</a>
  </div>
  `;
}
