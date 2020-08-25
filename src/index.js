import Game from './app/Game'

let game;

function init() {
  game = new Game();
  game.init();
  requestAnimationFrame(tick);
}

export function tick(timestamp) {
  game.updateGameArea()
  requestAnimationFrame(tick);
}

init();
