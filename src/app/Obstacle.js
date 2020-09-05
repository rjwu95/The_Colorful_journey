import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import Item from "./Item";

const obstacle = 4;
const interval = 200;
const side = 100;

class Obstacle extends Item{
  constructor(x, y, color, ctx, player) {
    super(x, y, color, ctx, player);
  }

  update() {
    const {x, y, player} = this;
    // collision
    if (x - side < player.x + PLAYER_WIDTH
      && x + side + interval * (obstacle - 1) > player.x
      && y < player.y + PLAYER_HEIGHT
      && y + interval > player.y) {
        player.die();
      }
  }

  render(cx) {
    const {ctx, x, y, color} = this;

    ctx.beginPath();
    ctx.fillStyle = 'black';

    for(let i=0; i< obstacle; i++) {
      ctx.moveTo(x - cx + interval * i, y);
      ctx.lineTo(x - cx - side + interval * i, y + interval);
      ctx.lineTo(x - cx + side + interval * i, y + interval);
      ctx.fill();
    }
  }
}

export default Obstacle;
