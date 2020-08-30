import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_WIDTH } from '../constant/player'

class Player {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.jumping = false
  }

  render(cx) {
    this.ctx.save();
    this.ctx.fillStyle = PLAYER_COLOR;
    this.ctx.fillRect(this.x - cx, this.y, PLAYER_WIDTH, PLAYER_HEIGHT);
    this.ctx.restore();
  }
}

export default Player;
