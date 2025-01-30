document.addEventListener("DOMContentLoaded", function () {
    loadLyrics();
    setupDarkMode();
});

// Lyrics Data
const lyricsData = [{
    title: "Mere Mehboob Qayamat Hogi",
    artist: "Kishore Kumar",
    lyrics: "Mere mehboob qayamat hogi\nAaj rusva teri galiyon mein mohabbat hogi\nMeri nazrein to gila karti hain\nTere dil ko\nBhi sanam tujhse shikayat hogi\nMere mehboob\n\nMere sanam ke darr se agar\nBaad e sabha ho tera guzar\nKehna sitamgar kuchh hai khabar\nTera naam liya\nJab tak bhi jiya\nAye shama tera parwana\n\nJisse ab tak tujhe nafrat hogi\nAaj rusva teri galiyon main mohabbat hogi\nMere mehboob qayamat hogi\nAaj rusva teri galiyon main mohabbat hogi\nMere mehboob\n\nTeri gali main aata sanam\nNagma wafa ka gaata sanam\nTujhse suna na jaata sanam\nPhir aaj idhar\nAaya hoon magar\nYeh kehne main deewana\nKhatm bas aaj yeh vehshat hogi\nAaj rusva teri galiyon mein mohabbat hogi\n\nMere mehboob qayamat hogi\nAaj rusva teri galiyon mein mohabbat hogi\nMere mehboob",
    youtubeUrl: "https://youtu.be/yIzCBU0_LyY?si=pXavNkrlvFj-SiEZ"
},
    {
        title: "Gulabi Aakhein",
        artist: "Mohammad Rafi",
        lyrics: "Gulabi aankhen jo teri dekhi\nsharabi yeh dil ho gaya\nSambhalo mujhko oh mere yaaron\nsambhalna mushkil ho gaya\n\nDil mein mere khwab tere\ntasveer jaise ho deewar pe\nTujhpe fida main kyu huwa\naata hai gussa mujhe pyar pe\n\nMai loot gaya maan ke dil ka kaha\nmai kahi ka na raha\nkya kahu main dilruba\n\nBura hai jaadoo teri aankhon ka\nyeh mera kaatil ho gaya\nGulabi aankhen jo teri dekhi\nsharabi yeh dil ho gaya\n\nMaine sada chaha yahi\ndaman bacha lu hasino se main \nTeri kasam khwabo mein bhi\nbachta fira nazneeno se mai\n\nTauba magar mil gayi tujhse nazar\nmil gaya darde jigar\nsun zara oh bekhabar\n\nZara sa haske jo dekha tune\nmai tera bismil ho gaya\nGulabi aankhen jo teri dekhi\nsharabi yeh dil ho gaya\nSambhalo mujhko oh mere yaaron\nsambhalna mushkil ho gaya",
        youtubeUrl: "https://youtu.be/I5t894l5b1w?si=1mCcAKbu5chKTKwT"
    },
    {
        title: "Lag Ja Gale",
        artist: "Lata Mangeshkar",
        lyrics: "Lag ja gale ke phir ye\nhaseen raat ho na ho\nShaayad phir is janam mein\nmulaaqaat ho na ho\n\nLag ja gale ke phir ye\nhaseen raat ho na ho\nShaayad phir is janam mein\nmulaaqaat ho na ho\n\nHumko mili hain aaj ye\nghadiyaan naseeb se\nJee bhar ke dekh lijiye\nhumko qareeb se\nPhir aapke naseeb mein\nye baat ho na ho\nShaayad phir is janam mein\nmulaaqaat ho na ho\n\nLag ja gale ke phir ye\nhaseen raat ho na ho\nShaayad phir is janam mein\nmulaaqaat ho na ho\n\nPaas aaiye ki hum nahi\naayenge baar baar\nBaahein gale mein daal ke\nhum ro lein zaar zaar\nAankhon se phir ye pyaar ki\nbarsaat ho na ho\nShaayad phir is janam mein\nmulaaqaat ho na ho\n\nLag ja gale ke phir ye\nhaseen raat ho na ho\nShaayad phir is janam mein\nmulaaqaat ho na ho",
        youtubeUrl: "https://youtu.be/TFr6G5zveS8?si=1CakhY8lMV4VzsED"
    },
    {
        title: "Tu Hai To Mein Hoon",
        artist: "Arijit Singh",
        lyrics: "Tu hai toh main hoon\nSaason mein tu\nDhadkan mein tu\n\nTu hai toh main hoon\nSaanson mein tu\nDhadkan mein tu\nMeri har dua mein shaamil tera pyaar hai\nTera pyaar hai\n\nHar safar mein sang mere\nMera ikraar hai\nIkraar hai\nTera mera rishta hai kaise ek dor se\n\nTere bina main kahaan\nJaun bataa ab kahaan\nTu hai toh main hoon\nSaanson mein tu\nDhadkan mein tu\n\nTu hai toh main hoon\nSaanson mein tu\nDhadkan mein tu\nMeri har dua mein shaamil tera pyaar hai\nTera pyaar hai\n\nHar safar mein sang mere\nMera ikraar hai\nIkraar hai\nTera mera rishta hai kaise ek dor se\n\nTere bina main kahaan\nJaun bataa ab kahaan",
        youtubeUrl: "https://youtu.be/CKJA9blyMUg?si=ds9nwlWCWGaV_tgM"
    },
    {
        title: "Hai Apna Dil To Awara",
        artist: "Hemant Kumar",
        lyrics: "Hai apna dil to awara\nNa jaane kis pe aayega\nHai apna dil to awara\nNa jaane kis pe aayega\n\nHumein bas yehi hai ghum\nBhatakta hai har jagah\nNa jaane rukega kahaan\nHai apna dil to awara\nNa jaane kis pe aayega\n\nKisi se na kuchh kehna\nKisi ko na kuchh sunna\nMujhe pyar ka bas ek naghma suna\n\nHai apna dil to awara\nNa jaane kis pe aayega\nHai apna dil to awara\nNa jaane kis pe aayega\n\nKabhi humne kisi se mohabbat na ki\nMagar tumse kar baithe hum\nNa jaane kis mod pe aa gayi zindagi\nMagar ispe gham kyun karein hum\n\nHai apna dil to awara\nNa jaane kis pe aayega\nHai apna dil to awara\nNa jaane kis pe aayega",
        youtubeUrl: "https://youtu.be/r7eS2ELDarQ?si=kWSYQwpKDYdTl-Vn"
    }];

