

beforeAll(() => {
  // mocking the canvas context (getContext) function
  global.HTMLCanvasElement.prototype.getContext = () => ({
    fillRect: () => {},
    clearRect: () => {},

  });
});
