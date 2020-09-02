import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH, MAX_SPEED, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player'
import { TILE_MAP_WIDTH } from '../constant/map';
import {scaledMap} from '../utils/utils';

let xCollision = false;
class Player {
  constructor(x, y) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.jumping = false
  }

  move(control) {
    if (control.jump && this.jumping === false) {
      this.speedY -= JUMP_ACCELERATION;
      this.jumping = true;
    }
    if (control.left) {
      this.speedX -= HORIZONTAL_ACCELERATION;
    }
    if (control.right) {
      this.speedX += HORIZONTAL_ACCELERATION;
    }
  }

  update(map) {

    // if player go out the map
    if (this.x < 0) {
      this.x = 0;
    }
    
    if (this.x + PLAYER_WIDTH> TILE_MAP_WIDTH) {
      this.x = TILE_MAP_WIDTH - PLAYER_WIDTH;
    }

    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY += GRAVITY; // gravity
    this.speedX *= FRICTION_RATIO; // friction
    this.speedY *= FRICTION_RATIO; // friction
  }

  stop() {
    this.jumping = false;
    this.speedY = 0;
  }

  render(cx, ctx) {
    const {x, y} = this;
    ctx.save();
    ctx.fillStyle = PLAYER_COLOR;
    ctx.fillRect(x - cx, y, PLAYER_WIDTH, PLAYER_HEIGHT);
    ctx.restore();
  }
}

export default Player;
