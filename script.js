const songName = document.getElementById('song-name');
songName.innerText = 'Herbocinética';
let isPlaying = false;

const song = document.getElementById('audio');
const play = document.getElementById('play');

const bandName = document.getElementById('band-name');
bandName.innerText = 'Raimundos';

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}
function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else {
        playSong();
    }
}

play.addEventListener('click',playPauseDecider);

'21 minutos'