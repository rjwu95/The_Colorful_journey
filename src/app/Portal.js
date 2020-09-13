import { BLOCK_WIDTH, POTAL_WIDTH, POTAL_HEIGHT, BLOCK_HEIGHT, ITEM_SIZE } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import Item from "./Item";

class Portal extends Item{
  constructor(info, ctx, player) {
    const{x, y, color} = info;
    super(x * BLOCK_WIDTH, y * BLOCK_HEIGHT, color, ctx, player);
    this.reach = false;
  }

  update() {
    const {x, y, player} = this;
    // collision
    if (x  < player.x + player.speedX + PLAYER_WIDTH
      && x + POTAL_WIDTH > player.x + player.speedX
      && y < player.y + PLAYER_HEIGHT + player.speedY
      && y + POTAL_HEIGHT > player.y + player.speedY) {
        this.reach = true;
      }
  }

  render(cx, cy) {
    const {ctx, x, y} = this;

    if (this.show) {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(x - cx + POTAL_WIDTH/2, y - cy, POTAL_WIDTH/2, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
      ctx.fillRect(x - cx, y - cy, POTAL_WIDTH, POTAL_HEIGHT);
    }
  }
}

export default Portal;
