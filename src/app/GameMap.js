import {scaledMap} from '../utils/utils';
import {MAP_WIDTH, MAP_HEIGHT} from '../constant/map';

// The map tile buffer canvas' context
const mapBuffer = document.createElement('canvas').getContext('2d');

class GameMap {
  constructor(context) {
    this.context = context;
    mapBuffer.canvas.width = MAP_WIDTH * 2;
    mapBuffer.canvas.height = MAP_HEIGHT;
  }

  load(map) {
    const scaledMapData = scaledMap(map);
    scaledMapData.forEach(({x, y, w, h}) => {
      mapBuffer.fillRect(x, y, w, h);
    });
    this.render();
  }

  render() {
    this.context.drawImage(mapBuffer.canvas, 0, 0);
  }
}

export default GameMap;