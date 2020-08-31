import { BLOCK_SIZE } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import Item from "./Item";

class Box extends Item {
  constructor(x, y, color, ctx, player, control) {
    super(x, y, color, ctx, player);
    this.control = control
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
      ) {
        if (true) { // when hold state is true
          if(this.control.left) this.x = this.player.x - BLOCK_SIZE * 6
          else if (this.control.right) this.x = this.player.x + PLAYER_WIDTH 
          player.speedX = 0;
        }
      }

    if (this.show) {
      ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
      ctx.fillRect(x - cx, y, BLOCK_SIZE * 6, BLOCK_SIZE * 6);
    } else {
      
    }
  }
}

export default Box;
