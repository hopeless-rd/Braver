class Slider {
  selectors = {
    banner: '[data-js-banner]',
    sliderRight: '[data-js-slider-right]',
    sliderLeft: '[data-js-slider-left]',
  };

  constructor() {
    this.sliderWrapper = document.querySelector(this.selectors.banner);
    this.leftArrow = document.querySelector(this.selectors.sliderLeft);
    this.rightArrow = document.querySelector(this.selectors.sliderRight);
    this.slides = this.sliderWrapper.querySelectorAll(".banner__image");
    this.totalSlides = this.slides.length;
    this.currentIndex = 0;

    this.init();
  }

  // Функция для проверки, мобильное ли устройство
  isMobileOrTablet() {
    return window.innerWidth <= 1257; // Условие для мобильных и планшетов
  }

  // Функция сдвига слайдов
  moveSlider(direction) {
    if (this.isMobileOrTablet()) {
      // Для мобильных и планшетов слайдер переключает один слайд
      this.currentIndex = (this.currentIndex + direction + this.totalSlides) % this.totalSlides;

      // Скрываем все слайды, показываем только один
      this.slides.forEach((slide, index) => {
        slide.style.display = index === this.currentIndex ? "block" : "none";
      });
    } else {
      // Для десктопа
      const slideWidth = this.slides[0].offsetWidth;
      if (direction === 1 && this.currentIndex + 2 < this.totalSlides) {
        // Если двигаем вправо, и есть ещё слайды
        this.currentIndex += direction;
      } else if (direction === -1 && this.currentIndex > 0) {
        // Если двигаем влево, и есть куда двигаться
        this.currentIndex += direction;
      }

      this.sliderWrapper.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
    }
  }

  // Инициализация слайдов для мобильных устройств
  initSlides() {
    if (this.isMobileOrTablet()) {
      this.slides.forEach((slide, index) => {
        slide.style.display = index === this.currentIndex ? "block" : "none";
      });
    } else {
      // Для десктопа показываем два слайда
      this.slides.forEach((slide, index) => {
        slide.style.display = index < 2 ? "block" : "none";
      });
    }
  }

  // Метод для инициализации слайдера
  init() {
    this.initSlides();

    // Добавляем обработчики для стрелок
    this.leftArrow.addEventListener("click", () => this.moveSlider(-1));
    this.rightArrow.addEventListener("click", () => this.moveSlider(1));

    // Обработчик изменения размера окна
    window.addEventListener("resize", () => {
      this.initSlides();
      const slideWidth = this.slides[0].offsetWidth;
      this.sliderWrapper.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
    });
  }
}

export default Slider;
