import {scaledMap} from '../utils/utils';
import {TILE_MAP_WIDTH, MAP_HEIGHT} from '../constant/map';
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player';

// The map tile buffer canvas' context
const mapBuffer = document.createElement('canvas').getContext('2d');

let xCollision = Array(5).fill(true);

class GameMap {
  constructor(context) {
    this.context = context;
    mapBuffer.canvas.width = TILE_MAP_WIDTH;
    mapBuffer.canvas.height = MAP_HEIGHT;
  }

  load(map) {
      this.scaledMapData = scaledMap(map);
      mapBuffer.clearRect(0, 0, TILE_MAP_WIDTH, MAP_HEIGHT)
      this.scaledMapData.forEach(({x, y, w, h}) => {
      mapBuffer.fillRect(x, y, w, h);
    });
  }

  update(player) {
    this.scaledMapData.forEach((el, idx) => {
      const{x, y, w, h} = el;

      // left collision
      if (player.x < x  && x < player.x + PLAYER_WIDTH
        && y < player.y + PLAYER_HEIGHT
        && y + h > player.y
        && xCollision[idx]) {
          console.log('왼쪽')
        
        player.x = x - PLAYER_WIDTH;
      }
  
      // right collision
      else if (player.x + PLAYER_WIDTH > x + w && x + w > player.x
        && y < player.y + PLAYER_HEIGHT
        && y + h > player.y
        && xCollision[idx]) {
        console.log('오른쪽')
        player.x = x + w
      }

      // top collision
      else if (x < player.x + PLAYER_WIDTH
          && x + w > player.x
        && player.y < y && y < player.y + PLAYER_HEIGHT) {
          // console.log(idx, '위')
        xCollision[idx] = false;
        player.y = y - PLAYER_HEIGHT;
        player.jumping = false;
      }

      // bottom collision
      else if (x < player.x + PLAYER_WIDTH
        && x + w > player.x
        && y + h > player.y
        && player.y + PLAYER_HEIGHT > y + h) {
          console.log(idx, '아래')
          xCollision[idx] = false;
          player.y = y + h;
      }
      else {
        xCollision[idx] = true;
      }
    });
  }

  render(cx) {
    this.context.drawImage(mapBuffer.canvas, -cx, 0);
  }
}

export default GameMap;