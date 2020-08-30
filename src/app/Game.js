import GameMap from './GameMap';
import Player from "./Player";
import Control from "./Control";
import Camera from "./Camera"
import Item from './Item';
import Block from './Block';
import {MAP_WIDTH, MAP_HEIGHT, BLOCK_SIZE} from '../constant/map';
import {level} from '../constant/level';
import { PLAYER_HEIGHT, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player';

const colorObj = {r: 0, g: 0, b: 0};
let hasBackgroundColor = false;

class Game {
  init() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = MAP_WIDTH;
    this.canvas.height = MAP_HEIGHT;
    this.context = this.canvas.getContext('2d');

    this.camera = new Camera();
    this.map = new GameMap(this.context);
    this.map.load(level.map);

    this.player = new Player(this.context, 0, 24 * BLOCK_SIZE);
    
    this.control = new Control(this.player)
    this.control.init();

    this.items = level.items.map(({x, y, color}) => {
      const item =  new Item(x * BLOCK_SIZE, y * BLOCK_SIZE, color, this.context, this.player);
      return item;
    });

    this.blocks = level.blocks.map(({x, y, color}) => {
      const block =  new Block(x * BLOCK_SIZE, y * BLOCK_SIZE, color, this.context, this.player);
      return block;
    });
  }

  updateGameArea() {
    const {context, map, player, camera, items, blocks} = this;
    
    context.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
  
    items.forEach(item => {
      if (!item.show && item.changeBackground) {
        hasBackgroundColor = true;
        colorObj.r += item.color.r;
        colorObj.g += item.color.g;
        colorObj.b += item.color.b;
        item.changeBackground = false;
      }
    })

    
    if(hasBackgroundColor) {
      context.fillStyle = `rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b})`;
      context.fillRect(0,0,MAP_WIDTH, MAP_HEIGHT)
    }

    camera.update(player.x);
    map.render(camera.cx);
    items.forEach(item => {
      item.render(camera.cx)
    });
    blocks.forEach(item => {
      item.render(camera.cx, colorObj)
    });
    
    player.render(camera.cx);
  }
  update() {
    if (this.control.jump && this.player.jumping == false) {
      this.player.speedY -= JUMP_ACCELERATION;
      this.player.jumping = true;
    }
    if (this.control.left) {
      this.player.speedX -= HORIZONTAL_ACCELERATION;
    }
    if (this.control.right) {
      this.player.speedX += HORIZONTAL_ACCELERATION;
    }
    this.player.speedY += GRAVITY;// gravity
    this.player.x += this.player.speedX;
    this.player.y += this.player.speedY;
    this.player.speedX *= FRICTION_RATIO;// friction
    this.player.speedY *= FRICTION_RATIO;// friction
  
    // if this.player is falling below floor line
    if (this.player.y > MAP_HEIGHT - 16 - PLAYER_HEIGHT) {
      this.player.jumping = false;
      this.player.y = MAP_HEIGHT - 16 - PLAYER_HEIGHT;
      this.player.speedY = 0;
    }
    this.updateGameArea();
  }
}

export default Game;
