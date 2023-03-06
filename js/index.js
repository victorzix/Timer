/** * Program */
function timer() {
  /* * Getting time from Date() Object  */
  function getTime(segundos) {
    const data = new Date(segundos * 1000);
    /* ? Formatting time */
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }
  /* * Getting timer from HTML and setting it to 0 */
  const timer = document.querySelector(".timer");
  let start = document.getElementById('start')
  let seconds = 0;
  let interval;

  /* * Creating an interval to increment time and adding 1 second to it */
  function startTimer() {
    interval = setInterval(() => {
      seconds++;
      timer.innerHTML = getTime(seconds);
    }, 1000);
  }

  /* * Adding a listener in the document */
  document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("start")) {
      timer.classList.remove("paused");
      clearInterval(interval);
      startTimer();
      start.innerText = "Start"
    }
    if (el.classList.contains("pause")) {
      clearInterval(interval);     
      if(seconds != 0){
        timer.classList.add("paused");
        start.innerText = "Resume"
      }
    }
    if (el.classList.contains("restart")) {
      clearInterval(interval);
      timer.innerHTML = "00:00:00";
      timer.classList.remove("paused");
      seconds = 0;
      start.innerText = "Start"
    }
  });
}

/* * Initializing the timer*/
timer();