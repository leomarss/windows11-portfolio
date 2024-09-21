let storedProjectContentX = localStorage.getItem("storedProjectContentX");
let storedProjectContentY = localStorage.getItem("storedProjectContentY");

export const draggingVariables = {
  isMouseDown: false,
  initialMouseX: 0,
  initialMouseY: 0,
  initialProjectContentX: 0,
  initialProjectContentY: 0,
  projectContentX: storedProjectContentX ? storedProjectContentX : 0,
  projectContentY: storedProjectContentY ? storedProjectContentY : 0,
};

export const handleMouseDown = function (event) {
  this.isMouseDown = true;
  this.store.isDragging = true;
  this.initialMouseX = event.clientX;
  this.initialMouseY = event.clientY;
  this.initialProjectContentX = this.projectContentX;
  this.initialProjectContentY = this.projectContentY;
  window.addEventListener("mousemove", this.handleMouseMove.bind(this));
  window.addEventListener("mouseup", this.handleMouseUp.bind(this));
};

export const handleMouseMove = function (event) {
  if (this.isMouseDown) {
    const deltaX = event.clientX - this.initialMouseX;
    const deltaY = event.clientY - this.initialMouseY;
    this.projectContentX = this.initialProjectContentX + deltaX;
    this.projectContentY = this.initialProjectContentY + deltaY;
    localStorage.setItem("storedProjectContentX", projectContentX);
    localStorage.setItem("storedProjectContentY", projectContentY);
  }
};

export const handleMouseUp = function () {
  this.isMouseDown = false;
  this.store.isDragging = false;
  window.removeEventListener("mousemove", this.handleMouseMove.bind(this));
  window.removeEventListener("mouseup", this.handleMouseUp.bind(this));
};
