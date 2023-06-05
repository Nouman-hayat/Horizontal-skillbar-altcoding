const progressBars = document.querySelectorAll(".progress-bar");
let interval = 1000
for (let progressBar of progressBars) {
	
		let startValue = 0;
		let endValue = parseInt(progressBar.getAttribute("data-percent"));
		let duration = Math.floor(interval / endValue);
		let counter = setInterval(function () {
			startValue += 1;
			progressBar.textContent = startValue;
			progressBar.style.width = startValue + '%';
			if (startValue == endValue) {
				clearInterval(counter);
			}
		}, duration);
}
