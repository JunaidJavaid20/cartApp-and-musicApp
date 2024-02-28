const arr = [
    {songName:"Sidhu Mouse Wala", url:"./songs/music2.mp3", img:"./image/2.jpg"},
    {songName:"Jaly-2", url:"./songs/music1.mp3", img:"./image/1.jpg"},
    {songName:"Shehbaz Shareef", url:"./songs/video.mp4", img:"./image/3.jpg"},
    {songName:"Dabang", url:"./songs/music1.mp3", img:"./image/4.jpg"}
];

let audio = new Audio();
let allSongs = document.querySelector("#all-songs");
let poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
let selectedSong = 0;

function mainFunction(){
let clutter = "";
arr.forEach(function (elem, index) {
    clutter += `<div class="song-card" id=${index}>
<div class="part1">
    <img src=${elem.img} alt="">
    <h2>${elem.songName}</h2>
</div>
<h6>3:56</h6>
</div>`
});
allSongs.innerHTML = clutter;
audio.src = arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].img})`
};
mainFunction();

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    mainFunction();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1;
    audio.play();
});

let flag = 0;
play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction();
        audio.play();
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction();
        audio.pause();
        flag = 0;
    };
});

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction();
        audio.play();
    }else{
        forward.style.opacity = 0.4
    };
});

backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction();
        audio.play();
    }else{
        backward.style.opacity = 0.4
    };
});