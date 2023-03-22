let randomArtist = Math.floor(Math.random() * 1000) + 1;
let randomAlbum = Math.floor(Math.random() * 100000) + 10000000;
const endpointArtist = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist;
const endpointAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/' + randomAlbum;
const endpointTrackList = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist + '/top?limit=50';
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get('id');

//Population of the fields

window.onload = () => {
	//Spotlight album population
	try {
		fetch(endpointAlbum)
			.then((responseObj) => responseObj.json())
			.then((album) => {
				let albumName = document.getElementById('albumNameTop');
				albumName.textContent = album.title;
				let albumArtist = document.getElementById('albumArtistTop');
				albumArtist.textContent = album.artist.name;
				let albumCover = document.getElementById('albumCoverTop');
				albumCover.src = album.cover_big;
				console.log(endpointAlbum);
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	//Made for you population
	try {
		fetch(endpointTrackList)
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.madeForYou');
				cols.forEach((col, index) => {
					col.innerHTML += `
							<div class="card p-2 bg-secondary">
							<img src="${trackList.data[index].album.cover_medium}" class="card-img-top" alt="${trackList.data[index].title}">
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info">${trackList.data[index].artist.name}</p>
							</div>
							</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}

	//Your Episodes population
	try {
		fetch(endpointTrackList)
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll('.yourEpisodes');
				cols.forEach((col, index) => {
					col.innerHTML += `
							<div class="card p-2 bg-secondary">
							<img src="${trackList.data[index].album.cover_medium}" class="card-img-top" alt="${trackList.data[index].title}">
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info">${trackList.data[index].artist.name}</p>
							</div>
							</div>`;
				});
			});
	} catch (error) {
		console.log('ERROR' + error);
	}
};
