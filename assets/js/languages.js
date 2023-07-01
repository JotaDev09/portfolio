let langs = document.querySelector(".languages");
let links = document.querySelectorAll(".languages a"),
  home = document.getElementById("menuHome"),
  me = document.getElementById("menuMe"),
  project = document.getElementById("menuProjects"),
  skill = document.getElementById("menuSkills"),
  title = document.querySelector(".title"),
  follow = document.getElementById("followMe"),
  aboutME = document.querySelector(".aboutme_title"),
  description = document.getElementById("description"),
  strength = document.getElementById("strengths"),
  weakness = document.getElementById("weaknesses");

let data = {
  english: {
    menuHome: "Home",
    menuMe: "About me",
    menuProjects: "Projects",
    menuSkills: "Skills",
    title: "I'm",
    followMe: "FOLLOW ME",
    description:
      "I'm a Junior Front End developer from Spain, currently residing in Germany since 2018, with a background in other kind of works. In 2022, a decision was made to embrace new challenges and explore the world of programming. The process of learning programming, which once caused difficulties, unexpectedly revealed a source of joy and fulfillment. Seeking the opportunity to work as a professional programmer, previous experience in project development has been gained.",
    name: "Name: ",
    phone: "Phone: ",
    address: "Address: ",
    strengths: "Strengths",
    weaknesses: "Weaknesses",
  },
  german: {
    menuHome: "Home",
    menuMe: "Über mich",
    menuProjects: "Projekte",
    menuSkills: "Skills",
    title: "Ich bin",
    followMe: "FOLGE UNS",
    description:
      "Ich bin ein Junior Frontend-Entwickler aus Spanien und lebe seit 2018 in Deutschland. Zuvor habe ich in anderen Bereichen gearbeitet. Im Jahr 2022 habe ich mich entschieden, neue Herausforderungen anzunehmen und die Welt der Programmierung zu erkunden. Der Lernprozess des Programmierens, der früher Schwierigkeiten verursachte, enthüllte unerwartet eine Quelle der Freude und Erfüllung. Auf der Suche nach der Möglichkeit, als professioneller Programmierer zu arbeiten, habe ich bereits Erfahrung in der Projektentwicklung gesammelt.",
    name: "Name: ",
    phone: "Nummer: ",
    address: "Anschrift: ",
    strengths: "Stärke",
    weaknesses: "Schwäche",
  },
  spanish: {
    menuHome: "Inicio",
    menuMe: "Sobre mí",
    menuProjects: "Proyectos",
    menuSkills: "Habilidades",
    title: "Yo soy",
    followMe: "SÍGUEME",
    description:
      "Soy un desarrollador Front End junior de España, actualmente resido en Alemania desde 2018, y cuento con experiencia en otros campos laborales. En 2022, tomé la decisión de abrazar nuevos desafíos y explorar el mundo de la programación. El proceso de aprendizaje de la programación, que en un principio presentaba dificultades, reveló inesperadamente una fuente de alegría y satisfacción. En busca de la oportunidad de trabajar como programador profesional, he adquirido experiencia previa en el desarrollo de proyectos.",
    name: "Nombre: ",
    phone: "Teléfono: ",
    address: "Fortalezas: ",
    strengths: "Strengths",
    weaknesses: "Debilidades",
  },
};

function updateArrays(attr) {
  (nameElement = document.getElementById("aboutName")),
    (phoneElement = document.getElementById("aboutPhone")),
    (addressElement = document.getElementById("aboutAddress"));

  nameElement.textContent = data[attr].name;
  phoneElement.textContent = data[attr].phone;
  addressElement.textContent = data[attr].address;
}

// Agregar evento de clic a cada enlace
links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("click");
    langs.querySelector(".active").classList.remove("active");
    link.classList.add("active");

    const attr = link.getAttribute("language");
    home.textContent = data[attr].menuHome;
    me.textContent = data[attr].menuMe;
    project.textContent = data[attr].menuProjects;
    skill.textContent = data[attr].menuSkills;
    follow.textContent = data[attr].followMe;
    title.textContent = data[attr].title;
    aboutME.textContent = data[attr].menuMe;
    description.textContent = data[attr].description;
    strength.textContent = data[attr].strengths;
    weakness.textContent = data[attr].weaknesses;

    updateArrays(attr);
  });
});
