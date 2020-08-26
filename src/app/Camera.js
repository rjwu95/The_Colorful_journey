import {MAP_WIDTH} from '../constant/map'
class Camera {
  constructor() {
    this.cx = 0;
  }

  update(playerPos) {
    this.cx = playerPos - MAP_WIDTH/3;

    if (this.cx < 0) {
      this.cx = 0;
    }
  }
}

export default Camera;