class Menu {
  constructor(game, player) {
    this.game = game
    this.player = player
    this.menuEl = document.getElementsByClassName('menu')[0];
    this.isShow = false
    this.continueButton = document.getElementById("c")
    this.restartButton = document.getElementById("s")
    this.continueButton.addEventListener("click", () => {
      console.log('click continue')
      this.hide()
    })
    this.restartButton.addEventListener("click", () => {
      this.hide()
      this.player.alive = false
    })
  }
  show() {
    this.menuEl.classList.remove("r");
    this.isShow = true
  }
  hide() {
    console.log('hide')
    this.menuEl.classList.add("r");
    this.isShow = false
  }
}

export default Menu;