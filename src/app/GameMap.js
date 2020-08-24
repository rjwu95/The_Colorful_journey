import {scaledMap} from '../utils/utils';
import {BLOCK_SIZE, ROWS, COLUMNS} from '../constant/map';

// The map tile buffer canvas' context
const mapBuffer = document.createElement('canvas').getContext('2d');

class GameMap {
  constructor(ctx) {
    this.ctx = ctx;
    mapBuffer.canvas.width = BLOCK_SIZE * COLUMNS;
    mapBuffer.canvas.height = BLOCK_SIZE * ROWS;
  }

  load(map) {
    const scaledMapData = scaledMap(map);
    scaledMapData.forEach(({x, y, w, h}) => {
      mapBuffer.fillRect(x, y, w, h);
    });
    this.render();
  }

  render() {
    this.ctx.drawImage(mapBuffer.canvas, 0, 0);
  }
}

export default GameMap;