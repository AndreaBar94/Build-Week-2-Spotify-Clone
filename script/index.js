// for test purposes
// let randomArtist = Math.floor(Math.random() * 1000) + 1;
// let randomAlbum = Math.floor(Math.random() * 10000) + 40000;
// const endpointArtist = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist;
// const endpointAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/' + randomAlbum;
// const endpointTrackList = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist + '/top?limit=50';
const endpoint = 'https://striveschool-api.herokuapp.com/api/deezer/album/';
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get('id');

//Population of the fields

window.onload = () => {
	//Spotlight album population
	try {
		fetch(endpoint + '77068962')
			.then((responseObj) => responseObj.json())
			.then((album) => {
				let albumName = document.getElementById('albumNameTop');
				albumName.textContent = album.title;
				let albumArtist = document.getElementById('albumArtistTop');
				albumArtist.innerHTML = `<a href="artist.html?id=${album.artist.id}" class="text-decoration-none link-light d-inline-block text-truncate"> ${album.artist.name} </a>`;
				let albumCover = document.getElementById('albumCoverTop');
				albumCover.src = album.cover_big;
				console.log(endpointAlbum);
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
							
							<button id="trackBtn" class="btn"> 
							<div class="card p-2 bg-secondary">
								<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
								</a>
								<div class="card-body text-start">
									<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
									<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
								</div>
								</div>
							</button>
							`;

					//button player bar song name and player bar filler
					let songTitle = document.querySelector('.songTitle');
					let songArtist = document.querySelector('.songArtist');
					let songCover = document.querySelector('.songCover');
					let songTitleMobile = document.querySelector('.songTitleMobile');
					let songArtistMobile = document.querySelector('.songArtistMobile');
					let songCoverMobile = document.querySelector('.songCoverMobile');
					let trackBtn = document.getElementById('trackBtn');
					trackBtn.addEventListener('click', function () {
						songTitle.textContent = trackList.data[index].title_short;
						songTitleMobile.textContent = trackList.data[index].title_short;
						songArtist.textContent = trackList.data[index].artist.name;
						songArtistMobile.textContent = trackList.data[index].artist.name;
						songCover.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid"/>`;
						songCoverMobile.innerHTML = `<img src="${trackList.data[index].album.cover_medium}" alt="album cover" class="img-fluid" style="width: 50px"/>`;
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
							<div class="card p-2 bg-secondary">
							<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
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
							<div class="card p-2 bg-secondary">
							<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
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
							<div class="card p-2 bg-secondary">
							<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
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
							<div class="card p-2 bg-secondary">
							<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
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
							<div class="card p-2 bg-secondary">
							<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
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
							<div class="card p-2 bg-secondary">
							<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
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
							<div class="card p-2 bg-secondary">
							<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
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
							<div class="card p-2 bg-secondary">
							<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
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
							<div class="card p-2 bg-secondary">
							<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light text-truncate">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
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
									<img src="${artist.picture}" class="card-img-top rounded-circle"
									</a>
									alt="episodeCover">
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
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/8074581462/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.homeMainAlbumCardC');
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
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/5062414')
			.then((responseObj) => responseObj.json())
			.then((artist) => {
				console.log(artist);
				let cols = document.querySelectorAll('.homeMainArtistCardA');
				cols.forEach((col, index) => {
					col.innerHTML += `
								<div class="card border border-0 bg-dark" style="width: 150px">
								<a href="artist.html?id=${artist.id}" class="text-decoration-none link-info">
									<img src="${artist.picture}" class="card-img-top rounded-circle"
									</a>
									alt="episodeCover">
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
		fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/181878/top?limit=50')
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.homeMainAlbumCardE');
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
};
