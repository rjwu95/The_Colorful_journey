import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH } from '../constant'

class Player {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
  }
  renderPlayer() {
    this.ctx.save()
    this.ctx.fillStyle = PLAYER_COLOR;
    this.ctx.fillRect(this.x, this.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    this.ctx.restore()
  }
  newPos() {
    this.x += this.speedX
    this.y += this.speedY
  }
}

export default Player;
