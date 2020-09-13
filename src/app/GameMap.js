import {scaledMap, makeRgbColor} from '../utils/utils';
import {MAP_WIDTH} from '../constant/map';
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../constant/player';
import { BOX_WIDTH, BOX_HEIGHT } from "../constant/map";
import {checkInitailBackground} from '../utils/utils'

// The map tile buffer canvas' context
const mapBuffer = document.createElement('canvas').getContext('2d');

// TODO: fix the number of xCollision according to level blocks
let xCollision = Array(10).fill(true);
let xBoxCollision = true;

class GameMap {
  constructor(context) {
    this.context = context;
  }
  
  load(buffer, map) {
      const TILE_MAP_WIDTH = MAP_WIDTH * buffer.width;
      const TILE_MAP_HEIGHT = MAP_WIDTH * buffer.height;

      mapBuffer.canvas.width = TILE_MAP_WIDTH;
      mapBuffer.canvas.height = TILE_MAP_HEIGHT;
      this.scaledMapData = scaledMap(map);
      mapBuffer.clearRect(0, 0, TILE_MAP_WIDTH, TILE_MAP_HEIGHT)
      this.scaledMapData.forEach(({x, y, w, h, color = 'black'}) => {
      mapBuffer.fillStyle = color;
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

  update(player, backgroundColor) {
    const backColor = makeRgbColor(backgroundColor);
    this.scaledMapData.forEach((el, idx) => {
      const{x, y, w, h, color} = el;
      if (color !== backColor) {
        
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
      }
    });
  }

  updateBox(boxes, colorObj) {
    boxes.forEach(box => {
      let col = false;
      let p = box.player;

      this.scaledMapData.forEach(({x, y, w, h, color = 'black'}) => {
        if(box.y + BOX_HEIGHT > y && box.y < y && box.x+BOX_WIDTH > x && x+w > box.x) {
            box.y = y-BOX_HEIGHT;
          }
        });

    if (box.color !== colorObj && !checkInitailBackground(colorObj)) {
      // left collision
      if (p.x < box.x  && box.x < p.x + PLAYER_WIDTH
        && box.y < p.y + PLAYER_HEIGHT
        && box.y + BOX_HEIGHT > p.y
        && xBoxCollision) {
          this.scaledMapData.forEach(({x, y, w, h, color = 'black'}) => {
            if(box.x < x && x < box.x + BOX_WIDTH 
              && y < box.y + BOX_HEIGHT && y + h > box.y)
              col = true;
          });
          
          if(!col)
          box.x = p.x + PLAYER_WIDTH;
          else 
          p.x = box.x - PLAYER_WIDTH - 1;
      }
  
      // right collision
      else if (p.x + PLAYER_WIDTH > box.x + BOX_WIDTH && box.x + BOX_WIDTH > p.x
        && box.y < p.y + PLAYER_HEIGHT
        && box.y + BOX_HEIGHT > p.y
        && xBoxCollision) {
          this.scaledMapData.forEach(({x, y, w, h, color = 'black'}) => {
            if(box.x > x && x > box.x - BOX_WIDTH 
              && y < box.y + BOX_HEIGHT && y + h > box.y){
                col = true;
              }
          });
          
          if(!col)
          box.x = p.x - BOX_WIDTH;
          else 
          p.x = box.x + BOX_WIDTH + 1;
      }

      // top collision
      else if (box.x < p.x + PLAYER_WIDTH
          && box.x + BOX_WIDTH > p.x
        && p.y < box.y && box.y < p.y + PLAYER_HEIGHT) {
          xBoxCollision = false;
        p.y = box.y - PLAYER_HEIGHT;
        p.jumping = false;
      }

      // bottom collision
      else if (box.x < p.x + PLAYER_WIDTH
        && box.x + BOX_WIDTH > p.x
        && box.y + BOX_HEIGHT > p.y
        && p.y + PLAYER_HEIGHT > box.y + BOX_HEIGHT) {
          xBoxCollision = false;
          p.y = box.y + BOX_HEIGHT;
      }
      else {
        xBoxCollision = true;
      }
    }
  });
 
  }

  render(cx, cy) {
    this.context.drawImage(mapBuffer.canvas, -cx, -cy);
  }
}

export default GameMap;