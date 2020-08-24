export class Control {
  constructor(game, player) {
    this.game = game
    this.player = player
    this.keys_ = new Map();
  }
  init() {
    window.addEventListener("keydown", event => {
      switch (event.code) {
        case 'ArrowRight':
          this.player.speedX += 1;
          break;
        case 'ArrowLeft':
          this.player.speedX -= 1;
          break;
        case 'Space': 
          // this.player.speedY
          this.player.speedY = 5
          this.player.speedY = -5
        default:
          break;
      }
    });
    window.addEventListener("keyup", event => {
      const { code } = event
      if (code === 'ArrowRight' || code === 'ArrowLeft' || code === 'Space') {
        this.clearmove()
      }
    })
  }
  clearmove() {
    this.player.speedX = 0; 
    this.player.speedY = 0; 
  }
}

export default Control;
