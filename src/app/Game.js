import GameMap from './GameMap';
import {BLOCK_SIZE, ROWS, COLUMNS} from '../constant/map';
import {level} from '../constant/level';
class Game {
  init () {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = BLOCK_SIZE * COLUMNS;
    this.canvas.height = BLOCK_SIZE * ROWS;
    this.ctx = this.canvas.getContext('2d');
    this.map = new GameMap();
    this.map.load(level, this.ctx);
  }
}

export default Game;
