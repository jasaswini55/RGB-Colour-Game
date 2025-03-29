var color_arr = [];
var colors = document.querySelectorAll(".square");
var top_contain_color = document.querySelector("h1");
var msg = document.querySelector("#message");
var change_again = document.querySelector("#new");
var btn_2 = document.getElementById("btnTwo");

btn_2.onclick = function() {
	window.location.href="colorGameInstructions.html";
};

change_again.addEventListener("click", function() {
	change_again.textContent = "NEW COLORS";
	color_arr = [];
	i = 0;
	u = 0;
	location.reload();
	return false;
});

function makeSameColor(color) {
	top_contain_color.style.backgroundColor = color;
	for (var a = 0; a < colors.length; a++) {
		colors[a].style.backgroundColor = color;
	}
}

function run_game() {
	for (var i = 0; i < colors.length; i++) {
		var x = Math.floor(Math.random() * 255);
		var y = Math.floor(Math.random() * 255);
		var z = Math.floor(Math.random() * 255);
		var color = "rgb(" + x + ", " + y + ", " + z + ")";
		color_arr.push(color);
		colors[i].style.backgroundColor = color;
	}

	var picked_index_in_arr = Math.floor(Math.random() * colors.length);
	var picked_color = color_arr[picked_index_in_arr];
	var color_listed = document.getElementById("rgb-color");
	color_listed.textContent = picked_color;


	for (var u = 0; u < colors.length; u++) {
		colors[u].addEventListener("click", function() {
			var clicked_color = this.style.backgroundColor;

			if (clicked_color == picked_color) {
				msg.textContent = "Correct!";
				makeSameColor(picked_color); //calls another f'n which makes all of it the same color
				change_again.textContent = "Play Again";
			} else {
				msg.textContent = "Keep Trying!";
				this.style.backgroundColor = "#232323";
			}
		});
	}

}

run_game();
