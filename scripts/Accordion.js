class Accordion {
    selectors = {
      header: '.dp-header',
      arrow: '.dp-arrow',
    };
  
    stateClasses = {
      isOpen: 'open',
      arrowOpen: 'dp-arrow-open',
      arrowClosed: 'dp-arrow-closed',
    };
  
    constructor() {
      this.headers = document.querySelectorAll(this.selectors.header);
      this.init();
    }
  
    init() {
      this.headers.forEach(header => {
        header.addEventListener('click', () => this.toggleSection(header));
      });
    }
  
    toggleSection(header) {
      const section = header.parentElement;
      const arrow = header.querySelector(this.selectors.arrow);
  
      if (section.classList.contains(this.stateClasses.isOpen)) {
        section.classList.remove(this.stateClasses.isOpen);
        arrow.classList.remove(this.stateClasses.arrowOpen);
        arrow.classList.add(this.stateClasses.arrowClosed);
      } else {
        section.classList.add(this.stateClasses.isOpen);
        arrow.classList.remove(this.stateClasses.arrowClosed);
        arrow.classList.add(this.stateClasses.arrowOpen);
      }
    }
  }
  
  export default Accordion;
  