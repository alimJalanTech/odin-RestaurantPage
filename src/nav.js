import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createNav = () => {
  const content = document.querySelector(".main-page");

  const enclosed = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  div1.setAttribute("id", "home-btn");
  div2.setAttribute("id", "menu-btn");
  div3.setAttribute("id", "contact-btn");

  div1.classList.add("tab");
  div2.classList.add("tab");
  div3.classList.add("tab");

  div1.textContent = "Home";
  div2.textContent = "Menu";
  div3.textContent = "Contact";

  enclosed.appendChild(div1);
  enclosed.appendChild(div2);
  enclosed.appendChild(div3);

  content.appendChild(enclosed);
  div1.addEventListener("click", () => {
    clearContent();
    createRestaurantHomePage();
  });
  div2.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });
  div3.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector(".main-page");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createNav;
