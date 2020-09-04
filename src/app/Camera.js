import {MAP_WIDTH, TILE_MAP_WIDTH, TILE_MAP_HEIGHT, MAP_HEIGHT} from '../constant/map'
class Camera {
  constructor() {
    this.cx = 0;
  }

  update(playerX, playerY) {
    const minCameraPosX = 0;
    const maxCameraPosX = TILE_MAP_WIDTH - MAP_WIDTH;

    const minCameraPosY = 0;
    const maxCameraPosY = TILE_MAP_HEIGHT - MAP_HEIGHT;

    this.cx = playerX - MAP_WIDTH/3;
    this.cy = playerY - MAP_HEIGHT/3;

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