// Variables for controlling the presentation and effect of the typewriter
const texts = ["Juan de Santos", "Front End Developer"];
let currentTextIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 60;
let pause = 2000;

// Variables storing the titles to be translated on the website
let langs = document.querySelector(".languages");
let links = document.querySelectorAll(".languages a"),
  home = document.getElementById("menuHome"),
  me = document.getElementById("menuMe"),
  project = document.getElementById("menuProjects"),
  skill = document.getElementById("menuSkills"),
  title = document.querySelector(".title"),
  follow = document.getElementById("followMe"),
  aboutME = document.querySelector(".aboutme_title"),
  buttonCV = document.querySelector(".buttonCV"),
  description = document.getElementById("description"),
  strength = document.getElementById("strengths"),
  weakness = document.getElementById("weaknesses"),
  projectsT = document.querySelector(".projects_title"),
  skillsTitle = document.getElementById("skillsTitle"),
  languagesTitle = document.getElementById("languagesTitle");
