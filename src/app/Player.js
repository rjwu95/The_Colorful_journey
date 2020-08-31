import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH, MAX_SPEED, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player'
import { BLOCK_SIZE, MAP_WIDTH, TILE_MAP_WIDTH, BOX_SIZE } from '../constant/map';
import {scaledMap} from '../utils/utils';

let colIdx = 0;
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

    const scaleMap = scaledMap(map);

    scaleMap.forEach((el, idx) => {
      // x 축이 충돌 나는지 검사
      if (this.x + PLAYER_WIDTH + this.speedX > el.x && this.x + this.speedX < el.x + el.w) {
        if (el.y < this.y + this.speedY + PLAYER_HEIGHT && this.y + this.speedY < el.y + el.h) {
          this.stop()
        }
        if (el.y < this.y + this.speedY && this.y + this.speedY + PLAYER_HEIGHT < el.y + el.h) {
          this.speedX = 0
        }
      }
    });

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
