let loginForm = document.querySelector("form");
let loginBtn = document.getElementById("loginBtn");
let userName = document.getElementById("userName");
let users = [];

loginForm.addEventListener("submit", function (event) {
	event.preventDefault();
	if (sessionStorage.getItem("Username")) {
		users = JSON.parse(sessionStorage.getItem("Username"));
	}
	users.push(userName.value);
	sessionStorage.setItem("Username", JSON.stringify(users));
	window.location.href = "index.html";
});

loginBtn.addEventListener("click", function () {
	loginForm.submit();
});
