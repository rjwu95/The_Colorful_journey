import GameMap from './GameMap';
import Player from "./Player";
import Control from "./Control";
import Camera from "./Camera"
import Item from './Item';
import Box from './Box';
import {MAP_WIDTH, MAP_HEIGHT, BLOCK_SIZE, GAME_STATE} from '../constant/map';
import {level} from '../constant/level';
import Obstacle from './Obstacle';
import Portal from './Portal';

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
    const toStringedPoint = localStorage.getItem('savePoint')
    const currentSavePoint = toStringedPoint && JSON.parse(toStringedPoint) || {x: 20, y: 0}
    this.player = new Player(currentSavePoint.x, currentSavePoint.y);
    this.control = new Control()
    if (this.state === GAME_STATE.GAME_READY) {
      this.load(this.stageNum);
      this.state = GAME_STATE.GAME_PLAYING;
    }
  }

  load(stageNum) {
    const {map, control, context} = this;
    this.stage = level[stageNum];

    map.load(this.stage.map);
    control.init();

    this.player = new Player(0, 0);

    this.portal = new Portal(this.stage.portal, this.context, this.player);
  
    this.items = this.stage.items.map(({x, y, color}) => {
      const item =  new Item(x * BLOCK_SIZE, y * BLOCK_SIZE, color, context, this.player);
      return item;
    });

    this.boxes = this.stage.boxes.map(({x, y, color}) => {
      const box =  new Box(x * BLOCK_SIZE, y * BLOCK_SIZE, color, context, this.player);
      return box;
    });
    this.obstacles = this.stage.obstacles.map(({x, y, color}) => {
      const obstacle =  new Obstacle(x * BLOCK_SIZE, y * BLOCK_SIZE, color, context, this.player);
      return obstacle;
    });
  }

  update() {
    const {player, camera, control, stage, items, boxes, map, obstacles, portal} = this;
    player.move(control);
    player.update(stage.map);
    camera.update(player.x, player.y);
    portal.update();
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
    
    obstacles.forEach(obstacle => {
      obstacle.update(colorObj, control)
    });

    map.update(player)

    // when player reach the portal
    if (this.portal.reach) {
      this.state = GAME_STATE.GAME_CLEAR;
      this.stageNum += 1;
      hasBackgroundColor = false;
    }
  }

  render() {
    const {state, context, map, player, camera, items, boxes, obstacles, portal} = this;

    context.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
    if(hasBackgroundColor) {
      context.fillStyle = `rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b})`;
      context.fillRect(0, 0, MAP_WIDTH, MAP_HEIGHT)
    }

    if (state === GAME_STATE.GAME_READY) {
      // Todo: renderReady
    } else if (state === GAME_STATE.GAME_PLAYING) {
      this.update();
      map.render(camera.cx, camera.cy);
      items.forEach(item => {
        item.render(camera.cx,camera.cy)
      });
      boxes.forEach(box => {
        box.render(camera.cx, camera.cy)
      });
      obstacles.forEach(obstacle => {
        obstacle.render(camera.cx, camera.cy)
      });
      player.render(camera.cx,  camera.cy, context);
      portal.render(camera.cx,  camera.cy)
    } else if (state === GAME_STATE.GAME_CLEAR) {
      colorObj.r = 0;
      colorObj.g = 0;
      colorObj.b = 0;
      this.load(this.stageNum);
      this.state = GAME_STATE.GAME_PLAYING
    }

  }

  clearLevel() {
    this.saveNewPoint({x: 0, y: 0})
  }
}

export default Game;
