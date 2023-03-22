let casualId = Math.floor(Math.random() * 70000) + 1;
console.log(casualId);
const endpoint = " https://striveschool-api.herokuapp.com/api/deezer/album/" + casualId;
const tracklist = " https://striveschool-api.herokuapp.com/api/deezer/album/" + casualId;
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
          liAlbum.innerHTML += `
            <div id="AlbumList" class="row align-items-start">
              <div id="album-title" class="col-5">
                <a href="#" class="card-title" style="color: white">
                  ${track.title}
                </a>
                <p class="album-artist text-info">${track.artist.name}</p>
              </div>
              <div class="col-4 d-none d-md-block text-info">
                <p class="riproduction">18278</p>
              </div>
              <div class="col-2 d-none d-md-block text-info">
                <p class="duration">1:28</p>
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
