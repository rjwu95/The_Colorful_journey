import { BLOCK_SIZE } from "../constant/map";
import { PLAYER_WIDTH } from '../constant/player'

class Item {
  constructor(x, y, color, ctx, player) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.color = color;
    this.player = player;
    this.show = true;
  }

  render(cx) {
    const {ctx, x, y, player} = this;
    
    // collision
    // Todo: To Add the y collision
    if (x - BLOCK_SIZE * 0.9 < player.x + PLAYER_WIDTH
      && x + BLOCK_SIZE * 0.9 > player.x) {
        this.show = false;
      }

      if (this.show) {
        ctx.beginPath();
        ctx.arc(x - cx, y, BLOCK_SIZE * 0.9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
      } else {
        
      }
  }
}

export default Item;
