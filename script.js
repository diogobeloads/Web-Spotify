const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById('audio');
const cover = document.getElementById('disc-cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');
const likeButton = document.getElementById('like');

// Variáveis auxiliares
const herbocinetica = {
  songName: "Herbocinética",
  file: "herbocinetica",
  artist: "Raimundos",
};
const poquitoMas = {
  songName: "Poquito Mas",
  file: "poquito_mas",
  artist: "Raimundos",
};
const rapante = {
  songName: "Rapante",
  file: "rapante",
  artist: "Raimundos",
};
const puteiro = {
    songName: "Puteiro em Joao Pessoa",
    file: "puteiro",
    artist: "Raimundos",
};
const mais_pedida = {
  songName: "A Mais Pedida",
  file: "mais_pedida",
  artist: "Raimundos",
};
const deixa_eu_falar = {
  songName: "Deixa eu Falar",
  file: "deixa_eu_falar",
  artist: "Raimundos",
};
const kombao = {
  songName: "Pitando no Kombao",
  file: "kombao",
  artist: "Raimundos",
};
const palhas = {
  songName: "Palhas do Coqueiro",
  file: "palhas",
  artist: "Raimundos",
};
const baile = {
  songName: "Baile Funky",
  file: "baile",
  artist: "Raimundos",
};
const tora = {
  songName: "Tora Tora",
  file: "tora",
  artist: "Raimundos",
};
const esporrei = {
  songName: "Esporrei na Manivela",
  file: "esporrei",
  artist: "Raimundos",
};
const meLambe = {
  songName: "Me Lambe",
  file: "meLambe",
  artist: "Raimundos",
};
const bestinha = {
  songName: "Bestinha",
  file: "bestinha",
  artist: "Raimundos",
};
const fases = {
  songName: "Mulher de Fases",
  file: "fases",
  artist: "Raimundos",
};

let isPlaying = false;
let isShuffled = false;
const originalplaylist = [herbocinetica,poquitoMas,rapante,puteiro,mais_pedida,deixa_eu_falar,kombao,palhas,baile,tora,esporrei,meLambe,bestinha,fases];
let sortedPlaylist = [... originalplaylist];
let currentSong = 0;

function playSong() {
  isPlaying = true;
  play.querySelector("i.bi").classList.remove("bi-play-circle-fill");
  play.querySelector("i.bi").classList.add("bi-pause-circle-fill");
  song.play();
}

function pauseSong() {
  isPlaying = false;
  play.querySelector("i.bi").classList.add("bi-play-circle-fill");
  play.querySelector("i.bi").classList.remove("bi-pause-circle-fill");
  song.pause();
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function initializeSong() {
    songName.innerText = sortedPlaylist[currentSong].songName;
    bandName.innerText = sortedPlaylist[currentSong].artist;
    song.src = `/songs/${sortedPlaylist[currentSong].file}.mp3`;
    cover.src = `/images/${sortedPlaylist[currentSong].file}.jpg`;
}

function nextSong() {
    if(currentSong === sortedPlaylist.length -1){
        currentSong = 0;
    }
    else {
        currentSong += 1;
    }
    initializeSong();
    playSong();
}

function previousSong() {
    if(currentSong === 0){
        currentSong = sortedPlaylist.length - 1;
    }
    else {
        currentSong -= 1;
    }
    initializeSong();
    playSong();
}
function updateProgressBar(){
  const barWidth = (song.currentTime/song.duration)*100;
  currentProgress.style.setProperty('--progress', `${barWidth}%`);
}
function jumpTo(event){
  const width = progressContainer.clientWidth;
  const clickPosition = event.offsetX;
  const jumpToTime = (clickPosition/width)* song.duration;
  song.currentTime = jumpToTime;
}
function shuffleArray(preShuffleArray){
  const size = preShuffleArray.length;
  let currentIndex = size - 1;
  while(currentIndex > 0){
   let randomIndex = Math.floor(Math.random()*size);
   let aux = preShuffleArray[currentIndex];
   preShuffleArray [currentIndex] = preShuffleArray[randomIndex];
   preShuffleArray[randomIndex] = aux;
   currentIndex -= 1;
  }
}


function shuffleButtonClicked(){
  if(isShuffled === false){
    isShuffled = true;
    shuffleArray(sortedPlaylist);
    shuffleButton.classList.add('button-active');
  }
  else {
    isShuffled = false;
    sortedPlaylist= [...originalplaylist];
    shuffleButton.classList.remove('button-active');
  }
}

initializeSong();

play.addEventListener("click", playPauseDecider);
next.addEventListener("click", nextSong);
previous.addEventListener("click", previousSong);
song.addEventListener('timeupdate',updateProgressBar);
progressContainer.addEventListener('click',jumpTo);
shuffleButton.addEventListener('click', shuffleButtonClicked);