const controller = document.querySelector('.controller-wrapper');

const player = new Audio("./audio/at-this-moment.mp3");
controller.appendChild(player);

controller.addEventListener('click', playerHandler);

function playerHandler(e) {
  switch (e.target.name) {
    case 'play':
      player.play();
      break;
    case 'pause':
      player.pause();
      break;
    default:
      break;

  }
}

