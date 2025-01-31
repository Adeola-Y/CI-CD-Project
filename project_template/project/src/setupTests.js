

beforeAll(() => {
  // mocking canvas context (getContext) function
  global.HTMLCanvasElement.prototype.getContext = () => ({
    fillRect: () => {},
    clearRect: () => {},
   
  });
});
