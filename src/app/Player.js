import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player'
import { jumpSound, dieSound } from '../constant/sound';
import { MAP_WIDTH, BLOCK_WIDTH } from '../constant/map';

let TILE_MAP_WIDTH;

class Player {
  constructor(x, y, buffer) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x * BLOCK_WIDTH;
    this.y = y * BLOCK_WIDTH;
    this.jumping = false
    this.alive = true;
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

  update() {
    // if player go out the map
    if (this.x < 0) {
      this.x = 0;
      this.speedX = 0;
    }
    
    if (this.x + PLAYER_WIDTH> TILE_MAP_WIDTH) {
      this.x = TILE_MAP_WIDTH - PLAYER_WIDTH;
      this.speedX = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.speedY = 0;
    }

    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY += GRAVITY;
    this.speedX *= FRICTION_RATIO;
    this.speedY *= FRICTION_RATIO;
  }

  stop() {
    this.jumping = false;
    this.speedY = 0;
  }

  render(cx, cy, ctx) {
    const {x, y} = this;
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.fillRect(x - cx, y - cy, PLAYER_WIDTH, PLAYER_HEIGHT * 0.3);
    ctx.fillRect(x - cx, y - cy + PLAYER_HEIGHT * 0.4, PLAYER_WIDTH, PLAYER_HEIGHT * 0.6);
    ctx.fillRect(x - cx, y - cy + PLAYER_HEIGHT * 0.4, PLAYER_WIDTH, PLAYER_HEIGHT * 0.6);
    ctx.fillRect(x - cx, y - cy + PLAYER_HEIGHT * 0.4, PLAYER_WIDTH, PLAYER_HEIGHT * 0.6);

    ctx.fillStyle = 'white'
    ctx.beginPath();
    ctx.ellipse(x - cx + PLAYER_WIDTH / 3, y - cy + PLAYER_HEIGHT * 0.1, PLAYER_WIDTH * 0.05, PLAYER_HEIGHT * 0.1, 0, 0, 2 * Math.PI);
    ctx.ellipse(x - cx + PLAYER_WIDTH / 3 * 2, y - cy + PLAYER_HEIGHT * 0.1, PLAYER_WIDTH * 0.05, PLAYER_HEIGHT * 0.1, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.restore();
  }

  revive(position) {
    this.x = position.x
    this.y = position.y
    this.alive = true;
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
