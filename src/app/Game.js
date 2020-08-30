import GameMap from './GameMap';
import Player from "./Player";
import Control from "./Control";
import Camera from "./Camera"
import Item from './Item';
import Block from './Block';
import {MAP_WIDTH, MAP_HEIGHT, BLOCK_SIZE, GAME_STATE} from '../constant/map';
import {level} from '../constant/level';

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
    this.player = new Player(0, 0);
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
    player.move(this.control);
    player.update();
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
      items.forEach(item => {
        item.render(camera.cx)
      });
      blocks.forEach(item => {
        item.render(camera.cx, colorObj)
      });
    }
    player.render(camera.cx, context);
  }
}

export default Game;
