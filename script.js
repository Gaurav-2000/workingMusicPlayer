const music = new Audio('audio/1.mp3');
music.play();

const songs = [
    {
        id: 1,
        songName: `2 Bande<br>
    <div class="subtitle">Masoom Sharma</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Aa Zara<br>
    <div class="subtitle">Sukriti Kakar, Prakriti</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 3,
        songName: `Aaj Ki Raat<br>
    <div class="subtitle">Amitabh Bhattachary</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 4,
        songName: `Aaja DJ Pe<br>
    <div class="subtitle">Rahul Puthi, Ruchika</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 5,
        songName: `Aap Nazar Aaye<br>
    <div class="subtitle">Anurag Saikia, Nakul </div>`,
        poster: "img/5.jpg"
    },
    {
        id: 6,
        songName: `Aaya Re Toofan<br>
    <div class="subtitle">Irshad Kamil, Khitij P.</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 7,
        songName: `Agar Ho Tum<br>
    <div class="subtitle">Tanishk Bagchi, Kaus</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 8,
        songName: `Angaaron<br>
    <div class="subtitle">Shreya Ghoshal, Devi...</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 9,
        songName: `Bhool Bhulaiyaa 3 - Title Track<br>
    <div class="subtitle">Pitbull, Diljit Dosanjh...</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songName: `Bohar Aali Nahar<br>
    <div class="subtitle">Amit Saini Rohtakiya</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songName: `Chora Gaam Ka<br>
    <div class="subtitle">Sumit Goswami</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `Ilzaam<br>
    <div class="subtitle">Kumaar, Vishal Mishr...</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songName: `Jaane Tu	<br>
    <div class="subtitle">A.R. Rahman, Arijit
</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `Khaali Botal<br>
    <div class="subtitle">Manan Bhardwaj</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songName: `Khudaya	<br>
    <div class="subtitle">Manoj Muntashir,</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songName: `Ladki Deewani<br>
    <div class="subtitle">Neelkamal Singh</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songName: `Mere Mehboob Mere Sanam	<br>
    <div class="subtitle">Javed Akhtar, Udit N...
</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songName: `Nasha Raid 2	<br>
    <div class="subtitle">Jaani, Jasmine Sandl...
</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songName: `Rabba Mereya	<br>
    <div class="subtitle">B Praak, Avvy Sra, Jaa...
</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 20,
        songName: `Tell Me Once	<br>
    <div class="subtitle">Yo Yo Honey Singh, Alfaaz
</div>`,
        poster: "img/20.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-solid', ' fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
    }
    else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('fa-solid',' fa-play');
        masterPlay.classList.remove('fa-solid' ,' fa-pause');
    }
});

let index = 0;
let title = document.getElementById('title');
let poster_master_play = document.getElementById('poster_master_play');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id; 
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('fa-solid', 'fa-play');
        masterPlay.classList.add('fa-solid', 'fa-pause');
        let songTitles = songs.filter((els) => els.id == index);
        if (songTitles.length > 0) {
            let { songName } = songTitles[0];
            title.innerHTML = songName;
        } else {
            console.error(`No song found with id: ${index}`);
        }
    });
});

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.addEventListener('click', () => {
    index++;
    if (index > songs.length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-solid', 'fa-play');
    masterPlay.classList.add('fa-solid', 'fa-pause');
    let songTitles = songs.filter((els) => els.id == index);
    if (songTitles.length > 0) {
        let { songName } = songTitles[0];
        title.innerHTML = songName;
    } else {
        console.error(`No song found with id: ${index}`);
    }
    updateDownloadLink(index);
});

prev.addEventListener('click', () => {
    index--;
    if (index < 1) {
        index = songs.length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-solid', 'fa-play');
    masterPlay.classList.add('fa-solid', 'fa-pause');
    let songTitles = songs.filter((els) => els.id == index);
    if (songTitles.length > 0) {
        let { songName } = songTitles[0];
        title.innerHTML = songName;
    } else {
        console.error(`No song found with id: ${index}`);
    }
    updateDownloadLink(index);
});




let currentStart = document.getElementById('currentStart');

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) secs = `0${secs}`;
    return `${minutes}:${secs}`;
}

music.addEventListener('timeupdate', () => {
    currentStart.innerText = formatTime(music.currentTime);
});

let currentEnd = document.getElementById('currentEnd');

music.addEventListener('loadedmetadata', () => {
    currentEnd.innerText = formatTime(music.duration);
});

let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2'); 
let dot = document.querySelector('.dot'); 

music.addEventListener('timeupdate', () => {
    let currentTime = music.currentTime;
    let duration = music.duration;
    let progress = (currentTime / duration) * 100;
    seek.value = progress;
    bar2.style.width = `${progress}%`;
    dot.style.left = `${progress}%`;
});

seek.addEventListener('input', () => {
    let duration = music.duration;
    music.currentTime = (seek.value / 100) * duration;
});

let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol_icon');
let vol_bar = document.querySelector('.vol_bar');
let vol_dot = document.getElementById('vol_dot');

music.volume = 0.5;
vol.value = 50;

vol.addEventListener('input', () => {
    let volume = vol.value / 100;
    music.volume = volume;
    vol_bar.style.width = `${vol.value}%`;
    vol_dot.style.left = `${vol.value}%`;
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-low', 'fa-volume-high');
        vol_icon.classList.add('fa-volume-xmark');
    } else if (vol.value > 0 && vol.value <= 50) {
        vol_icon.classList.remove('fa-volume-xmark', 'fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
    } else {
        vol_icon.classList.remove('fa-volume-xmark', 'fa-volume-low');
        vol_icon.classList.add('fa-volume-high');
    }
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 150;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 150;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 150;
});

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 150;
});



let playButton = document.querySelector('.button button'); // Adjust the selector if needed

// Add event listener for random play
playButton.addEventListener('click', () => {
    // Generate a random index
    let randomIndex = Math.floor(Math.random() * songs.length) + 1; // Random index between 1 and songs.length

    // Update the audio source
    music.src = `audio/${randomIndex}.mp3`;
    poster_master_play.src = `img/${randomIndex}.jpg`;

    // Update the song title
    let selectedSong = songs.find(song => song.id === randomIndex);
    if (selectedSong) {
        title.innerHTML = selectedSong.songName;
    }

    // Play the song
    music.play();
    masterPlay.classList.remove('fa-solid', 'fa-play');
    masterPlay.classList.add('fa-solid', 'fa-pause');
    wave.classList.add('active1');
});