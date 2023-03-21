let randomArtist = Math.floor(Math.random() * 1000) + 1;
let randomAlbum = Math.floor(Math.random() * 100000) + 10000000;
const endpointArtist = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist;
const endpointAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/' + randomAlbum;
const endpointTrackList = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist + '/top?limit=50';
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get('id');

//Population of the fields

window.onload = () => {
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
	};

	try {
		fetch(endpointTrackList)
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let track = trackList;
				console.log(track); 
				let cols = document.getElementById('madeForYou');
				cols.forEach((col) => {
					col.innerHTML = `<button class="btn">
                                            <div class="card p-2 bg-secondary">
                                            <img src="${track.album.cover_small}" class="card-img-top"
                                                alt="${track.title}">
                                            <div class="card-body text-start">
                                                <p class="card-text fs-10 text-light">${track.title}</p>
                                                <p class="card-text fs-10 fw-light text-info">${track.artist.name}</p>
                                            </div>
                                            </div>
                                    	</button>`;
				});
				
			});
	} catch (error) {
		console.log('ERROR' + error);
	};
}


//  