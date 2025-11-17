const menuButton = document.querySelector(".aside__actions-button.menu");
const navbar = document.querySelector(".navbar");
const sectionOneText = document.querySelector(".section__one-text");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

sectionOneText.textContent = `
    ${new Date().toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })}
`;
