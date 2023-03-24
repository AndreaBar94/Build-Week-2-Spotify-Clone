let searchInput = document.getElementById('searchInput');

let searched = () => {
	try {
		searchInput.addEventListener('keydown', function (event) {
			if (event.keyCode === 13) {
				// Invio
				event.preventDefault(); // previene il comportamento predefinito della pressione del tasto Invio
				fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + searchInput.value)
					.then((responseObj) => responseObj.json())
					.then((artist) => {
						let searchMainCard = document.getElementById('homeMainCard');
						if (artist) {
							searchMainCard.innerHTML = `
										<div class=" row g-0">
								<div class="col-md-3">
									<a href="artist.html?id=${artist.data[0].artist.id}" id="albumCoverLink"><img src="${artist.data[0].artist.picture_xl}" class="img-fluid rounded-start" alt="artist cover"
											id="albumCoverTop" /></a>
								</div>
								<div class="col-md-9 text-truncate">
									<div class="card-body p-0 px-4 text-truncate">
										<h4 class="card-text fw-bold text-light py-2">${artist.data[0].artist.name}</h4>
										<a href="album.html?id=${artist.data[0].album.id}" class="text-decoration-none"><p class="text-light" >${artist.data[0].title}<p/></a>
										<a href="album.html?id=${artist.data[0].album.id}" class="text-decoration-none"><p class="text-light" >${artist.data[0].album.title}<p/></a>
									</div>
								</div>
							</div>
							`;
						} else {
							searchMainCard.innerHTML = '';
						}
					});
			}
		});
	} catch (error) {
		console.log(error);
	}
};
searched();

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
