import {scaledMap} from '../utils/utils';
import {TILE_MAP_WIDTH, MAP_HEIGHT} from '../constant/map';

// The map tile buffer canvas' context
const mapBuffer = document.createElement('canvas').getContext('2d');

class GameMap {
  constructor(context) {
    this.context = context;
    mapBuffer.canvas.width = TILE_MAP_WIDTH;
    mapBuffer.canvas.height = MAP_HEIGHT;
  }

  load(map) {
    const scaledMapData = scaledMap(map);
    scaledMapData.forEach(({x, y, w, h}) => {
      mapBuffer.fillRect(x, y, w, h);
    });
  }

  render(cx) {
    this.context.drawImage(mapBuffer.canvas, -cx, 0);
  }
}

export default GameMap;