import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import {OBSTACLE, OBSTACLE_INTERVAL, SIDE} from '../constant/obstacle';
import Item from "./Item";

class Obstacle extends Item{
  constructor(x, y, color, ctx, player) {
    super(x, y, color, ctx, player);
  }

  update() {
    const {x, y, player} = this;
    // collision
    if (x - SIDE < player.x + PLAYER_WIDTH
      && x + SIDE + OBSTACLE_INTERVAL * (OBSTACLE - 1) > player.x
      && y < player.y + PLAYER_HEIGHT
      && y + OBSTACLE_INTERVAL > player.y) {
        player.die();
      }
  }

  render(cx, cy) {
    const {ctx, x, y, color} = this;

    ctx.beginPath();
    ctx.fillStyle = 'black';

    for(let i=0; i< OBSTACLE; i++) {
      ctx.moveTo(x - cx + OBSTACLE_INTERVAL * i, y - cy);
      ctx.lineTo(x - cx - SIDE + OBSTACLE_INTERVAL * i, y - cy + OBSTACLE_INTERVAL);
      ctx.lineTo(x - cx + SIDE + OBSTACLE_INTERVAL * i, y - cy + OBSTACLE_INTERVAL);
      ctx.fill();
    }
  }
}

export default Obstacle;
