const createRestaurantHomePage = () => {
  const content = document.querySelector(".main-page");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  //Adding the image
  const image = document.createElement("img");
  image.src = "../dist/beans.jpg";
  image.classList.add("wallpaper");
  pageContent.appendChild(image);

  //Add headline
  const header = document.createElement("h1");
  header.textContent = "Welcome to our eatery";
  pageContent.appendChild(header);

  //Add text
  const text = document.createElement("p");
  text.textContent =
    "We serve the best food in town that you can move to or buy at the most minimal prices";
  pageContent.appendChild(text);
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
