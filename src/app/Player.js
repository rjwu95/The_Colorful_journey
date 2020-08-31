import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH, MAX_SPEED, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player'
import { BLOCK_SIZE, MAP_WIDTH } from '../constant/map';

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
    this.speedY += GRAVITY; // gravity
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedX *= FRICTION_RATIO; // friction
    this.speedY *= FRICTION_RATIO; // friction
  }

  update() {
    // if player is falling below floor line
    if (this.y > 26 * BLOCK_SIZE - PLAYER_HEIGHT) {
      this.stop(26 * BLOCK_SIZE - PLAYER_HEIGHT)
    }

    // if player go out the map
    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x + PLAYER_WIDTH> MAP_WIDTH * 2) {
      this.x = MAP_WIDTH * 2 - PLAYER_WIDTH;
    }
  }

  stop(dy) {
    this.jumping = false;
    this.y = dy;
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
