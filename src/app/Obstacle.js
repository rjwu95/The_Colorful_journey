import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import {OBSTACLE, OBSTACLE_INTERVAL, SIDE} from '../constant/map';
import Item from "./Item";
import { makeRgbColor } from '../utils/utils';

class Obstacle extends Item{
  constructor(x, y, color, ctx, player) {
    super(x, y, color, ctx, player);
  }

  update(startPoint, backgroundColor) {
    const {x, y, player, color} = this;
    const backColor = makeRgbColor(backgroundColor);

    // collision
    if (x - SIDE < player.x + PLAYER_WIDTH
      && x + SIDE + OBSTACLE_INTERVAL * (OBSTACLE - 1) > player.x
      && y < player.y + PLAYER_HEIGHT
      && y + OBSTACLE_INTERVAL > player.y
      && color !== backColor) {
        player.die(startPoint);
      }
  }

  render(cx, cy) {
    const {ctx, x, y, color} = this;

    ctx.beginPath();
    ctx.fillStyle = color || 'black';

    for(let i=0; i< OBSTACLE; i++) {
      ctx.moveTo(x - cx + OBSTACLE_INTERVAL * i, y - cy);
      ctx.lineTo(x - cx + SIDE + OBSTACLE_INTERVAL * i, y - cy - OBSTACLE_INTERVAL)
      ctx.lineTo(x - cx + SIDE * 2 + OBSTACLE_INTERVAL * i, y - cy);
      ctx.fill();
    }
  }
}

export default Obstacle;
