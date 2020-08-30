import { BLOCK_SIZE } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'

class Item {
  constructor(x, y, color, ctx, player) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.color = color;
    this.player = player;
    this.show = true;
    this.changeBackground = true;
  }

  render(cx) {
    const {ctx, x, y, player, color} = this;
    
    // collision
    if (x - BLOCK_SIZE * 0.9 < player.x + PLAYER_WIDTH
      && x + BLOCK_SIZE * 0.9 > player.x
      && y - BLOCK_SIZE * 0.9 < player.y + PLAYER_HEIGHT
      && y + BLOCK_SIZE * 0.9 > player.y) {
        this.show = false;
      }

      if (this.show) {
        ctx.beginPath();
        ctx.arc(x - cx, y, BLOCK_SIZE * 0.9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
        ctx.fill();
      } else {
        
      }
  }
}

export default Item;
