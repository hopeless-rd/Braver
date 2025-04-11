class VideoOverlay {
  constructor(options = {}) {
    this.selectors = {
      triggerSelector: '[data-js-play-circle]',
      overlaySelector: '[data-js-video-overlay]',
      iframeSelector: '[data-js-video-frame]',
      closeSelector: '[data-js-video-close]',
      videoUrl: 'https://www.youtube.com/embed/FUKmyRLOlAA',
      ...options, 
    };

    this.trigger = document.querySelector(this.selectors.triggerSelector);
    this.overlay = document.querySelector(this.selectors.overlaySelector);
    this.iframe = document.querySelector(this.selectors.iframeSelector);
    this.closeBtn = document.querySelector(this.selectors.closeSelector);

    if (!this.trigger || !this.overlay || !this.iframe || !this.closeBtn) {
      console.warn('VideoOverlay: не найдены необходимые элементы');
      return;
    }
    this.bindEvents();
  }

  bindEvents() {
    this.trigger.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', (e) => {
      if (!e.target.closest('.video-content')) this.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }

  open() {
    this.overlay.classList.add('active');
    this.iframe.src = `${this.selectors.videoUrl}?autoplay=1`;
  }

  close() {
    this.overlay.classList.remove('active');
    this.iframe.src = '';
  }
}

export default VideoOverlay;
