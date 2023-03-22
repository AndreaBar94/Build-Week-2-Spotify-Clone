//id generator for casual artists for tests purposes
// let casualId = Math.floor(Math.random() * 1000) + 1;
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + selectedId;
const trackList = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + selectedId + "/top?limit=50";

// https://rapidapi.com/deezerdevs/api/deezer-1 documentazione
//fill the html with artist info
window.onload = () => {
	try {
		fetch(endpoint)
			.then((responseObj) => responseObj.json())
			.then((artist) => {
				let artistName = document.getElementById("artistName");
				let followers = document.getElementById("followers");
				let artistImg = document.getElementById("artistThumbnail");
				let monthlyListener = document.getElementById("monthlyListener");
				let artistImgLikes = document.getElementById("artistImgLikes");
				let artistImgLikes2 = document.getElementById("artistImgLikes2");
				let artistLikeName = document.getElementById("artistLikeName");
				artistName.textContent = artist.name;
				artistLikeName.textContent = artist.name;
				artistImgLikes.src = artist.picture;
				artistImgLikes2.src = artist.picture;
				followers.textContent = artist.nb_fan + " followers";
				monthlyListener.textContent = artist.nb_fan + " ascoltatori mensili";
				artistImg.style.backgroundImage = `url(${artist.picture_xl})`;
			});

		fetch(trackList)
			.then((responseList) => responseList.json())
			.then((trackList) => {
				console.log(trackList);
				let popularList = document.getElementById("popularList");
				popularList.innerHTML = "";
				trackList.data.forEach((track) => {
					let liElement = document.createElement("li");
					liElement.classList.add("py-3");
					let duration = track.duration;
					let minutes = Math.floor(duration / 60);
					let seconds = Math.floor(duration % 60)
						.toString()
						.padStart(2, "0");
					let formattedDuration = `${minutes}:${seconds}`;
					liElement.innerHTML = `
						<div class="row row-cols-3 justify-content-center">
						<div class="col-6 fs-11 d-flex align-items-center">
							<img src="${track.album.cover_small}" alt="cover" width="35px" class="d-none d-md-inline"/>
							<button type="button" class="btn text-light text-start trackBtn align-self-center">${track.title}</button>
						</div>
						<div class="col-3 d-flex align-items-center justify-content-center">
							<span class="d-none d-md-inline align-self-center">Rank ${track.rank}</span>
						</div>
						<div class="col-3 d-flex align-items-center justify-content-center">
							<span class="align-self-center">${formattedDuration}</span>
						</div>
					</div>
				
                    `;
					popularList.appendChild(liElement);

					//button player bar song name and player bar filler
					let songTitle = document.querySelector(".songTitle");
					let songArtist = document.querySelector(".songArtist");
					let songCover = document.querySelector(".songCover");
					let songTitleMobile = document.querySelector(".songTitleMobile");
					let songArtistMobile = document.querySelector(".songArtistMobile");
					let songCoverMobile = document.querySelector(".songCoverMobile");
					let trackBtn = liElement.querySelector(".trackBtn");
					trackBtn.addEventListener("click", function () {
						songTitle.textContent = track.title;
						songTitleMobile.textContent = track.title;
						songCover.innerHTML = `
						<img src="${track.album.cover_medium}" alt="album cover" class="img-fluid" />
						`;
						songCoverMobile.innerHTML = `
						<img src="${track.album.cover_medium}" alt="album cover" class="img-fluid" style="width: 50px" />
						`;
						if (track.contributors && track.contributors.length > 0) {
							songArtist.textContent = track.contributors[0].name;
							songArtistMobile.textContent = track.contributors[0].name;
						} else {
							songArtist.textContent = "";
							songArtistMobile.textContent = "";
						}
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
