// Variables for controlling the presentation and effect of the typewriter
const texts = ["JUAN DE SANTOS", "FRONT-END DEVELOPER"];
let currentTextIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 60;
let pause = 2000;

// Variables storing the titles to be translated on the website
let langs = document.querySelector(".head_languages");
let links = document.querySelectorAll(".head_languages a"),
  home = document.getElementById("menuHome"),
  me = document.getElementById("menuMe"),
  project = document.getElementById("menuProjects"),
  menucontact = document.getElementById("menucontact"),
  skill = document.getElementById("menuSkills"),
  title = document.querySelector(".title"),
  follow = document.getElementById("followMe"),
  aboutME = document.querySelector(".aboutme_title"),
  buttonEN = document.getElementById("buttonEN"),
  buttonDE = document.getElementById("buttonDE"),
  buttonES = document.getElementById("buttonES"),
  description = document.getElementById("description"),
  projectsT = document.querySelector(".projects_title"),
  attributions = document.querySelector(".attributions"),
  design_ = document.querySelector(".design_"),
  design = document.querySelector(".design");
