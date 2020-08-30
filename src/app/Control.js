export class Control {
  constructor(player) {
    this.player = player
    this.left = false
    this.right = false
    this.jump = false
  }
  init() {
    window.addEventListener("keydown", event => this.keyListener(event));
    window.addEventListener("keyup", event => this.keyListener(event))
  }
  clearmove() {
    this.player.speedX = 0; 
    this.player.speedY = 0; 
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
