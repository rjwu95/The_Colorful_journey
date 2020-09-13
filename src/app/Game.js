import GameMap from './GameMap';
import Player from "./Player";
import Control from "./Control";
import Camera from "./Camera"
import Item from './Item';
import Box from './Box';
import {MAP_WIDTH, MAP_HEIGHT, BLOCK_WIDTH, GAME_STATE, BLOCK_HEIGHT, BACKGROUND_COLOR} from '../constant/map';
import {level} from '../constant/level';
import Obstacle from './Obstacle';
import Portal from './Portal';
import {checkInitailBackground, addBackgroundColor, initBackgroundColor} from '../utils/utils'
import { clearSound } from '../constant/sound';
import { CLEAR_TEXT_COLOR, CLEAR_TEXT, FONT_SIZE } from '../constant/map';
import Menu from './Menu';

class Game {
  init() {
    // main canvas
    this.canvas = document.getElementById('canvas');
    this.canvas.width = MAP_WIDTH;
    this.canvas.height = MAP_HEIGHT;
    this.context = this.canvas.getContext('2d');

    this.state = GAME_STATE.GAME_READY;
    this.stageNum = 0;
    this.colorObj = {...BACKGROUND_COLOR};

    this.camera = new Camera();
    this.map = new GameMap(this.context);
    this.control = new Control()
    this.menu = new Menu(this);
    this.control.init(this.menu);
    if (this.state === GAME_STATE.GAME_READY) {
      this.load(this.stageNum);
      this.state = GAME_STATE.GAME_PLAYING;
    }
  }

  load(stageNum) {
    const {map, context, camera} = this;
    this.stage = level[stageNum];

    map.load(this.stage.buffer, this.stage.map);
    
    camera.init(this.stage.buffer);
    
    this.player = new Player(this.stage.startPoint.x, this.stage.startPoint.y, this.stage.buffer);  
    this.menu.player = this.player

    this.portal = new Portal(this.stage.portal, this.context, this.player);
  
    this.items = this.stage.items.map(({x, y, color}) => {
      const item =  new Item(x * BLOCK_WIDTH, y * BLOCK_HEIGHT, color, context, this.player);
      return item;
    });

    this.boxes = this.stage.boxes.map(({x, y, color}) => {
      const box =  new Box(x * BLOCK_WIDTH, y * BLOCK_HEIGHT, color, context, this.player);
      return box;
    });
    this.obstacles = this.stage.obstacles.map(({x, y, color}) => {
      const obstacle =  new Obstacle(x * BLOCK_WIDTH, y * BLOCK_HEIGHT, color, context, this.player);
      return obstacle;
    });
  }

  update() {
    const {player, camera, control, stage, items, boxes, map, obstacles, portal, colorObj} = this;
    player.move(control);
    player.update(stage.map);
    camera.update(player.x, player.y);
    portal.update();
    items.forEach(item => {
      item.update();

      if (!item.show && item.changeBackground) {
        if (
          (JSON.stringify(colorObj) === JSON.stringify(BACKGROUND_COLOR))
          || (JSON.stringify(item.color) === JSON.stringify(BACKGROUND_COLOR))
        ) {
          colorObj.r = item.color.r;
          colorObj.g = item.color.g;
          colorObj.b = item.color.b;  
        } else {
          addBackgroundColor(colorObj, item.color)
        }
          item.changeBackground = false;
      }
    })

    boxes.forEach(box => {
      box.update(colorObj, map);
    });
    
    obstacles.forEach(obstacle => {
      obstacle.update(colorObj)
    });

    map.update(player, colorObj);
    map.updateBox(boxes, colorObj);

    // when player die
    if (!player.alive) {
      this.state = GAME_STATE.GAME_OVER;
      player.die(stage.startPoint);
    }

    // when player reach the portal
    if (this.portal.reach) {
      const soundURL = jsfxr(clearSound); 
      const player = new Audio();
      player.src = soundURL;
      player.play();
      if (this.stageNum === 4) {
        this.state = GAME_STATE.GAME_CLEAR;
      } else {
        this.state = GAME_STATE.STAGE_CLEAR;
        this.stageNum += 1;
      }
    }
  }

  render() {
    const {state, context, map, player, camera, items, boxes, obstacles, portal, colorObj} = this;

    if (state !== GAME_STATE.GAME_CLEAR) {
      context.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
      if(!checkInitailBackground(colorObj)) {
        context.fillStyle = `rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b})`;
        context.fillRect(0,0,MAP_WIDTH, MAP_HEIGHT)
      }
    }
    switch (state) {
      case GAME_STATE.GAME_PLAYING:
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
        portal.render(camera.cx,  camera.cy);
        break;
      case GAME_STATE.STAGE_CLEAR:
      case GAME_STATE.GAME_OVER:
        initBackgroundColor(colorObj);
        this.load(this.stageNum);
        this.state = GAME_STATE.GAME_PLAYING;
        break;
      case GAME_STATE.GAME_CLEAR:
        setTimeout(() => {
          context.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
          context.font = `${FONT_SIZE}px Comic Sans MS`;
          context.textAlign = 'center'
          CLEAR_TEXT.split('').forEach((char, idx) => {
            context.fillStyle = CLEAR_TEXT_COLOR[idx];
            context.fillText(char, (MAP_WIDTH/2 - (9 * (FONT_SIZE - 10)/2)) + idx * (FONT_SIZE - 10), MAP_HEIGHT/2 - 120);
          })
        }, 200)

    }
  }
}

export default Game;