function loadLyrics() {
    const lyricsList = document.getElementById("lyrics-list");
    lyricsList.innerHTML = "";

    lyricsData.forEach((song, index) => {
        let songItem = document.createElement("div");
        songItem.classList.add("lyric-item");
        songItem.innerHTML = `<h3>${song.title}</h3><p>${song.artist}</p>`;
        songItem.onclick = () => displayLyrics(index);
        lyricsList.appendChild(songItem);
    });
}

function searchLyrics() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredLyrics = lyricsData.filter(song =>
        song.title.toLowerCase().includes(searchQuery) ||
        song.artist.toLowerCase().includes(searchQuery)
    );

    document.getElementById("lyrics-list").innerHTML = filteredLyrics.length ? filteredLyrics.map((song, index) =>
        `<div class="lyric-item" onclick="displayLyrics(${index})">
        <h3>${song.title}</h3><p>${song.artist}</p>
        </div>`).join(''): "<p>No results found.</p>";
}

function displayLyrics(index) {
    const song = lyricsData[index];
    document.getElementById("song-title").textContent = song.title;
    document.getElementById("song-artist").textContent = song.artist;
    document.getElementById("song-lyrics").textContent = song.lyrics;
    document.getElementById("youtube-link").href = song.youtubeUrl;
    document.getElementById("lyrics-display").style.display = "block";
}

function closeLyrics() {
    document.getElementById("lyrics-display").style.display = "none";
}

// ✅ Dark Mode Toggle Function
function setupDarkMode() {
    const toggleButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Check user preference in local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀ Light Mode";
    }

    toggleButton.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            toggleButton.textContent = "🌙 Dark ...";
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            toggleButton.textContent = "☀ Light ...";
        }
    });
}