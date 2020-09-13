import { GAME_STATE } from "../constant/map";

export class Control {
  constructor(game) {
    this.left = false
    this.right = false
    this.jump = false
    this.tintEl = document.getElementsByTagName("t")[0];
    this.optionsEl = document.getElementById("o");
    this.game = game
  }

  
  init(menu) {
    window.addEventListener("keydown", event => {
      const isMenu = !menu.menuEl.classList.contains("r")
      const isInro = !menu.introEl.classList.contains("r")
      if (event.code === 'Escape') {
        if (!isInro && this.game.state !== GAME_STATE.GAME_CLEAR){
          isMenu ? menu.hide() : menu.show()
        }
      } else if(!isMenu && !isInro) {
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
