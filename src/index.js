import Game from './app/Game'

let game;

function loop() {
  game.update()
  window.requestAnimationFrame(loop);
}

function init() {
  game = new Game();
  game.init();

  window.requestAnimationFrame(loop);
}

init();
