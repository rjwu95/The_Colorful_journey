import { BOX_SIZE } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import Item from "./Item";

class Obstacle extends Item{
  constructor(x, y, color, ctx, player) {
    super(x, y, color, ctx, player);
  }

  update() {
    const {x, y, player} = this;
    // collision
    if (x < player.x + PLAYER_WIDTH
      && x + BOX_SIZE > player.x
      && y < player.y + PLAYER_HEIGHT
      && y + BOX_SIZE > player.y) {
        player.die()
      }
  }

  render(cx) {
    const {ctx, x, y, color} = this;

    ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
    ctx.fillRect(x - cx, y, BOX_SIZE, BOX_SIZE);
  }
}

export default Obstacle;
