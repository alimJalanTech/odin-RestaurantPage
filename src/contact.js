const createContactPage = () => {
  const content = document.querySelector(".main-page");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const form = document.createElement("form");
  form.classList.add("contact-form");

  const headingInput = document.createElement("input");
  headingInput.type = "text";
  headingInput.placeholder = "Enter heading";
  form.appendChild(headingInput);

  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.placeholder = "Enter address";
  form.appendChild(addressInput);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Enter E-Mail";
  form.appendChild(emailInput);

  const submitInput = document.createElement("button");
  submitInput.textContent = "Submit";
  form.appendChild(submitInput);

  pageContent.appendChild(form);
  content.appendChild(pageContent);
};

export default createContactPage;
