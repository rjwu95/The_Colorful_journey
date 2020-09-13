class Menu {
  constructor(game) {
    this.game = game
    this.player = null
    this.menuEl = document.getElementById('menu');
    this.introEl = document.getElementById('intro');
    this.continueButton = document.getElementById("c")
    this.restartButton = document.getElementById("s")
    this.startButton = document.getElementById("n")
    this.startButton.addEventListener("click", () => {
      this.introEl.classList.add("r");
    })
    this.continueButton.addEventListener("click", () => {
      this.hide()
    })
    this.restartButton.addEventListener("click", () => {
      this.hide()
      this.player.alive = false
    })
  }
  show() {
    this.menuEl.classList.remove("r");
  }
  hide() {
    this.menuEl.classList.add("r");
  }
}

export default Menu;