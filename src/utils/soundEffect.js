import CPlayer from './player-small'

export default function soundEffect(song) {
  const player = new CPlayer();
  player.init(song);

  var done = false;
  setInterval(function () {
    if (done) {
      return;
    }

    done = player.generate() >= 1;

    if (done) {
      const wave = player.createWave();
      const audio = document.createElement("audio");
      audio.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));
      audio.play();
    }
  }, 0);
}
