// for test purposes
// let randomArtist = Math.floor(Math.random() * 1000) + 1;
// let randomAlbum = Math.floor(Math.random() * 10000) + 40000;
// const endpointArtist = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist;
// const endpointAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/' + randomAlbum;
// const endpointTrackList = 'https://striveschool-api.herokuapp.com/api/deezer/artist/' + randomArtist + '/top?limit=50';
const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

//Population of the fields

window.onload = () => {
	//Spotlight album population
	try {
		fetch(endpoint + "102501")
			.then((responseObj) => responseObj.json())
			.then((album) => {
				let albumName = document.getElementById("albumNameTop");
				albumName.textContent = album.title;
				let albumArtist = document.getElementById("albumArtistTop");
				albumArtist.innerHTML = `<a href="artist.html?id=${album.artist.id}" class="text-decoration-none link-light"> ${album.artist.name} </a>`;
				let albumCover = document.getElementById("albumCoverTop");
				albumCover.src = album.cover_big;
				console.log(endpointAlbum);
			});
	} catch (error) {
		console.log("ERROR" + error);
	}

	//Made for you population
	try {
		fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/1/top?limit=50")
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll(".madeForYou");
				cols.forEach((col, index) => {
					col.innerHTML += `
							<div class="card p-2 bg-secondary">
							<img src="${trackList.data[index].album.cover_medium}" class="card-img-top" alt="${trackList.data[index].title}">
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
				});
			});
	} catch (error) {
		console.log("ERROR" + error);
	}

	//Your Episodes population
	try {
		fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/2/top?limit=50")
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll(".yourEpisodes");
				cols.forEach((col, index) => {
					col.innerHTML += `
							<div class="card p-2 bg-secondary">
							<img src="${trackList.data[index].album.cover_medium}" class="card-img-top" alt="${trackList.data[index].title}">
							<div class="card-body text-start">
								<p class="card-text fs-10 text-light">${trackList.data[index].title_short}</p>
								<p class="card-text fs-10 fw-light text-info"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
							</div>
							</div>`;
				});
			});
	} catch (error) {
		console.log("ERROR" + error);
	}

	try {
		fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/1/top?limit=50")
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll(".mobileEpisode");
				cols.forEach((col, index) => {
					col.innerHTML += `
									<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log("ERROR" + error);
	}

	try {
		fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/2205/top?limit=50")
			.then((responseObj) => responseObj.json())
			.then((trackList) => {
				console.log(trackList);
				let cols = document.querySelectorAll(".homeMainAlbumCard");
				cols.forEach((col, index) => {
					col.innerHTML += `
								<div class="card border border-0 bg-dark" style="width: 150px">
									<a href="album.html?id=${trackList.data[index].album.id}" class="text-decoration-none link-info">
									<img src="${trackList.data[index].album.cover_medium}" class="card-img-top rounded-0"alt="episodeCover">
									</a>
									<div class="card-body text-start px-1 mobileHomeMainCards">
										<p class="card-text text-light fs-10">${trackList.data[index].title_short}</p>
										<p class="card-text text-info fs-11 fw-light"><a href="artist.html?id=${trackList.data[index].artist.id}" class="text-decoration-none link-info"> ${trackList.data[index].artist.name} </a></p>
									</div>
								</div>`;
				});
			});
	} catch (error) {
		console.log("ERROR" + error);
	}

	try {
		fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/30")
			.then((responseObj) => responseObj.json())
			.then((artist) => {
				console.log(artist);
				let cols = document.querySelectorAll(".homeMainArtistCard");
				cols.forEach((col, index) => {
					col.innerHTML += `
								<div class="card border border-0 bg-dark" style="width: 150px">
								<a href="album.html?id=${artist.id}" class="text-decoration-none link-info">
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
		console.log("ERROR" + error);
	}
};
