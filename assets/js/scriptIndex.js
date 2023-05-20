const texts = ["Juan de Santos", "Front End Developer"];
let currentTextIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 60;
let pause = 2000;

/*
 * the function inits some necessary functions in onload
 */
function initIndex() {
  type();
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
