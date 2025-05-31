// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.IntersectionObserver = IntersectionObserver;
