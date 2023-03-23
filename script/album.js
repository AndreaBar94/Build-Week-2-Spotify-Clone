// for tests purposes
// let casualId = Math.floor(Math.random() * 70000) + 1;
// let randomAlbum = Math.floor(Math.random() * 10000) + 40000;
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
const endpoint = " https://striveschool-api.herokuapp.com/api/deezer/album/" + selectedId;
const tracklist = " https://striveschool-api.herokuapp.com/api/deezer/album/" + selectedId;

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
        let coverPic = document.getElementById("coverPic");
        coverPic.src = `${album.cover}`;
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
        olAlbum.setAttribute("id", "popularList");
        containerAlbum.appendChild(olAlbum);
        trackslist.tracks.data.forEach((track, index) => {
          const liAlbum = document.createElement("li");
          liAlbum.classList.add("py-3");
          let duration = track.duration;
          let minutes = Math.floor(duration / 60);
          let seconds = Math.floor(duration % 60)
            .toString()
            .padStart(2, "0");
          let formattedDuration = `${minutes}:${seconds}`;
          liAlbum.innerHTML += `
            <div id="AlbumList" class="row align-items-start">
              <div id="album-title" class="col12 col-md-5 mb-3">
              <button id="trackBtn" type="button" class="btn text-light text-start trackBtn align-self-center text-truncate">${track.title}</button>
                <br>
                <a href="artist.html?id=${track.artist.id}" class="album-artist text-info text-decoration-none">${track.artist.name}</a>
              </div>
              <div class="col-4 d-none d-md-block text-info">
                <p class="riproduction">${track.rank}</p>
              </div>
              <div class="col-2 d-none d-md-block text-info">
                <p class="duration">${formattedDuration}</p>
              </div>
            </div>
          `;
          olAlbum.appendChild(liAlbum);
          //button player bar song name and player bar filler
          let songTitle = document.querySelector(".songTitle");
          let songArtist = document.querySelector(".songArtist");
          let songCover = document.querySelector(".songCover");
          let songTitleMobile = document.querySelector(".songTitleMobile");
          let songArtistMobile = document.querySelector(".songArtistMobile");
          let songCoverMobile = document.querySelector(".songCoverMobile");
          let trackBtn = document.querySelector("#trackBtn");
          trackBtn.addEventListener("click", function () {
            songTitle.textContent = track.title_short;
            songTitleMobile.textContent = track.title_short;
            songArtist.textContent = track.artist.name;
            songArtistMobile.textContent = track.artist.name;
            songCover.innerHTML = `<img src="${track.album.cover_medium}" alt="album cover" class="img-fluid" />`;
            songCoverMobile.innerHTML = `<img src="${track.album.cover_medium}" alt="album cover" class="img-fluid" style="width: 50px" />`;
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
