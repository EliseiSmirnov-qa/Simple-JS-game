var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("\nПривет, я Джон Сильвер! А Это мини игра морской бой :) \n\nПредставь, что в 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3-х палубный корабль врага. Твоя задача потопить его за меньшее количество попыток. \n\nПали изо всех пушек! Стреляй! (введи число 0-6): 💥");
	if (guess < 0 || guess > 6) {
		alert("\nВводи валидное значение 0-6! Якорь в глотку!");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("\nПопал! Разрази меня гром! 💥");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("\nОтлично! Корабль потоплен! 💥💥💥");
			}
		} else {
			alert("\nМимо! Тысяча чертей! 🤪");
		}
	}
}

var stats = "\nТы справился за " + guesses + " попыток. Твоя точность равна " + (3 / guesses) + "\n\nПопутного ветра, заплывай ещё! 🤗 ";
alert(stats);