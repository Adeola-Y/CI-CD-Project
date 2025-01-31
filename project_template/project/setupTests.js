beforeAll(() => {
  if (global.HTMLCanvasElement) {
    global.HTMLCanvasElement.prototype.getContext = () => ({
      fillRect: () => {},
      clearRect: () => {},
   
    });
  }
});
