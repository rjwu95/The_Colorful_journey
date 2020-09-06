import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH, MAX_SPEED, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player'
import { level } from '../constant/level';
import { TILE_MAP_WIDTH } from '../constant/map';
import {scaledMap} from '../utils/utils';

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

  die(stageNum) {
    const toStringedPoint = localStorage.getItem('savePoint')
    const currentSavePoint = toStringedPoint && JSON.parse(toStringedPoint)
    for (const savePoint of level[stageNum || 0].savePoints) { // TOBE: remove || 0 that is preventing error
      if (
        ((currentSavePoint && savePoint.x > currentSavePoint.x) || (!currentSavePoint))
        && this.x > savePoint.x) {
        this.saveNewPoint(savePoint);
      }
    }
    this.revive()
  }

  saveNewPoint(savePoint) {
    localStorage.setItem('savePoint', JSON.stringify(savePoint))
  }

  revive() {
    const toStringedPoint = localStorage.getItem('savePoint')
    const currentSavePoint = toStringedPoint && JSON.parse(toStringedPoint)
    if (currentSavePoint) {
      this.x = currentSavePoint.x
      this.y = currentSavePoint.y
    } else {
      this.x = 0
      this.y = 0
    }
  }
  
}

export default Player;
