import GameMap from './GameMap';
import {MAP_WIDTH, MAP_HEIGHT} from '../constant/map';
import {level} from '../constant/level';
class Game {
  init () {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = MAP_WIDTH;
    this.canvas.height = MAP_HEIGHT;
    this.ctx = this.canvas.getContext('2d');

    this.map = new GameMap(this.ctx);
    this.map.load(level);
  }
}

export default Game;
