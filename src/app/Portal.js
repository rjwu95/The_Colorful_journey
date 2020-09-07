import { BLOCK_WIDTH } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import Item from "./Item";

class Portal extends Item{
  constructor(info, ctx, player) {
    const{x, y, color} = info;
    super(x * BLOCK_WIDTH, y * BLOCK_WIDTH, color, ctx, player);
    this.reach = false;
  }

  update() {
    const {x, y, player} = this;
    // collision
    if (x  < player.x + player.speedX + PLAYER_WIDTH
      && x + BLOCK_WIDTH * 2 > player.x + player.speedX
      && y < player.y + PLAYER_HEIGHT + player.speedY
      && y + BLOCK_WIDTH * 2 > player.y + player.speedY) {
        this.reach = true;
      }
  }

  render(cx, cy) {
    const {ctx, x, y, color} = this;

    if (this.show) {
      ctx.fillStyle = color;
      ctx.fillRect(x - cx, y - cy, BLOCK_WIDTH * 2, BLOCK_WIDTH * 2);
    }
  }
}

export default Portal;
