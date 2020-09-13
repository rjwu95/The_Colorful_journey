export class Control {
  constructor() {
    this.left = false
    this.right = false
    this.jump = false
    this.tintEl = document.getElementsByTagName("t")[0];
    this.optionsEl = document.getElementById("o");
  }

  
  init(menu) {
    window.addEventListener("keydown", event => {
      if (event.code === 'Escape') {
        menu.isShow ? menu.hide() : menu.show()
      } else if(!menu.isShow) {
        this.keyListener(event)
      }
    });
    window.addEventListener("keyup", event => this.keyListener(event))
  }

  keyListener(event) {
    const keyState = (event.type == "keydown") ? true : false;

    switch(event.code) {
      case 'ArrowLeft':// left key
        this.left = keyState;
      break;
      case 'ArrowRight':// right key
        this.right = keyState;
      break;
      case 'Space':// up key
        this.jump = keyState;
      break;
    }
  }
}

export default Control;
