class Player {
  constructor(x, y) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
  }
  newPos() {
    this.x += this.speedX
    this.y += this.speedY
  }
}

export default Player;
