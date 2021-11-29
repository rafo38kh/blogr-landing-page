const menuLists = document.querySelectorAll(".js-panel");
const subLists = document.querySelectorAll(".js-sublist");
const img = document.querySelector(".blogr__hamburger");
const button = document.querySelector(".blogr__button");
const navBar = document.querySelector(".blogr__navbar");

button.addEventListener("click", () => {
  if (!navBar.classList.contains("blogr__navbar--active")) {
    img.src = "./images/icon-close.svg";
    navBar.classList.add("blogr__navbar--active");
  } else {
    img.src = "./images/icon-hamburger.svg";
    navBar.classList.remove("blogr__navbar--active");
  }
});

menuLists.forEach((item) => {
  item.addEventListener("click", (e) => {
    menuLists.forEach((list) => {
      list.nextElementSibling.classList.remove("blogr__sublist--active");
      list.classList.remove("open-arrow");
    });
    e.target.nextElementSibling.classList.add("blogr__sublist--active");
    e.target.classList.add("open-arrow");
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".js-panel")) {
    menuLists.forEach((list) => {
      list.nextElementSibling.classList.remove("blogr__sublist--active"),
        list.classList.remove("open-arrow");
    });
  }
});

// console.log(subLists);
