const prompt = require('prompt-sync')();
let loop = true;
while (loop) {
	let select = prompt('Select (1,2) => 1.Manual 2.From Current time : ');

	let time;
	if (select == 1) {
		time = prompt('Enter Time (18:05) : ');
	} else {
		let date = new Date();
		time = `${date.getHours()}:${date.getMinutes()}`;
	}
	let StudyTime = parseInt(prompt('Enter StudyTime : '));
	let RestTime = parseInt(prompt('Enter RestTime : '));
	let sessions = parseInt(prompt('Enter sessions : '));

	let [hour, minute] = time.split(':');

	let pomodoro = StudyTime + RestTime; // 70 - 10

	let schedule = [time];
	for (let i = 0; i < sessions; i++) {
		hour = parseInt(hour) + parseInt(pomodoro / 60);
		minute = parseInt(minute) + parseInt(pomodoro % 60);
		if (minute >= 60) {
			minute -= 60;
			hour++;
		}
		if (hour >= 24) {
			hour -= 24;
		}
		if (minute < 10) schedule.push(`${hour}:0${minute}`);
		else schedule.push(`${hour}:${minute}`);
	}
	for (let i = 0; i < schedule.length - 1; i++) {
		console.log(schedule[i], schedule[i + 1]);
	}

	let fullStudyTime = (sessions * StudyTime) / 60;
	let fractionStudyTime = fullStudyTime - Math.floor(fullStudyTime);
	console.log(
		`Full Study time ${fullStudyTime - fractionStudyTime}:${Math.ceil(
			fractionStudyTime * 60
		)} `
	);
	let end = prompt('wanna finish ? Yes or No : ');
	if (end.toLowerCase() === 'yes') {
		break;
	} else {
		console.clear();
		continue;
	}
}
