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
    menucontact.textContent = data[attr].menucontact;
    follow.textContent = data[attr].followMe;
    title.textContent = data[attr].title;
    aboutME.textContent = data[attr].hello;
    buttonCV.textContent = data[attr].buttonCV;
    description.textContent = data[attr].description;
    projectsT.textContent = data[attr].projectsTitle;
    attributions.textContent = data[attr].attributions;
    design_.textContent = data[attr].design_;
    design.textContent = data[attr].design;
  });
});
