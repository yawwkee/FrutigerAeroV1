const tracks = ['track1.mp3', 'track2.mp3', 'track3.mp3'];
let current = 0;
let isPlaying = false;

const player = document.getElementById('player');
const playPauseBtn = document.getElementById('play-pause');
const trackName = document.getElementById('track-name');

player.volume = 0.05;

function updateTrackName() {
    trackName.textContent = tracks[current];
}

function playTrack() {
    player.src = tracks[current];
    player.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
    updateTrackName();
}


document.getElementById('btn').addEventListener('click', function() {
    const intro = document.getElementById('screen-intro');


    intro.classList.add('slide-up');

    setTimeout(function() {
    intro.style.display = 'none';
    document.getElementById('screen-main').style.display = 'block';

    setTimeout(function() {
        document.getElementById('main-header').classList.add('visible');
    }, 100);

    const cards = document.querySelectorAll('.section-card');
    cards.forEach(function(card, index) {
        setTimeout(function() {
            card.classList.add('visible');
        }, 200 + index * 150);
    });

}, 700);

    player.play();
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
});


playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        player.pause();
        isPlaying = false;
        playPauseBtn.textContent = '▶';
    } else {
        player.play();
        isPlaying = true;
        playPauseBtn.textContent = '⏸';
    }
});


document.getElementById('next').addEventListener('click', function() {
    current = (current + 1) % tracks.length;
    playTrack();
});


document.getElementById('prev').addEventListener('click', function() {
    current = (current - 1 + tracks.length) % tracks.length;
    playTrack();
});


player.addEventListener('ended', function() {
    current = (current + 1) % tracks.length;
    playTrack();
});

document.querySelectorAll('.card-header').forEach(function(header) {
    header.addEventListener('click', function() {
        const card = header.parentElement;
        card.classList.toggle('open');
    });
});