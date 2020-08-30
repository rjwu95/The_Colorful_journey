import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player';
import {MAP_HEIGHT} from '../constant/map';

class Player {
  constructor(control, ctx, x, y) {
    this.ctx = ctx
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.jumping = false
    this.control = control
  }
  render(cx) {
    this.ctx.save();
    this.ctx.fillStyle = PLAYER_COLOR;
    this.ctx.fillRect(this.x - cx, this.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    this.ctx.restore();
  }
  update() {
    const {control} = this;
    if (control.jump && this.jumping == false) {
      this.speedY -= JUMP_ACCELERATION;
      this.jumping = true;
    }
    if (control.left) {
      this.speedX -= HORIZONTAL_ACCELERATION;
    }
    if (control.right) {
      this.speedX += HORIZONTAL_ACCELERATION;
    }
    this.speedY += GRAVITY;
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedX *= FRICTION_RATIO;
    this.speedY *= FRICTION_RATIO;
  
    if (this.y > MAP_HEIGHT - PLAYER_HEIGHT) {
      this.jumping = false;
      this.y = MAP_HEIGHT - PLAYER_HEIGHT;
      this.speedY = 0;
    }
  }
}

export default Player;
