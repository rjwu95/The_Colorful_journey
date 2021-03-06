import {MAP_WIDTH, MAP_HEIGHT} from '../constant/map'

let TILE_MAP_WIDTH;
let TILE_MAP_HEIGHT;

class Camera {
  constructor() {
    this.cx = 0;
  }

  init(buffer) {
    TILE_MAP_WIDTH = MAP_WIDTH * buffer.width;
    TILE_MAP_HEIGHT = MAP_HEIGHT * buffer.height;
  }

  update(playerX, playerY) {
    const minCameraPosX = 0;
    const maxCameraPosX = TILE_MAP_WIDTH - MAP_WIDTH;

    const minCameraPosY = 0;
    const maxCameraPosY = TILE_MAP_HEIGHT - MAP_HEIGHT;

    this.cx = playerX - MAP_WIDTH/3;
    this.cy = playerY - MAP_HEIGHT * 0.5;


    // camera min position
    if (this.cx < minCameraPosX) {
      this.cx = minCameraPosX;
    }

    // camera max position
    if (this.cx > maxCameraPosX) {
      this.cx = maxCameraPosX;
    }

        // camera min position
        if (this.cy < minCameraPosY) {
          this.cy = minCameraPosY;
        }
    
        // camera max position
        if (this.cy > maxCameraPosY) {
          this.cy = maxCameraPosY;
        }
  }
}

export default Camera;