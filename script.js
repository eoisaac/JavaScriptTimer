const timerDisplay = document.querySelector('#timerDisplay')
const btnStart = document.querySelector('#start');
const btnPause = document.querySelector('#pause');
const btnReset = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let chronometer;

function leftZero (num) {
	return num <= 9 ? `0${num}` : num;
}

function startCount(){
	chronometer = setInterval(function () {
		timerDisplay.style.color = 'var(--white-color)';

		if (seconds < 60){ seconds++; }

		if (seconds == 60){ seconds = 0; minutes++; }

		if (minutes == 60){ minutes = 0; hours++; }

		timerDisplay.innerHTML = `${leftZero(hours)}:${leftZero(minutes)}:${leftZero(seconds)}`;

	}, 1000);
}

function pauseCount(){
	setTimeout(function(){
		clearInterval(chronometer);
		timerDisplay.style.color = 'var(--red-color)';
	}, 0);
}

function resetCount(){
	setTimeout(function(){
		clearInterval(chronometer);
		timerDisplay.style.color = 'var(--white-color)';
	}, 0);

	seconds =0;
	minutes = 0;
	hours = 0;

	timerDisplay.innerHTML = `${leftZero(hours)}:${leftZero(minutes)}:${leftZero(seconds)}`;
}

btnStart.addEventListener('click', function(event){
	startCount();
	btnStart.innerHTML = 'Start'
	setTimeout(function(){
		btnStart.disabled = true;
	}, 0);
});

btnPause.addEventListener('click', function(event){
	pauseCount();
	btnStart.disabled = false;
	btnStart.innerHTML = 'Resume'
});

btnReset.addEventListener('click', function(event){
	resetCount();
	btnStart.disabled = false;
	btnStart.innerHTML = 'Start'
});