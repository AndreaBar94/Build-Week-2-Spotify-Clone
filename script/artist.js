//id generator for casual artists
let casualId = Math.floor(Math.random() * 1000) + 1;
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
					let duration = (track.duration / 60).toFixed(2) + " minuti";
					liElement.innerHTML = `
                        <div class="row row-cols-3 align-items-center">
                            <div class="col-6 fs-10">
                                <img src="${track.album.cover_small}" alt="" width="35px" class="d-none d-md-inline"/>
                                <button type="button" class="btn text-light">${track.title}</button>
                            </div>
                            <div class="col-3">
                                <span class="d-none d-md-inline">Rank ${track.rank}</span>
                            </div>
                            <div class="col-3">
                                <span>${duration}</span>
                            </div>
                        </div>
                    `;
					popularList.appendChild(liElement);
				});
			});
	} catch (error) {
		console.log("errore" + error);
	}
};
//button player bar song name and player bar filler
