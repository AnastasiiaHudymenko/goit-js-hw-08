import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';
player.on('timeupdate', function () {});
