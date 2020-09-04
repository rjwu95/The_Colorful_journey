import { BLOCK_SIZE } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import Item from "./Item";

class Portal extends Item{
  constructor(info, ctx, player) {
    const{x, y, color} = info;
    super(x * BLOCK_SIZE, y * BLOCK_SIZE, color, ctx, player);
    this.reach = false;
  }

  update() {
    const {x, y, player} = this;
    // collision
    if (x  < player.x + player.speedX + PLAYER_WIDTH
      && x + BLOCK_SIZE * 2 > player.x + player.speedX
      && y < player.y + PLAYER_HEIGHT + player.speedY
      && y + BLOCK_SIZE * 2 > player.y + player.speedY) {
        this.reach = true;
      }
  }

  render(cx) {
    const {ctx, x, y, color} = this;

    if (this.show) {
      ctx.fillStyle = color;
      ctx.fillRect(x - cx, y, BLOCK_SIZE * 2, BLOCK_SIZE * 2);
    }
  }
}

export default Portal;
