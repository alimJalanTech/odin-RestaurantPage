(() => {
  "use strict";
  const e = () => {
    const e = document.querySelector(".main-page"),
      t = document.createElement("div");
    t.classList.add("page-content");
    const n = document.createElement("img");
    (n.src = "beans.jpg"), n.classList.add("wallpaper"), t.appendChild(n);
    const d = document.createElement("h1");
    (d.textContent = "Welcome to our eatery"), t.appendChild(d);
    const c = document.createElement("p");
    (c.textContent =
      "We serve the best food in town that you can move to or buy at the most minimal prices"),
      t.appendChild(c),
      e.appendChild(t);
  };
  function t() {
    const e = document.querySelector(".main-page"),
      t = document.querySelector(".page-content");
    t && e.removeChild(t);
  }
  (() => {
    const n = document.querySelector(".main-page"),
      d = document.createElement("div"),
      c = document.createElement("div"),
      o = document.createElement("div"),
      a = document.createElement("div");
    c.setAttribute("id", "home-btn"),
      o.setAttribute("id", "menu-btn"),
      a.setAttribute("id", "contact-btn"),
      c.classList.add("tab"),
      o.classList.add("tab"),
      a.classList.add("tab"),
      (c.textContent = "Home"),
      (o.textContent = "Menu"),
      (a.textContent = "Contact"),
      d.appendChild(c),
      d.appendChild(o),
      d.appendChild(a),
      n.appendChild(d),
      c.addEventListener("click", () => {
        t(), e();
      }),
      o.addEventListener("click", () => {
        t(),
          (() => {
            const e = document.querySelector(".main-page"),
              t = document.createElement("div");
            t.classList.add("page-content");
            const n = document.createElement("h1");
            n.textContent = "Our Menu";
            const d = document.createElement("ul"),
              c = document.createElement("li");
            c.textContent = "Pomodoro";
            const o = document.createElement("li");
            o.textContent = "Bolognes";
            const a = document.createElement("li");
            (a.textContent = "Alfredo"),
              d.appendChild(c),
              d.appendChild(o),
              d.appendChild(a),
              t.appendChild(n),
              t.appendChild(d),
              e.appendChild(t);
          })();
      }),
      a.addEventListener("click", () => {
        t(),
          (() => {
            const e = document.querySelector(".main-page"),
              t = document.createElement("div");
            t.classList.add("page-content");
            const n = document.createElement("form");
            n.classList.add("contact-form");
            const d = document.createElement("input");
            (d.type = "text"),
              (d.placeholder = "Enter heading"),
              n.appendChild(d);
            const c = document.createElement("input");
            (c.type = "text"),
              (c.placeholder = "Enter address"),
              n.appendChild(c);
            const o = document.createElement("input");
            (o.type = "email"),
              (o.placeholder = "Enter E-Mail"),
              n.appendChild(o);
            const a = document.createElement("button");
            (a.textContent = "Submit"),
              n.appendChild(a),
              t.appendChild(n),
              e.appendChild(t);
          })();
      });
  })(),
    e();
})();
