import GameMap from './GameMap';
import Player from "./Player";
import Control from "./Control";
import Camera from "./Camera"
import Item from './Item';
import {MAP_WIDTH, MAP_HEIGHT, BLOCK_SIZE} from '../constant/map';
import {level} from '../constant/level';

class Game {
  init() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = MAP_WIDTH;
    this.canvas.height = MAP_HEIGHT;
    this.context = this.canvas.getContext('2d');

    this.camera = new Camera();
    this.map = new GameMap(this.context);
    this.map.load(level.map);

    this.player = new Player(this.context, 0, 0);
    
    this.control = new Control(this.player)
    this.control.init();

    this.items = level.items.map(({x, y, color}) => {
      const item =  new Item(x * BLOCK_SIZE, y * BLOCK_SIZE, color, this.context, this.player);
      return item;
    });
  }

  updateGameArea() {
    const {context, map, player, camera, items} = this;
    
    context.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
  
    // Todo: need to fix to check all items color
    if(!items.some(item => item.show)) {
      context.fillStyle = items[0].color;
      context.fillRect(0,0,MAP_WIDTH, MAP_HEIGHT)
    }

    camera.update(player.x);
    map.render(camera.cx);
    player.render(camera.cx);
    items.every(item => item.render(camera.cx));
  }
}

export default Game;
