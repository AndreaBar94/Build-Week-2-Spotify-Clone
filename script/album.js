let casualId = Math.floor(Math.random() * 70000) + 1;
let randomAlbum = Math.floor(Math.random() * 10000) + 40000;
console.log(casualId);
const endpoint = " https://striveschool-api.herokuapp.com/api/deezer/album/" + randomAlbum;
const tracklist = " https://striveschool-api.herokuapp.com/api/deezer/album/" + randomAlbum;
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");

window.onload = () => {
  try {
    fetch(endpoint)
      .then(responseObj => responseObj.json())
      .then(album => {
        console.log(album);
        let imgAlbum = document.querySelector("#imgAlbum");
        let titleAlbum = document.querySelector("#titleAlbum");
        let NumTrack = document.getElementById("NumTrack");
        let tipe = document.getElementById("tipe");
        imgAlbum.src = `${album.cover_medium}`;
        titleAlbum.textContent = album.title;
        NumTrack.textContent = album.nb_tracks + " brani";
        tipe.textContent = album.record_type;
      });

    fetch(tracklist)
      .then(responseList => responseList.json())
      .then(trackslist => {
        console.log(trackslist);

        let containerAlbum = document.getElementById("containerAlbum");
        const olAlbum = document.createElement("ol");
        containerAlbum.appendChild(olAlbum);
        trackslist.tracks.data.forEach((track, index) => {
          const liAlbum = document.createElement("li");
          liAlbum.classList.add("mt-2");
          let duration = (track.duration / 60).toFixed(2) + " minuti";
          liAlbum.innerHTML += `
            <div id="AlbumList" class="row align-items-start">
              <div id="album-title" class="col12 col-md-5 mb-3">
                <a href="#" class="card-title mb-2" style="color: white">
                  ${track.title}
                </a>
                <br>
                <a href="artist.html?id= ${track.artist.Id}" class="album-artist text-info">${track.artist.name}</a>
              </div>
              <div class="col-4 d-none d-md-block text-info">
                <p class="riproduction">2819873</p>
              </div>
              <div class="col-2 d-none d-md-block text-info">
                <p class="duration">${duration}</p>
              </div>
            </div>
          `;
          olAlbum.appendChild(liAlbum);
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
