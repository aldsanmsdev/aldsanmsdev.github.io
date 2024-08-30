const songs = [
    { name: "Song 1", file: "songs/gta5/Gta 5 NON-STOP POP radio (all songs).mp3" },
    { name: "Song 2", file: "songs/gta5/1.m4a" },
    { name: "Song 3", file: "songs/gta5/2.m4a" }
];

const wheel = document.getElementById('song-wheel');
const audioPlayer = document.getElementById('audio-player');

let indexSong = 0;

songs.forEach((song, index) => {
    const item = document.createElement('div');
    item.classList.add('wheel-item');
    item.innerText = song.name;
    item.onclick = () => playSong(index);
    wheel.appendChild(item);
});

function playSong(index) {
    indexSong = index;
    const selectedSong = songs[index];

    audioPlayer.src = selectedSong.file;

    audioPlayer.addEventListener('loadedmetadata', () => {
        let newTime = 0;
        const pageLoadTime = localStorage.getItem('page-load-time');
        if (pageLoadTime) {
            const timeElapsed = (Date.now() - parseFloat(pageLoadTime)) / 1000;
            newTime = timeElapsed;
            if (newTime >= audioPlayer.duration) {
                newTime = timeElapsed % audioPlayer.duration;
            }
        }
        audioPlayer.currentTime = newTime;
        audioPlayer.play();
    }, { once: true });

    audioPlayer.addEventListener('ended', () => {
        // Instead of going to the next song, restart the current song
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    });

    updateMediaSessionMetadata(selectedSong);
}

function nextSong() {
    let newIndex = (indexSong + 1) % songs.length;
    playSong(newIndex);
}

function previousSong() {
    let newIndex = (indexSong - 1 + songs.length) % songs.length;
    playSong(newIndex);
}

function updateMediaSessionMetadata(song) {
    if ('mediaSession' in navigator) {
        console.log("Mise à jour des métadonnées pour la session média.");

        navigator.mediaSession.metadata = new MediaMetadata({
            title: song.name,
            artist: "Unknown Artist",
            album: "Unknown Album",
            artwork: [
                { src: "./cover/default/default.png", sizes: '96x96', type: 'image/png' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => {
            console.log("Play action triggered.");
            audioPlayer.play();
        });
        navigator.mediaSession.setActionHandler('pause', () => {
            console.log("Pause action triggered.");
            audioPlayer.pause();
        });
        navigator.mediaSession.setActionHandler('previoustrack', () => {
            console.log("Previous track action triggered.");
            previousSong();
        });
        navigator.mediaSession.setActionHandler('nexttrack', () => {
            console.log("Next track action triggered.");
            nextSong();
        });
    } else {
        console.log("Votre navigateur ne prend pas en charge l'API Media Session");
    }
}

audioPlayer.addEventListener('timeupdate', () => {
    const currentSongIndex = songs.findIndex(song => song.file === audioPlayer.src.split('/').pop());
    localStorage.setItem(`song-${currentSongIndex}-time`, audioPlayer.currentTime);
});

window.addEventListener('load', () => {
    localStorage.setItem('page-load-time', Date.now());
});

window.addEventListener('beforeunload', () => {
    const currentSongIndex = songs.findIndex(song => song.file === audioPlayer.src.split('/').pop());
    localStorage.setItem(`song-${currentSongIndex}-time`, audioPlayer.currentTime);
});

const nextSongButton = document.getElementById('next-song');
nextSongButton.addEventListener('click', () => {
    nextSong();
});

const previousSongButton = document.getElementById('previous-song');
previousSongButton.addEventListener('click', () => {
    previousSong();
});

document.addEventListener('DOMContentLoaded', () => {
    playSong(indexSong);
});
