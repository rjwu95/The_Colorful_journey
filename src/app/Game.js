import GameMap from './GameMap';
import Player from "./Player";
import Control from "./Control";
import Camera from "./Camera"
import Item from './Item';
import Block from './Block';
import {MAP_WIDTH, MAP_HEIGHT, BLOCK_SIZE, GAME_STATE} from '../constant/map';
import {level} from '../constant/level';
import { PLAYER_HEIGHT, FRICTION_RATIO, HORIZONTAL_ACCELERATION, GRAVITY, JUMP_ACCELERATION } from '../constant/player';

const colorObj = {r: 0, g: 0, b: 0};
let hasBackgroundColor = false;

class Game {
  init() {
    // main canvas
    this.canvas = document.getElementById('canvas');
    this.canvas.width = MAP_WIDTH;
    this.canvas.height = MAP_HEIGHT;
    this.context = this.canvas.getContext('2d');

    this.state = GAME_STATE.GAME_READY;
    this.stageNum = 0;

    this.camera = new Camera();
    this.map = new GameMap(this.context);
    this.player = new Player(this.context, 0, 24 * BLOCK_SIZE);
    this.control = new Control(this.player)

    if (this.state === GAME_STATE.GAME_READY) {
      this.load(this.stageNum);
      this.state = GAME_STATE.GAME_PLAYING;
    }
  }

  load(stageNum) {
    const {map, control, context, player} = this;
    const stage = level[stageNum];

    map.load(stage.map);
    control.init();

    this.items = stage.items.map(({x, y, color}) => {
      const item =  new Item(x * BLOCK_SIZE, y * BLOCK_SIZE, color, context, player);
      return item;
    });

    this.blocks = stage.blocks.map(({x, y, color}) => {
      const block =  new Block(x * BLOCK_SIZE, y * BLOCK_SIZE, color, context, player);
      return block;
    });
  }

  update() {
    const {player, camera, items} = this;
    // player.update();
    camera.update(player.x);

    items.forEach(item => {
      if (!item.show && item.changeBackground) {
        hasBackgroundColor = true;
        colorObj.r += item.color.r;
        colorObj.g += item.color.g;
        colorObj.b += item.color.b;
        item.changeBackground = false;
      }
    })

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
  }

  render() {
    const {state, context, map, player, camera, items, blocks} = this;

    context.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
    if(hasBackgroundColor) {
      context.fillStyle = `rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b})`;
      context.fillRect(0,0,MAP_WIDTH, MAP_HEIGHT)
    }

    if (state === GAME_STATE.GAME_READY) {
      // Todo: renderReady
    } else {
      this.update();
      map.render(camera.cx);
      player.render(camera.cx);
      items.forEach(item => {
        item.render(camera.cx)
      });
      blocks.forEach(item => {
        item.render(camera.cx, colorObj)
      });
    }
  }
}

export default Game;
