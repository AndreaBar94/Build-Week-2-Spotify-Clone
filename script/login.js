let loginForm = document.querySelector("form");
let loginBtn = document.getElementById("loginBtn");

loginForm.addEventListener("submit", function (event) {
	event.preventDefault();
	window.location.href = "index.html";
});

loginBtn.addEventListener("click", function () {
	loginForm.submit();
});
