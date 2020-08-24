import Player from "./Player";
import Control from "./Control";

class Game {
  init() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    this.player = new Player(this.context, 10, 120);
    this.updateGameArea()
    this.control = new Control(this.player)
    this.control.init()
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  updateGameArea() {
    this.clear();
    this.player.newPos();
    this.player.renderPlayer();
  }
}

export default Game;
