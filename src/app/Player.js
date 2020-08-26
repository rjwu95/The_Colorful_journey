import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH, MAX_SPEED } from '../constant/player'

class Player {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
  }

  newPos() {
    this.x += MAX_SPEED < Math.abs(this.speedX) ? ((this.speedX >= 0 ? 1 : -1) * MAX_SPEED) : this.speedX
    this.y += this.speedY
  }

  render() {
    this.ctx.save();
    this.newPos();
    this.ctx.fillStyle = PLAYER_COLOR;
    this.ctx.fillRect(this.x, this.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    this.ctx.restore();
  }
}

export default Player;
