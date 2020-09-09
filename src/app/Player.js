import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player'
import { level } from '../constant/level';
import { jumpSound, dieSound } from '../constant/sound';
import { MAP_WIDTH } from '../constant/map';

let TILE_MAP_WIDTH;

class Player {
  constructor(x, y, buffer) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.jumping = false
    TILE_MAP_WIDTH = MAP_WIDTH * buffer.width;
  }

  move(control) {
    if (control.jump && this.jumping === false) {
      const soundURL = jsfxr(jumpSound); 
      const player = new Audio();
      player.src = soundURL;
      player.play();
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
      this.speedX = 0;
    }
    
    if (this.x + PLAYER_WIDTH> TILE_MAP_WIDTH) {
      this.x = TILE_MAP_WIDTH - PLAYER_WIDTH;
      this.speedX = 0;
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

  render(cx, cy, ctx) {
    const {x, y} = this;
    ctx.save();
    ctx.fillStyle = PLAYER_COLOR;
    ctx.fillRect(x - cx, y - cy, PLAYER_WIDTH, PLAYER_HEIGHT);
    ctx.restore();
  }
  revive(position) {
    this.x = position.x
    this.y = position.y
  }
  die(position) {
    const soundURL = jsfxr(dieSound); 
    const player = new Audio();
    player.src = soundURL;
    player.play();
    this.revive(position)
  }
}

export default Player;
