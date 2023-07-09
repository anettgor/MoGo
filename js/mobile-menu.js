const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu-mobile");
const body = document.querySelector("body");
const hamburgerIcon = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");

class MenuToggle {
  constructor(element) {
    this.menu = element;
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.menu.classList.toggle("hidden", !this.isOpen);
    body.classList.toggle("overflow", this.isOpen);
    this.menu.setAttribute("aria-expanded", this.isOpen);
    hamburgerIcon.classList.toggle("hidden", this.isOpen);
    closeIcon.classList.toggle("hidden", !this.isOpen);
  }

  close() {
    if (this.isOpen) {
      this.toggle();
    }
  }
}

const menuToggle = new MenuToggle(menu);

menuBtn.addEventListener("click", () => {
  menuToggle.toggle();
});

// Add event listener for mobile menu elements
const mobileMenuElements = document.querySelectorAll(".nav__menu-mobile-item");

mobileMenuElements.forEach((element) => {
  element.addEventListener("click", () => {
    menuToggle.close();
  });
});
