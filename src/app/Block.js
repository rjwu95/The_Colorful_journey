import { BLOCK_SIZE } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import Item from "./Item";

class Block extends Item{
  constructor(x, y, color, ctx, player) {
    super(x, y, color, ctx, player);
  }

  checkInit(backgroundColor) {
    return (
      backgroundColor.r === 0
      && backgroundColor.g === 0
      && backgroundColor.b === 0
    )
  }

  render(cx, backgroundColor) {
    const {ctx, x, y, player, color} = this;
    

    // collision
    if (x < player.x + PLAYER_WIDTH
      && x + BLOCK_SIZE * 6 > player.x
      && y < player.y + PLAYER_HEIGHT
      && y + BLOCK_SIZE * 6 > player.y
      && (color !== backgroundColor && !this.checkInit(backgroundColor))) {
        player.x = x + BLOCK_SIZE * 6
        player.speedX = 0;
      }

      if (this.show) {
        ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
        ctx.fillRect(x - cx, y, BLOCK_SIZE * 6, BLOCK_SIZE * 6);
      } else {
        
      }
  }
}

export default Block;
