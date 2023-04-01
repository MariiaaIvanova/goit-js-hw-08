import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_TIME_SET = 'videoplayer-current-time';


const onPlay = function (event) {
    localStorage.setItem(LOCAL_TIME_SET, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(LOCAL_TIME_SET)) || 0);