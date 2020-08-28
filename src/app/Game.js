import GameMap from './GameMap';
import Player from "./Player";
import Control from "./Control";
import Camera from "./Camera"
import {MAP_WIDTH, MAP_HEIGHT} from '../constant/map';
import {level} from '../constant/level';
import { PLAYER_HEIGHT, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player';

class Game {
  init() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = MAP_WIDTH;
    this.canvas.height = MAP_HEIGHT;
    this.context = this.canvas.getContext('2d');

    this.camera = new Camera();
    this.map = new GameMap(this.context);
    this.map.load(level);

    this.player = new Player(this.context, 0, 0);
    
    this.control = new Control(this.player)
    this.control.init();
  }

  updateGameArea() {
    const {context, map, player, camera} = this;
    
    context.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
    camera.update(player.x);
    map.render(camera.cx);
    player.render(camera.cx);
  }
  update() {
    if (this.control.jump && this.player.jumping == false) {
      this.player.speedY -= JUMP_ACCELERATION;
      this.player.jumping = true;
    }
    if (this.control.left) {
      this.player.speedX -= HORIZONTAL_ACCELERATION;
    }
    if (this.control.right) {
      this.player.speedX += HORIZONTAL_ACCELERATION;
    }
    this.player.speedY += GRAVITY;// gravity
    this.player.x += this.player.speedX;
    this.player.y += this.player.speedY;
    this.player.speedX *= FRICTION_RATIO;// friction
    this.player.speedY *= FRICTION_RATIO;// friction
  
    // if this.player is falling below floor line
    if (this.player.y > MAP_HEIGHT - 16 - PLAYER_HEIGHT) {
      this.player.jumping = false;
      this.player.y = MAP_HEIGHT - 16 - PLAYER_HEIGHT;
      this.player.speedY = 0;
    }
    this.updateGameArea();
  }
}

export default Game;
