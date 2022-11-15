import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

const onTimeUpDate = data => {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onTimeUpDate, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
