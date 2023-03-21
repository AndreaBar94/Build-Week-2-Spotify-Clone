//id generator for casual artists
let casualId = Math.floor(Math.random() * 1000) + 1;
const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + casualId;
const trackList = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + casualId + "/top?limit=50";
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

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
				artistName.textContent = artist.name;
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
                        <div class="row row-cols-3">
                            <div class="col-6 fs-10">
                                <img src="${track.album.cover_small}" alt="" width="35px" />
                                <span>${track.title}</span>
                            </div>
                            <div class="col-3">
                                <span>Rank ${track.rank}</span>
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
