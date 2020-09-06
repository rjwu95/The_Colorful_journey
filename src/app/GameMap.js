import {scaledMap} from '../utils/utils';
import {TILE_MAP_WIDTH, TILE_MAP_HEIGHT} from '../constant/map';
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player';

// The map tile buffer canvas' context
const mapBuffer = document.createElement('canvas').getContext('2d');

// TODO: fix the number of xCollision according to level blocks
let xCollision = Array(10).fill(true);

class GameMap {
  constructor(context) {
    this.context = context;
    mapBuffer.canvas.width = TILE_MAP_WIDTH;
    mapBuffer.canvas.height = TILE_MAP_HEIGHT;
  }

  load(map) {
      this.scaledMapData = scaledMap(map);
      mapBuffer.clearRect(0, 0, TILE_MAP_WIDTH, TILE_MAP_HEIGHT)
      this.scaledMapData.forEach(({x, y, w, h}) => {
      mapBuffer.fillRect(x, y, w, h);
    });
  }

  leftCollision(player, el) {
    const{x, y, w, h} = el;
    return (player.x < x
      && x < player.x + PLAYER_WIDTH
      && y < player.y + PLAYER_HEIGHT
      && y + h > player.y
      && player.speedX > 0);
  }

  rightCollision(player, el) {
    const{x, y, w, h} = el;
    return (player.x + PLAYER_WIDTH > x + w
      && x + w > player.x
      && y < player.y + PLAYER_HEIGHT
      && y + h > player.y
      && player.speedX < 0);
  }

  topCollision(player, el) {
    const{x, y, w, h} = el;
    return (x < player.x + PLAYER_WIDTH
      && x + w > player.x
      && player.y < y 
      && y < player.y + PLAYER_HEIGHT 
      && player.speedY > 0);
  }

  bottomCollision(player, el) {
    const{x, y, w, h} = el;
    return (x < player.x + PLAYER_WIDTH
      && x + w > player.x
      && y + h > player.y
      && player.y + PLAYER_HEIGHT > y + h
      && player.speedY < 0);
  }
  update(player) {
    this.scaledMapData.forEach((el, idx) => {
      const{x, y, w, h} = el;

        // left collision
        if (this.leftCollision(player, el)
          && xCollision[idx]) {
           if (this.topCollision(player, el)) {
             xCollision[idx] = false;
             player.y = y - PLAYER_HEIGHT;
           } else {
            player.x = x - PLAYER_WIDTH;
          }
        }
        
        // right collision
        else if (this.rightCollision(player, el)
          && xCollision[idx]) {
            if (this.topCollision(player, el)) {
              xCollision[idx] = false;
              player.y = y - PLAYER_HEIGHT;
              player.jumping = false;
            }else {
              player.x = x + w
            }
        }

        // top collision
        else if (this.topCollision(player, el)) {
          xCollision[idx] = false;
          player.y = y - PLAYER_HEIGHT;
          player.jumping = false;
        }

        // bottom collision
        else if (this.bottomCollision(player, el)) {
            xCollision[idx] = false;
            player.y = y + h;
        }

        else {
          xCollision[idx] = true;
        }
    });
  }

  render(cx, cy) {
    this.context.drawImage(mapBuffer.canvas, -cx, -cy);
  }
}

export default GameMap;