import { BOX_SIZE, BLOCK_SIZE } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import Item from "./Item";

let xCollision = true;
class Box extends Item{
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

  update(backgroundColor, control) {
    const {x, y, player, color} = this;

    if (color !== backgroundColor && !this.checkInit(backgroundColor)) {
      // left collision
      if (player.x < x  && x < player.x + PLAYER_WIDTH
        && y < player.y + PLAYER_HEIGHT
        && y + BOX_SIZE > player.y
        && xCollision) {
          this.x = player.x + PLAYER_WIDTH
      }
  
      // right collision
      else if (player.x + PLAYER_WIDTH > x + BOX_SIZE && x + BOX_SIZE > player.x
        && y < player.y + PLAYER_HEIGHT
        && y + BOX_SIZE > player.y
        && xCollision) {
          this.x = player.x - BOX_SIZE
      }

      // top collision
      else if (x < player.x + PLAYER_WIDTH
          && x + BOX_SIZE > player.x
        && player.y < y && y < player.y + PLAYER_HEIGHT) {
        xCollision = false;
        player.y = y - PLAYER_HEIGHT;
        player.jumping = false;
      }

      // bottom collision
      else if (x < player.x + PLAYER_WIDTH
        && x + BOX_SIZE > player.x
        && y + BOX_SIZE > player.y
        && player.y + PLAYER_HEIGHT > y + BOX_SIZE) {
          xCollision = false;
          player.y = y + BOX_SIZE;
      }
      else {
        xCollision = true;
      }
    }
  }

  render(cx) {
    const {ctx, x, y, color} = this;

    if (this.show) {
      ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
      ctx.fillRect(x - cx, y, BOX_SIZE, BOX_SIZE);
    }
  }
}

export default Box;
