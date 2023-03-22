const createMenuPage = () => {
  const content = document.querySelector(".main-page");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const header = document.createElement("h1");
  header.textContent = "Our Menu";

  const menuList = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "Pomodoro";
  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "Bolognes";
  const menuItem3 = document.createElement("li");
  menuItem3.textContent = "Alfredo";
  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);

  pageContent.appendChild(header);
  pageContent.appendChild(menuList);
  content.appendChild(pageContent);
};

export default createMenuPage;
