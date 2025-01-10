function genProjects() {
  const section = document.querySelector(".js-blog");
  const Morebtn = document.querySelector(".More");

  if (!section.classList.contains("visible")) {
    section.classList.add("visible");
    section.classList.add("ease-in");
    Morebtn.innerHTML = "Hide";
  } else {
    section.classList.remove("ease-in");
    section.classList.add("ease-out");
    Morebtn.innerHTML = "See More";

    // Add a delay before removing the "visible" class
    setTimeout(() => {
      section.classList.remove("visible");
      section.classList.remove("ease-out"); // Optional: Remove the "ease-out" class after the animation ends
    }, 400); // Delay matches the duration of the "ease-out" animation
  }
}