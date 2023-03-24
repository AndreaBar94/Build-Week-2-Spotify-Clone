// for tests purposes
// let casualId = Math.floor(Math.random() * 70000) + 1;
// let randomAlbum = Math.floor(Math.random() * 10000) + 40000;
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
const endpoint = " https://striveschool-api.herokuapp.com/api/deezer/album/" + selectedId;
const tracklist = " https://striveschool-api.herokuapp.com/api/deezer/album/" + selectedId;

let progressBar = document.getElementById("progressBar");
let audioPlayer = document.getElementById("audioPlayer");
let progressTime = document.getElementById("progressTime");

audioPlayer.addEventListener("timeupdate", function () {
	let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
	progressBar.style.width = `${progress}%`;

	let progressSecond = Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 30);

	if (progressSecond < 10) {
		progressTime.textContent = `0:0${progressSecond}`;
	} else if (progressTime.textConten == Nan) {
		progressTime.textContent = `0:00`;
	} else {
		progressTime.textContent = `0:${progressSecond}`;
	}
});

window.onload = () => {
	try {
		fetch(endpoint)
			.then((responseObj) => responseObj.json())
			.then((album) => {
				console.log(album);
				let imgAlbum = document.querySelector("#imgAlbum");
				let titleAlbum = document.querySelector("#titleAlbum");
				let NumTrack = document.getElementById("NumTrack");
				let tipe = document.getElementById("tipe");
				let coverPic = document.getElementById("coverPic");
				let authorAlbum = document.getElementById("authorAlbum");
				let releaseDate = document.getElementById("releaseDate");
				releaseDate.textContent = album.release_date;
				authorAlbum.innerHTML = `<a href="artist.html?id=${album.artist.id}" class="text-decoration-none" > ${album.artist.name}</a>`;
				coverPic.src = `${album.cover}`;
				imgAlbum.src = `${album.cover_medium}`;
				titleAlbum.textContent = album.title;
				titleAlbum.classList.add("text-truncate");
				NumTrack.textContent = album.nb_tracks + " brani";
				tipe.textContent = album.record_type;
			});

		fetch(tracklist)
			.then((responseList) => responseList.json())
			.then((trackslist) => {
				console.log(trackslist);

				let containerAlbum = document.getElementById("containerAlbum");
				const olAlbum = document.createElement("ol");
				olAlbum.setAttribute("id", "popularList");
				containerAlbum.appendChild(olAlbum);
				trackslist.tracks.data.forEach((track) => {
					const liAlbum = document.createElement("li");
					liAlbum.classList.add("py-3");
					let duration = track.duration;
					let minutes = Math.floor(duration / 60);
					let seconds = Math.floor(duration % 60)
						.toString()
						.padStart(2, "0");
					let formattedDuration = `${minutes}:${seconds}`;
					liAlbum.innerHTML += `
            <div id="AlbumList" class="row align-items-start">
              <div id="album-title" class="col12 col-md-5 mb-3">
              <button id="trackBtn" type="button" class="btn text-light text-start trackBtn align-self-center text-truncate ps-0">${track.title_short}</button>
                <br>
                <a href="artist.html?id=${track.artist.id}" class="album-artist text-info text-decoration-none">${track.artist.name}</a>
              </div>
              <div class="col-4 d-none d-md-block text-info">
                <p class="riproduction">${track.rank}</p>
              </div>
              <div class="col-2 d-none d-md-block text-info">
                <p class="duration">${formattedDuration}</p>
              </div>
            </div>
          `;
					olAlbum.appendChild(liAlbum);
					//button player bar song name and player bar filler
					let songTitle = document.querySelector(".songTitle");
					let songArtist = document.querySelector(".songArtist");
					let songCover = document.querySelector(".songCover");
					let songTitleMobile = document.querySelector(".songTitleMobile");
					let songArtistMobile = document.querySelector(".songArtistMobile");
					let songCoverMobile = document.querySelector(".songCoverMobile");
					let trackBtn = liAlbum.querySelector("#trackBtn");
					let audioPlayer = document.getElementById("audioPlayer");
					let playPauseBtn = document.getElementById("playPauseBtn");
					let audioPlayer2 = document.getElementById("audioPlayer2");
					let playPauseBtn2 = document.getElementById("playPauseBtn2");
					trackBtn.addEventListener("click", function () {
						songTitle.textContent = track.title_short;
						songTitleMobile.textContent = track.title_short;
						songArtist.innerHTML = track.artist.name;
						songArtistMobile.innerHTML = track.artist.name;
						songCover.innerHTML = `<img src="${track.album.cover_medium}" alt="album cover" class="img-fluid" />`;
						songCoverMobile.innerHTML = `<img src="${track.album.cover_medium}" alt="album cover" class="img-fluid" style="width: 50px" />`;
						//player audio
						audioPlayer.src = track.preview;
						playPauseBtn.addEventListener("click", function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
							let volume = document.querySelector("#volume-control");
							volume.addEventListener("input", function (e) {
								audioPlayer.volume = e.currentTarget.value / 100;
							});
						});
						audioPlayer2.src = track.preview;
						playPauseBtn2.addEventListener("click", function () {
							if (audioPlayer2.paused) {
								audioPlayer2.play();
								playPauseBtn2.innerHTML = '<i class="bi bi-pause-fill text-light fs-6"></i>';
							} else {
								audioPlayer2.pause();
								playPauseBtn2.innerHTML = '<i class="bi bi-play-fill text-light fs-6"></i>';
							}
							let volume = document.querySelector("#volume-control");
							volume.addEventListener("input", function (e) {
								audioPlayer.volume = e.currentTarget.value / 100;
							});
						});
					});
				});
			});
	} catch (error) {
		console.log("errore" + error);
	}
};

let previousBtn = document.querySelector(".previousBtn");
previousBtn.addEventListener("click", function () {
	window.location.href = "index.html";
});
