import { BOX_WIDTH, BOX_HEIGHT } from "../constant/map";
import { GRAVITY, FRICTION_RATIO } from '../constant/player'
import Item from "./Item";

class Box extends Item{
  constructor(x, y, color, ctx, player) {
    super(x, y, color, ctx, player);
    this.speedY = 0;
  }

  update() {
    this.speedY += GRAVITY;
    this.speedY *= FRICTION_RATIO;

    this.y += this.speedY;
  }

  render(cx, cy) {
    const {ctx, x, y, color} = this;

    if (this.show) {
      ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
      ctx.fillRect(x - cx, y - cy, BOX_WIDTH, BOX_HEIGHT);
    }
  }
}

export default Box;