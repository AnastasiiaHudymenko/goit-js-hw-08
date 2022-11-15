import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpDate, 1000));

function onTimeUpDate(data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
}
setCurrentTime();
function setCurrentTime() {
  if (localStorage.getItem(CURRENT_TIME)) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
  }
}
