// for test purposes
// let randomArtist = Math.floor(Math.random() * 1000) + 1;
// let randomAlbum = Math.floor(Math.random() * 10000) + 40000;
// const endpointArtist = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist;
// const endpointAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/' + randomAlbum;
// const endpointTrackList = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist + '/top?limit=50';
const endpoint = 'https://striveschool-api.herokuapp.com/api/deezer/album/';
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get('id');
//username set
let userName = document.getElementById('userNameCustom');
if (localStorage.getItem('Username')) {
	let users = JSON.parse(localStorage.getItem('Username'));
	userName.textContent = users[users.length - 1];
} else {
	userName.textContent = 'Nessun utente memorizzato';
}

//Playbar audio progress
let progressBar = document.getElementById('progressBar');
let audioPlayer = document.getElementById('audioPlayer');
let progressTime = document.getElementById('progressTime');

audioPlayer.addEventListener('timeupdate', function () {
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

//playbar placeholder
let playbarInfo = document.querySelector('.playbarSongData');
let songTitleMobile = document.querySelector('.songTitleMobile');
let songTitle = document.querySelector('.songTitle');
let playbarLikeBtn = document.getElementById('playbarLikeBtn');

// if (songTitle == "") {
// 	playbarLikeBtn.classList.add("d-block");
// }
// if (songTitleMobile == "") {
// 	playbarLikeBtn.classList.add("d-block");
// }

if (songTitle.textContent == false) {
	playbarLikeBtn.style.display = 'none';
}
if (songTitle.textContent == true) {
	playbarLikeBtn.style.display = 'block';
}
//Population of the fields

window.onload = () => {
	//Mobile main cards population
	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/647650/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileMainCards');
				cols.forEach((col, index) => {
					col.innerHTML += ` <div class="row g-0 d-flex justify-content-between align-items-center p-4">
					<div class="col-4">
						<img src="${trackList.data[index].album.cover_medium}" class="img-fluid imgGlow" alt="song Cover">
					</div>
					<div class="col-8">
						<div class="card-body">
							<p class="card-title text-info fs-11">Song</p>
							<h5 class="card-text text-light">${trackList.data[index].title_short}</h5>
						</div>
					</div>
				</div>
				<div class="row g-0 d-flex align-items-center justify-content-between p-4">
					<div class="col-6 d-flex align-items-center">
						<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
							data-encore-id="icon" fill="#1cb954">
							<path
								d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z">
							</path>
						</svg>
						<div>
							<i class="bi bi-three-dots-vertical text-info"></i>
						</div>
					</div>
					<div class="col-6 d-flex align-items-center justify-content-end">
						<div class="d-flex align-items-center px-3">
							<p class="card-text"><small class="text-muted">${trackList.data[index].artist.name}</small></p>
						</div>
						<button onclick="playSong()" type="button" class="btn rounded-circle bg-light d-flex align-items-center p-2">
							<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
								data-encore-id="icon">
								<path
									d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z">
								</path>
							</svg>
						</button>
					</div>
				</div>
			`;
					playSong = () => {
						//button player bar song name and player bar filler
						let songTitleMobile = document.querySelector('.songTitleMobile');
						let songArtistMobile = document.querySelector('.songArtistMobile');
						let songCoverMobile = document.querySelector('.songCoverMobile');
						let playPauseBtn2 = document.getElementById('playPauseBtn2');
						let audioPlayer2 = document.getElementById('audioPlayer2');

						songTitleMobile.textContent = trackList.data[index].title_short;
						songArtistMobile.textContent = trackList.data[index].artist.name;
						songCoverMobile.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid" style="width: 50px"/>`;
						audioPlayer2.src = trackList.data[index].preview;
						playPauseBtn2.addEventListener('click', function () {
							if (audioPlayer2.paused) {
								audioPlayer2.play();
								playPauseBtn2.innerHTML = '<i class="bi bi-pause-fill text-light fs-6"></i>';
							} else {
								audioPlayer2.pause();
								playPauseBtn2.innerHTML = '<i class="bi bi-play-fill text-light fs-6"></i>';
							}
						});
					};
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/6/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileMainCards2');
				cols.forEach((col, index) => {
					col.innerHTML += ` <div class="row g-0 d-flex justify-content-between align-items-center p-4">
					<div class="col-4">
						<img src="${trackList.data[index].album.cover_medium}" class="img-fluid imgGlow" alt="song Cover">
					</div>
					<div class="col-8">
						<div class="card-body">
							<p class="card-title text-info fs-11">Song</p>
							<h5 class="card-text text-light">${trackList.data[index].title_short}</h5>
						</div>
					</div>
				</div>
				<div class="row g-0 d-flex align-items-center justify-content-between p-4">
					<div class="col-6 d-flex align-items-center">
						<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
							data-encore-id="icon" fill="#1cb954">
							<path
								d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z">
							</path>
						</svg>
						<div>
							<i class="bi bi-three-dots-vertical text-info"></i>
						</div>
					</div>
					<div class="col-6 d-flex align-items-center justify-content-end">
						<div class="d-flex align-items-center px-3">
							<p class="card-text"><small class="text-muted">${trackList.data[index].artist.name}</small></p>
						</div>
						<button onclick="playSongB()" type="button" class="btn rounded-circle bg-light d-flex align-items-center p-2">
							<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
								data-encore-id="icon">
								<path
									d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z">
								</path>
							</svg>
						</button>
					</div>
				</div>
			`;
					playSongB = () => {
						//button player bar song name and player bar filler
						let songTitleMobile = document.querySelector('.songTitleMobile');
						let songArtistMobile = document.querySelector('.songArtistMobile');
						let songCoverMobile = document.querySelector('.songCoverMobile');
						let playPauseBtn2 = document.getElementById('playPauseBtn2');
						let audioPlayer2 = document.getElementById('audioPlayer2');

						songTitleMobile.textContent = trackList.data[index].title_short;
						songArtistMobile.textContent = trackList.data[index].artist.name;
						songCoverMobile.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid" style="width: 50px"/>`;
						audioPlayer2.src = trackList.data[index].preview;
						playPauseBtn2.addEventListener('click', function () {
							if (audioPlayer2.paused) {
								audioPlayer2.play();
								playPauseBtn2.innerHTML = '<i class="bi bi-pause-fill text-light fs-6"></i>';
							} else {
								audioPlayer2.pause();
								playPauseBtn2.innerHTML = '<i class="bi bi-play-fill text-light fs-6"></i>';
							}
						});
					};
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	//Spotlight album population
	try {
		fetch(endpoint + '395973467')
			.then((responseObj) => responseObj.json())
			.then((album) => {
				let albumName = document.getElementById('albumNameTop');
				albumName.innerHTML = `<a href="album.html?id=${album.id}" class="text-decoration-none link-light d-inline-block text-truncate"> ${album.title} </a>`;
				let albumArtist = document.getElementById('albumArtistTop');
				albumArtist.innerHTML = `<a href="artist.html?id=${album.artist.id}" class="text-decoration-none link-light d-inline-block text-truncate"> ${album.artist.name} </a>`;
				let albumCover = document.getElementById('albumCoverTop');
				albumCover.src = album.cover_big;
				let albumCoverLink = document.getElementById('albumCoverLink');
				albumCoverLink.href = `album.html?id=${album.id}`;
				let spotlightPlay = document.getElementById('spotlightPlay');
				let songTitle = document.querySelector('.songTitle');
				let songArtist = document.querySelector('.songArtist');
				let songCover = document.querySelector('.songCover');
				let playPauseBtn = document.getElementById('playPauseBtn');
				let audioPlayer = document.getElementById('audioPlayer');
				let progressBar = document.getElementById('progressBar');
				let duration = 30;

				spotlightPlay.addEventListener('click', function () {
					songTitle.textContent = album.tracks.data[0].title_short;
					songArtist.textContent = album.artist.name;
					songCover.innerHTML = `<img src="${album.cover_medium}" alt="album cover" class="img-fluid"/>`;
					audioPlayer.src = album.tracks.data[0].preview;
					playPauseBtn.addEventListener('click', function () {
						if (audioPlayer.paused) {
							audioPlayer.play();
							playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
						} else {
							audioPlayer.pause();
							playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
						}
					});
				});
				let volume = document.querySelector('#volume-control');
				volume.addEventListener('input', function (e) {
					audioPlayer.volume = e.currentTarget.value / 100;
				});
				// audioPlayer.addEventListener('timeupdate', function () {
				// 	// Calcola la percentuale di avanzamento
				// 	var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
				// 	// Aggiorna la progress bar
				// 	progressBar.style.width = `${progress}%`;
				// });
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	//Made for you population
	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/1/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.madeForYouA');
				cols.forEach((col, index) => {
					col.innerHTML += `
							<div class="card p-2 bg-secondary" onclick="madeForYouA()">
								<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
								</a>
								<div class="card-body text-start">
									<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
									<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
								</div>
								</div>
							`; //button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');
					madeForYouA = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/416239/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.madeForYouB');
				cols.forEach((col, index) => {
					col.innerHTML += `
								 
								<div class="card p-2 bg-secondary" onclick="madeForYouB()">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
										<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
									</a>
									<div class="card-body text-start">
										<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text fs-10 fw-light text-info text-truncate"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
									</div>
								`;
					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');
					madeForYouB = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/860/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.madeForYouC');
				cols.forEach((col, index) => {
					col.innerHTML += `
				
					<div class="card p-2 bg-secondary" onclick="madeForYouC()">
						<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
							<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
						</a>
						<div class="card-body text-start">
							<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
							<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
						</div>
						</div>
				`;
					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');
					madeForYouC = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/52/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.madeForYouD');
				cols.forEach((col, index) => {
					col.innerHTML += `
									 
									<div class="card p-2 bg-secondary" onclick="madeForYouD()">
										<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
											<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
										</a>
										<div class="card-body text-start">
											<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
											<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
										</div>
										</div>
									`;
					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');
					madeForYouD = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/6168800/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.madeForYouE');
				cols.forEach((col, index) => {
					col.innerHTML += `
							
								<div class="card p-2 bg-secondary" onclick="madeForYouE()">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
									</a>
									<div class="card-body text-start">
										<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text fs-10 fw-light text-info text-truncate"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');
					madeForYouE = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	//Your Episodes population
	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/4946605/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.yourEpisodesA');
				cols.forEach((col, index) => {
					col.innerHTML += `
								<div class="card p-2 bg-secondary" onclick="yourEpisodesA()">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
										<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start">
										<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>
							`;
					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');

					yourEpisodesA = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/1188/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.yourEpisodesB');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card p-2 bg-secondary" onclick="yourEpisodesB()">
										<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
											<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
										</a>
										<div class="card-body text-start">
											<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
											<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
										</div>
									</div>
								`;
					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');

					yourEpisodesB = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/402/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.yourEpisodesC');
				cols.forEach((col, index) => {
					col.innerHTML += `
					
					<div class="card p-2 bg-secondary" onclick="yourEpisodesC()">
						<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
							<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
						</a>
						<div class="card-body text-start">
							<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
							<p class="card-text fs-10 fw-light text-info text-truncate"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
						</div>
					</div>`;
					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');

					yourEpisodesC = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/1097709/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.yourEpisodesD');
				cols.forEach((col, index) => {
					col.innerHTML += `
					
					<div class="card p-2 bg-secondary" onclick="yourEpisodesD()">
						<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
							<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
						</a>
						<div class="card-body text-start">
							<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
							<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
						</div>
					</div>`;
					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');

					yourEpisodesD = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/13612387/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.yourEpisodesE');
				cols.forEach((col, index) => {
					col.innerHTML += `
									
									<div class="card p-2 bg-secondary" onclick="yourEpisodesE()">
										<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
											<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
										</a>
										<div class="card-body text-start">
											<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
											<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
										</div>
									</div>
								`;
					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let playPauseBtn = document.getElementById('playPauseBtn');
					let audioPlayer = document.getElementById('audioPlayer');

					yourEpisodesE = () => {
						songTitle.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						audioPlayer.src = trackList.data[index].preview;
						playPauseBtn.addEventListener('click', function () {
							if (audioPlayer.paused) {
								audioPlayer.play();
								playPauseBtn.innerHTML = '<i class="bi bi-pause-circle-fill text-light fs-6"></i>';
							} else {
								audioPlayer.pause();
								playPauseBtn.innerHTML = '<i class="bi bi-play-circle-fill text-light fs-6"></i>';
							}
						});
					};
					let volume = document.querySelector('#volume-control');
					volume.addEventListener('input', function (e) {
						audioPlayer.volume = e.currentTarget.value / 100;
					});
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	//Mobile episodes population
	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/647650/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileEpisodeA');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/106849212/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileEpisodeB');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/75798/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileEpisodeC');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/3469/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileEpisodeD');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/5313805/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileEpisodeE');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/892/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileEpisodeF');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/74398/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileEpisodeG');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/144227/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.mobileEpisodeH');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	//Mobile album population
	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/4101559/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.homeMainAlbumCardA');
				cols.forEach((col, index) => {
					col.innerHTML += `
								<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	//Mobile artist population

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/74357')
			.then((responseObj) => responseObj.json())
			.then((artist) => {
				console.log(artist);
				let cols = document.querySelectorAll('.homeMainArtistCardB');
				cols.forEach((col, index) => {
					col.innerHTML += `
								<div class="card border border-0 bg-dark" style="width: 150px">
								<a href="artist.html?id=${artist.id}" class="text-decoration-none link-info">
									<img src="${artist.picture}" class="card-img-top rounded-circle" alt="episodeCover">
									</a>
									
								<div class="card-body text-start px-1 mobileHomeMainCards">
									<p class="card-text text-light fs-10"><a href="artist.html?id=${artist.id}" class="text-decoration-none link-info"> ${artist.name} </a></p>
								</div>
							</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/599/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.homeMainAlbumCardB');
				cols.forEach((col, index) => {
					col.innerHTML += `
								<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/8074581462/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.homeMainAlbumCardC');
				cols.forEach((col, index) => {
					col.innerHTML += `
								<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/5062414')
			.then((responseObj) => responseObj.json())
			.then((artist) => {
				console.log(artist);
				let cols = document.querySelectorAll('.homeMainArtistCardA');
				cols.forEach((col, index) => {
					col.innerHTML += `
								<div class="card border border-0 bg-dark" style="width: 150px">
								<a href="artist.html?id=${artist.id}" class="text-decoration-none link-info">
									<img src="${artist.picture}" class="card-img-top rounded-circle" alt="episodeCover">
									</a>
									
								<div class="card-body text-start px-1 mobileHomeMainCards">
									<p class="card-text text-light fs-10"><a href="artist.html?id=${artist.id}" class="text-decoration-none link-info"> ${artist.name} </a></p>
								</div>
							</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/75491/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.homeMainAlbumCardD');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
										<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
										<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
										</a>
										<div class="card-body text-start px-1 mobileHomeMainCards">
											<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
											<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
										</div>
									</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	try {
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/181878/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.homeMainAlbumCardE');
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
										<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
										<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0" alt="episodeCover">
										</a>
										<div class="card-body text-start px-1 mobileHomeMainCards">
											<p class="card-text text-light fs-10 text-truncate">${trackList.data[index].title_short}</p>
											<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
										</div>
									</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}
};
