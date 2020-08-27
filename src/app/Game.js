import GameMap from './GameMap';
import Player from "./Player";
import Control from "./Control";
import Camera from "./Camera"
import {MAP_WIDTH, MAP_HEIGHT} from '../constant/map';
import {level} from '../constant/level';

class Game {
  init() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = MAP_WIDTH;
    this.canvas.height = MAP_HEIGHT;
    this.context = this.canvas.getContext('2d');

    this.camera = new Camera();
    this.map = new GameMap(this.context);
    this.map.load(level);

    this.player = new Player(this.context, 0, 0);
    
    this.control = new Control(this.player)
    this.control.init();

    this.updateGameArea();
  }

  updateGameArea() {
    const {context, map, player, camera} = this;
    
    context.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
    camera.update(player.x);
    map.render(camera.cx);
    player.render(camera.cx);
  }
}

export default Game;
