var p = 1
var player = [
  { music: "music/God's Plan.mp3" },
  { music: "music/Knee Socks.mp3" },
  { music: "music/Pay The Man.mp3" },
  { music: "music/Sweet Lies.mp3" },
  { music: "music/Will He.mp3" },
]
var nome = [
  { musicas: "God's Plan - Drake" },
  { musicas: "Knee Socks - Arctic Monkeys" },
  { musicas: "Pay The Man - Foster The People" },
  { musicas: "Sweet Lies - EXO" },
  { musicas: "Will He - Joji" },
]

var album = [
  { cover: "img/godsplan.png"},
  { cover: "img/arctic.png"},
  { cover: "img/sacredhearts.png" },
  { cover: "img/exo.png"},
  { cover: "img/joji.png"},
]

var i = 0;
document.getElementById("musicas").innerHTML = nome[i].musicas;
audio = document.getElementById('player')
audio.addEventListener("timeupdate", barra, false);
audio.addEventListener("timeupdate", tempoMusica, true);
playlist = ["music/God's Plan.mp3", "music/Knee Socks.mp3", "music/Pay The Man.mp3", "music/Sweet Lies.mp3", "Will He.mp3"]
temp = audio.currentTime;

function playpause() {
  p++
  if (p % 2 == 0) {
    document.getElementById("playpausebtn").innerHTML = "<i class='material-icons-round fa-2x'>pause</i>"
    if (temp == 0) {
      audio.src = player[i].music;
    }
    
    audio.play();
    audio.currentTime = temp;
    document.getElementById('player').play();
  }
  else if (p % 2 != 0) {
    document.getElementById("playpausebtn").innerHTML = "<i class='material-icons-round fa-2x'>play_arrow</i>"
    document.getElementById('player').pause();
    time.style.width = ((audio.currentTime / audio.duration) * 100) + "%";
    audio.pause();
    temp = audio.currentTime;
  }
  
};

audio.addEventListener("timeupdate", function (event) {
  time.style.width = ((audio.currentTime / audio.duration) * 100) + "%";
}, false);

function barra() {
  time.style.width = ((audio.currentTime / audio.duration) * 100) + "%";
}

function tempoMusica() {
  var currentMinutes, currentSeconds, totalMinutes, totalSeconds;
  currentMinutes = Math.floor(audio.currentTime / 60);
  totalMinutes = Math.floor(audio.duration / 60);
  currentSeconds = Math.floor(audio.currentTime % 60);
  totalSeconds = Math.floor(audio.duration % 60);
  currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
  var CurrentTime = currentMinutes + ":" + currentSeconds;
  totalSeconds = totalSeconds < 10 ? "0" + totalSeconds : totalSeconds;
  var TotalTime = totalMinutes + ":" + totalSeconds;
  document.getElementById("timeend").innerText = TotalTime;
  document.getElementById("timestart").innerText = CurrentTime;
 
}
function next() {
  if (i > player.length) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById("musicas").innerHTML = nome[i].musicas;
  audio.src = player[i].music;
  //tempoMusica();
  temp = 0;
  p=1;
  playpause();
}
function skip() {
  if (i == 0) {
    i = 4;
    playpause();
  }
  else {
    i--;
    temp = 0;
  }
  document.getElementById("musicas").innerHTML = nome[i].musicas;
  audio.src = player[i].music;
  audio.play();
  temp = 0;
}

function aleat() {
  i= Math.floor(Math.random()*4+0);
  document.getElementById("musicas").innerHTML = nome[i].musicas;
  p=1;
  audio.src = player[i].music;
  //document.getElementById("timeend").innerText = "0:00";
  playpause();
}