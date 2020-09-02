import { BOX_SIZE } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import Item from "./Item";

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
    // collision
    if (x < player.x + PLAYER_WIDTH
      && x + BOX_SIZE > player.x
      && y < player.y + PLAYER_HEIGHT
      && y + BOX_SIZE > player.y
      && (color !== backgroundColor && !this.checkInit(backgroundColor))) {
        if (true) { // TOBE: when hold state is true
          if(control.left) this.x = player.x - BOX_SIZE
          else if (control.right) this.x = player.x + PLAYER_WIDTH 
          player.speedX = 0;
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
