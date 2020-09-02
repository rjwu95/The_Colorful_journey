import GameMap from './GameMap';
import Player from "./Player";
import Control from "./Control";
import Camera from "./Camera"
import Item from './Item';
import Box from './Box';
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
    this.player = new Player(20, 0);
    this.control = new Control()

    if (this.state === GAME_STATE.GAME_READY) {
      this.load(this.stageNum);
      this.state = GAME_STATE.GAME_PLAYING;
    }
  }

  load(stageNum) {
    const {map, control, context, player} = this;
    this.stage = level[stageNum];

    map.load(this.stage.map);
    control.init();

    this.items = this.stage.items.map(({x, y, color}) => {
      const item =  new Item(x * BLOCK_SIZE, y * BLOCK_SIZE, color, context, player);
      return item;
    });

    this.boxes = this.stage.boxes.map(({x, y, color}) => {
      const box =  new Box(x * BLOCK_SIZE, y * BLOCK_SIZE, color, context, player);
      return box;
    });
  }

  update() {
    const {player, camera, control, stage, items, boxes} = this;
    player.move(control);
    player.update(stage.map);
    camera.update(player.x);

    items.forEach(item => {
      item.update();

      if (!item.show && item.changeBackground) {
        hasBackgroundColor = true;
        colorObj.r += item.color.r;
        colorObj.g += item.color.g;
        colorObj.b += item.color.b;
        item.changeBackground = false;
      }
    })

    boxes.forEach(box => {
      box.update(colorObj, control)
    });
  }

  render() {
    const {state, context, map, player, camera, items, boxes} = this;

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
      boxes.forEach(box => {
        box.render(camera.cx)
      });
    }
    player.render(camera.cx, context);
  }
}

export default Game;
