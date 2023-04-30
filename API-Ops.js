var actors = [];
var output = document.getElementById("actorsname");
function getActor(birthdate) {
	const xhr = new XMLHttpRequest();
	if (birthdate == "")
		return;
	var date = new Date(birthdate);
	var day = date.getDate();
	var month = date.getMonth() + 1;



	xhr.addEventListener("readystatechange", function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log({ month, day });
			console.log(this.response);
			actors = JSON.parse(xhr.response);
			console.log(actors[0]);
			if (actors.length == 0) {
				output.innerHTML = "<p>No actor found</p>"
			}
			for (let index = 0; index < actors.length; index++) {
				let nm = actors[index].substr(6, 9);
				console.log(nm);
				setTimeout(() => {
					getActorName(nm);
				}, index * 500);
			}
		}
	});

	xhr.open("GET", `https://online-movie-database.p.rapidapi.com/actors/list-born-today?month=${month}&day=${day}`);
	xhr.setRequestHeader("X-RapidAPI-Key", "fdd43997ccmsh0c228d32c3348f5p165a7djsn16986ed21d91");
	xhr.setRequestHeader("X-RapidAPI-Host", "online-movie-database.p.rapidapi.com");
	xhr.send();


}

function hello() {
	console.log("hello");

}
var actorNames = [];

let box = ``;
function getActorName(nm) {

	var xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {

		if (xhr.readyState == 4 && xhr.status == 200) {
			let obj = JSON.parse(xhr.response);

			actorNames.push(obj["name"]);
			console.log(obj["name"]);
			box += `<li>${obj["name"]}</li>`;
			console.log({ box });
			console.log({ actorNames });

			output.innerHTML = box;
		}
	});
	xhr.open("GET", `https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=${nm}`);
	xhr.setRequestHeader("X-RapidAPI-Key", "fdd43997ccmsh0c228d32c3348f5p165a7djsn16986ed21d91");
	xhr.setRequestHeader("X-RapidAPI-Host", "online-movie-database.p.rapidapi.com");
	xhr.send();

}
