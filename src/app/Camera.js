import {MAP_WIDTH, TILE_MAP_WIDTH} from '../constant/map'
class Camera {
  constructor() {
    this.cx = 0;
  }

  update(playerPos) {
    const minCameraPos = 0;
    const maxCameraPos = TILE_MAP_WIDTH - MAP_WIDTH;

    this.cx = playerPos - MAP_WIDTH/3;

    // camera min position
    if (this.cx < minCameraPos) {
      this.cx = minCameraPos;
    }

    // camera max position
    if (this.cx > maxCameraPos) {
      this.cx = maxCameraPos;
    }
  }
}

export default Camera;