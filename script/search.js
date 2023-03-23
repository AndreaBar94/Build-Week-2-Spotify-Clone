let searchInput = document.getElementById('searchInput');

let searched = () => {
	try {
		searchInput.addEventListener('keydown', function (event) {
			if (event.keyCode === 13) {
				// Invio
				event.preventDefault(); // previene il comportamento predefinito della pressione del tasto Invio
				fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + searchInput.value)
					.then((responseObj) => responseObj.json())
					.then((artist) => {
						let artistId = artist.data[0].artist.id; // prende il primo artista restituito (se presente)
						if (artist) {
							window.location.href = 'artist.html?id=' + artistId; // reindirizza alla pagina dell'artista
						}
					})
					.catch((error) => {
						console.log(error);
					});
			}
		});
	} catch (error) {
		console.log(error);
	}
};

searched();
