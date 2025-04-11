class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    };

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    };

    constructor() {
      this.burgerBtnElement = document.querySelector(this.selectors.burgerButton);
      this.overlayElement = document.querySelector(this.selectors.overlay);
      this.rootElement = document.querySelector(this.selectors.root);
      this.init();
    }
  
    init() {
      this.burgerBtnElement.addEventListener("click", () => {
        this.toggleMenu();
      });
  
      document.addEventListener("click", (event) => {
        if (
          !this.rootElement.contains(event.target) && 
          !this.burgerBtnElement.contains(event.target)
        ) {
          this.closeMenu();
        }
      });
  
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          this.closeMenu();
        }
      });
    }
  
    toggleMenu() {
      this.burgerBtnElement.classList.toggle("is-active");
      this.overlayElement.classList.toggle("is-active");
    }
  
    closeMenu() {
      this.burgerBtnElement.classList.remove("is-active");
      this.overlayElement.classList.remove("is-active");
    }
  }
  
  export default Header;
  

