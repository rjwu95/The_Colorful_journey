import { ITEM_SIZE, BACKGROUND_COLOR } from "../constant/map";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player'
import { itemSound } from "../constant/sound";
import { makeRgbColor } from '../utils/utils';

class Item {
  constructor(x, y, color, ctx, player) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.color = color;
    this.player = player;
    this.show = true;
    this.backgroundInitialize = false;
    this.changeBackground = true;
  }

  update() {
    const {x, y, player, color} = this;
    // collision
    if (x - ITEM_SIZE < player.x + PLAYER_WIDTH
      && x + ITEM_SIZE > player.x
      && y - ITEM_SIZE < player.y + PLAYER_HEIGHT
      && y + ITEM_SIZE > player.y) {
        if(this.show) {
          const soundURL = jsfxr(itemSound); 
          const player = new Audio();
          player.src = soundURL;
          player.play();
        }
        this.show = false;
        if(JSON.stringify(color) === JSON.stringify(BACKGROUND_COLOR)) {
          this.backgroundInitialize = true;
        }
      }
  }

  render(cx, cy) {
    const {ctx, x, y, color} = this;
      if (this.show) {
        const itemColor = makeRgbColor(color)
        if (JSON.stringify(color) !== JSON.stringify(BACKGROUND_COLOR) ) {
          ctx.strokeStyle = itemColor;
        }
        ctx.beginPath();
        ctx.arc(x - cx, y - cy, ITEM_SIZE, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = itemColor;
        ctx.fill();
      } else {
        
      }
  }
}

export default Item;
