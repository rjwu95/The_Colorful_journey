import {scaledMap} from '../utils/utils';

class GameMap {
  constructor() {
  }

  load(map, ctx) {
    const mapamp = scaledMap(map)
    mapamp.forEach(({x, y, w, h}) => {
      ctx.fillRect(x, y, w, h);
    });
  }
}

export default GameMap;