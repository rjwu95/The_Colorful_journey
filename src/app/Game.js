import Player from "./Player";
import Control from "./Control";
const PLAYER_WIDTH = 30
const PLAYER_HEIGHT = 30
const PLAYER_COLOR = "red"

class Game {
  init() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    this.player = new Player(10, 120);
    this.updateGameArea()
    this.control = new Control(this, this.player)
    this.control.init()
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  renderPlayer() {
    const ctx = this.context;
    ctx.save()
    ctx.fillStyle = PLAYER_COLOR;
    ctx.fillRect(this.player.x, this.player.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    ctx.restore()
  }
  updateGameArea() {
    this.clear();
    this.player.newPos();
    this.renderPlayer();
  }
}

export default Game;
