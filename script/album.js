let casualId = Math.floor(Math.random() * 70000) + 1;
console.log(casualId);
const endpoint = " https://striveschool-api.herokuapp.com/api/deezer/album/" + casualId;
const tracklist = " https://striveschool-api.herokuapp.com/api/deezer/album/" + casualId + "/top?limit=50";
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
        imgAlbum.src = "";
        titleAlbum.textContent = album.title;
      });
  } catch (error) {
    console.log("errore" + error);
  }
};
