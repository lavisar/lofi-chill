var checkbox = document.querySelector(".input");
var playButton = document.querySelector(".play-button");
var weatherButton = document.querySelector(".weather-button");
var bg = document.querySelectorAll(".bg-video");
var sound = document.querySelector(".sound");
var playIcon = document.querySelector(".play-button img");
sound.volume = 0.5;
checkbox.addEventListener("input", () => {
	if (checkbox.checked === true && !bg[0].classList.contains("opa1")) {
		bg[2].classList.toggle("opa1");
		bg[3].classList.toggle("opa0");
	}
	if (checkbox.checked === false && !bg[1].classList.contains("opa1")) {
		bg[0].className = "bg-video";
		bg[1].className = "bg-video";
		bg[2].className = "bg-video";
		bg[3].className = "bg-video";
	}
	if (checkbox.checked === true && bg[0].classList.contains("opa1")) {
		bg[1].classList.toggle("opa1");
		bg[1].classList.toggle("opa0");
	}
	if (checkbox.checked === false && bg[1].classList.contains("opa1")) {
		bg[0].classList.add("opa1");
		bg[1].classList.toggle("opa1");
		bg[1].classList.toggle("opa0");
	}
	// if (checkbox.checked === true && )
});
var slider = document.querySelector(".slider");
var sliderIcon = document.querySelector(".slider i");
var weatherIcon = document.querySelector(".weather-button i");
checkbox.addEventListener("change", () => {
	if (checkbox.checked === true) {
		slider.style = `transform: translateX(16px); background-color: #001e3c`;
		sliderIcon.className = "fas fa-moon";
		weatherIcon.style = `color: #eee`;
	} else {
		slider.style = `transform: translateX(-4px); background-color: #f3a952`;
		sliderIcon.className = "fas fa-sun";
		weatherIcon.style = `color: #f3a952`;
	}
});
weatherButton.addEventListener("click", () => {
	if (bg[0].classList.contains("opa1") || bg[1].classList.contains("opa1")) {
		weatherIcon.className = "fas fa-cloud-rain";
	} else {
		weatherIcon.className = "fas fa-cloud";
	}
	if (sound.paused === true) {
		sound.play();
	} else {
		sound.pause();
	}
	if (checkbox.checked === true) {
		bg[1].classList.toggle("opa1");
		bg[2].classList.toggle("opa1");
		bg[2].classList.toggle("opa0");
	} else {
		bg[0].classList.toggle("opa1");
		bg[1].classList.toggle("opa0");
		bg[2].classList.toggle("opa0");
		bg[3].classList.toggle("opa0");
	}
});
var nextButton = document.querySelector(".next-button");
var prevButton = document.querySelector(".prev-button");
var musicChill = document.querySelector(".music-chill");
var sleepType = document.querySelector(".type-sleep");
var chillType = document.querySelector(".type-chill");
var typeMusicText = document.querySelectorAll(".music-type-text");
musicChill.onended = () => {
	nextButton.click();
};
sleepType.addEventListener("click", () => {
	var currentType = musicChill.getAttribute("src");
	if (currentType.includes("chill")) {
		musicChill.setAttribute("src", "./audios/musics/sleepy1.mp3");
	} else {
		musicChill.setAttribute("src", "./audios/musics/chill1.mp3");
	}
	sleepType.classList.add("active");
	typeMusicText[0].classList.add("active");
	chillType.classList.remove("active");
	typeMusicText[1].classList.remove("active");
	musicChill.pause();
	playIcon.setAttribute("src", "./images/play.svg");
});
chillType.addEventListener("click", () => {
	var currentType = musicChill.getAttribute("src");
	if (currentType.includes("chill")) {
		musicChill.setAttribute("src", "./audios/musics/sleepy1.mp3");
	} else {
		musicChill.setAttribute("src", "./audios/musics/chill1.mp3");
	}
	chillType.classList.add("active");
	typeMusicText[1].classList.add("active");
	sleepType.classList.remove("active");
	typeMusicText[0].classList.remove("active");
	musicChill.pause();
	playIcon.setAttribute("src", "./images/play.svg");
});
nextButton.addEventListener("click", () => {
	var currentSong = musicChill.getAttribute("src");
	if (currentSong.includes("chill1")) {
		musicChill.setAttribute("src", "./audios/musics/chill2.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else if (currentSong.includes("chill2")) {
		musicChill.setAttribute("src", "./audios/musics/chill3.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else if (currentSong.includes("chill3")) {
		musicChill.setAttribute("src", "./audios/musics/chill1.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else if (currentSong.includes("sleepy1")) {
		musicChill.setAttribute("src", "./audios/musics/sleepy2.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else if (currentSong.includes("sleepy2")) {
		musicChill.setAttribute("src", "./audios/musics/sleepy3.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else {
		musicChill.setAttribute("src", "./audios/musics/sleepy1.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	}
	musicChill.play();
});
prevButton.addEventListener("click", () => {
	var currentSong = musicChill.getAttribute("src");
	if (currentSong.includes("chill1")) {
		musicChill.setAttribute("src", "./audios/musics/chill3.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else if (currentSong.includes("chill3")) {
		musicChill.setAttribute("src", "./audios/musics/chill2.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else if (currentSong.includes("chill2")) {
		musicChill.setAttribute("src", "./audios/musics/chill1.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else if (currentSong.includes("sleepy1")) {
		musicChill.setAttribute("src", "./audios/musics/sleepy3.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else if (currentSong.includes("sleepy3")) {
		musicChill.setAttribute("src", "./audios/musics/sleepy2.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	} else {
		musicChill.setAttribute("src", "./audios/musics/sleepy1.mp3");
		playIcon.setAttribute("src", "./images/pause.svg");
	}
	musicChill.play();
});
playButton.addEventListener("click", () => {
	if (musicChill.paused === true) {
		musicChill.play();
		playIcon.setAttribute("src", "./images/pause.svg");
	} else {
		musicChill.pause();
		playIcon.setAttribute("src", "./images/play.svg");
	}
});
/* todo App */
var todoListBtn = document.querySelector(".todo-btn");
var todoInputBtn = document.querySelector(".todo-input-btn");
todoListBtn.addEventListener("click", () => {
	timerBtn.classList.remove("active");
	todoListBtn.classList.toggle("active");
	var todoContainer = document.querySelector(".todo-container");
	var todoInput = document.querySelector("#todo-input");
	timerContainer.classList.remove("visibleContent");
	todoContainer.classList.toggle("visibleContent");
	todoInput.focus();
});
todoInputBtn.addEventListener("click", () => {
	var storageJobs = JSON.parse(localStorage.getItem("todoList"));
	if (storageJobs === null) {
		storageJobs = [];
	} else {
		storageJobs = storageJobs;
	}
	var todoInput = document.querySelector("#todo-input");
	var todoList = [...storageJobs, todoInput.value];
	localStorage.setItem("todoList", JSON.stringify(todoList));
	renderTodoList();
	todoInput.value = "";
	todoInput.focus();
});
var handleDeleteJob = function (todo) {
	var storageJobs = JSON.parse(localStorage.getItem("todoList"));
	if (storageJobs === null) {
		storageJobs = [];
	} else {
		storageJobs = storageJobs;
	}
	var newStorageJobs = storageJobs.filter((job) => {
		return job !== todo;
	});
	localStorage.setItem("todoList", JSON.stringify(newStorageJobs));
	renderTodoList();
};
var renderTodoList = () => {
	var storageJobs = JSON.parse(localStorage.getItem("todoList"));
	var todoShow = document.querySelector(".todos-show");
	if (storageJobs === null) {
		storageJobs = [];
	} else {
		storageJobs = storageJobs;
	}
	var htmls = storageJobs.map((todo, index) => {
		return `
        <div class="todos-show-item todos-show-item${index}">
        <p class="todo-job todo-job-${index}">・ ${todo}
            <button class="delete-job-btn" onclick = "handleDeleteJob('${todo}')"><i class = "far fa-trash-alt"></i></button>
        </p>

        </div>
        `;
	});
	todoShow.innerHTML = htmls.join("");
};
renderTodoList();

/* Timer App */
var hourInput = document.querySelector("#hour-input");
var minuteInput = document.querySelector("#minute-input");
var secondInput = document.querySelector("#second-input");
var timerInputs = document.querySelectorAll(".timer-input");
var timerContainer = document.querySelector(".timer-container");
var timerBtn = document.querySelector(".timer-btn");
timerBtn.addEventListener("click", () => {
	todoListBtn.classList.remove("active");
	timerBtn.classList.toggle("active");
	var todoContainer = document.querySelector(".todo-container");
	todoContainer.classList.remove("visibleContent");
	timerContainer.classList.toggle("visibleContent");
});
timerInputs.forEach((timerInput) => {
	timerInput.onfocus = () => {
		timerInput.value = "";
	};
});
var inputContainer = document.querySelector(".input-container");
var timerStartBtn = document.querySelector(".set-timer-btn");
var timerClearBtn = document.querySelector(".cancle-timer-btn");
var timerPauseBtn = document.querySelector(".pause-timer-btn");
timerStartBtn.addEventListener("click", () => {
	handleTimer();
});
var handleTimer = () => {
	var hour = parseInt(hourInput.value);
	var minute = parseInt(minuteInput.value);
	var second = parseInt(secondInput.value);
	var totalSecond = hour * 3600 + minute * 60 + second;
	var startCountDown = setInterval(() => {
		var hours = parseInt(totalSecond / (60 * 60), 10);
		var minutes = parseInt((totalSecond % (60 * 60)) / 60, 10);
		var seconds = parseInt(totalSecond % 60, 10);
		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		inputContainer.innerHTML =
			// hours + ":" + minutes + ":" + seconds;
			`
            <div class="timer-show">
                <h3 class="hours">${hours}</h3>
                <h3 class="minutes">${minutes}</h3>
                <h3 class="seconds">${seconds}</h3>
            </div>
            `;
		if (--totalSecond < 0) {
			totalSecond = 0;
			clearInterval(startCountDown);
			console.log("stop");
			var audio = new Audio(
				"https://cdn.tainhacchuong24h.com/uploads/f15000/báo-thức-mèo-kêu.mp3"
			);
			audio.loop = true;
			audio.play();
			var newBtn = document.createElement("button");
			var newBtnIcon = document.createElement("i");
			newBtnIcon.className = "fas fa-volume-mute";
			newBtn.appendChild(newBtnIcon);
			newBtn.className = "new-btn";
			var timerShow = document.querySelector(".timer-show");
			timerShow.appendChild(newBtn);
			newBtn.onclick = () => {
				audio.pause();
				newBtn.remove();
			};
		}
	}, 1000);
	timerPauseBtn.addEventListener("click", () => {
		clearInterval(startCountDown);
		hour = parseInt(document.querySelector(".hours").textContent);
		minute = parseInt(document.querySelector(".minutes").textContent);
		second = parseInt(document.querySelector(".seconds").textContent);
		totalSecond = hour * 3600 + minute * 60 + second;
		startCountDown = setInterval(() => {
			var hours = parseInt(totalSecond / (60 * 60), 10);
			var minutes = parseInt((totalSecond % (60 * 60)) / 60, 10);
			var seconds = parseInt(totalSecond % 60, 10);
			hours = hours < 10 ? "0" + hours : hours;
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			inputContainer.innerHTML = `
            <div class="timer-show">
            <h3 class="hours">${hours}</h3>
                <h3 class="minutes">${minutes}</h3>
                <h3 class="seconds">${seconds}</h3>
        </div>
        `;
			if (--totalSecond < 0) {
				totalSecond = 0;
				clearInterval(startCountDown);
				var audio = new Audio(
					"https://cdn.tainhacchuong24h.com/uploads/f15000/báo-thức-mèo-kêu.mp3"
				);
				audio.play();
				var newBtn = document.createElement("button");
				var newBtnIcon = document.createElement("i");
				newBtnIcon.className = "fas fa-volume-mute";
				newBtn.appendChild(newBtnIcon);
				newBtn.className = "new-btn";
				var timerShow = document.querySelector(".timer-show");
				timerShow.appendChild(newBtn);
				newBtn.onclick = () => {
					audio.pause();
					newBtn.remove();
				};
			}
		}, 1000);
	});
	timerClearBtn.addEventListener("click", () => {
		clearInterval(startCountDown);
	});
};
