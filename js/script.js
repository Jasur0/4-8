const tabsItem = document.querySelectorAll(".tabsItem");
const tabsContent = document.querySelectorAll(".tabsContentItem ");

for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener("click", function () {
    for (let j = 0; j < tabsItem.length; j++) {
      tabsItem[j].classList.remove("active");
      tabsContent[j].classList.remove("active");
    }
    tabsItem[i].classList.add("active");
    tabsContent[i].classList.add("active");
  });
}

// soat

const s = document.querySelector(".s");
const m = document.querySelector(".m");
const h = document.querySelector(".h");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");

function soat() {
  let time = new Date();
  let sec = time.getSeconds() * 6;
  let min = time.getMinutes() * 6;
  let hour = time.getHours() * 30;

  s.style = `transform:rotate(${sec}deg);`;
  m.style = `transform:rotate(${min}deg);`;
  h.style = `transform:rotate(${hour}deg);`;

  hours.innerHTML =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  minutes.innerHTML =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  setTimeout(() => {
    soat();
  }, 1000);
}
soat();

// secundamer

const stopwatch__btn = document.querySelector(".stopwatch__btn");
const stopwatch__seconds = document.querySelector(".stopwatch__seconds");
const stopwatch__minutes = document.querySelector(".stopwatch__minutes");
const stopwatch__hours = document.querySelector(".stopwatch__hours");
const stopwatch__del = document.querySelector(".stopwatch__del");

stopwatch__btn.addEventListener("click", function () {
  if (stopwatch__btn.innerHTML == "start") {
    stopwatch__btn.innerHTML = "STOP";
  } else if (stopwatch__btn.innerHTML == "STOP") {
    stopwatch__btn.innerHTML = "start";
  }
  function secundamer() {
    if (stopwatch__btn.innerHTML == "STOP") {
      setTimeout(() => {
        stopwatch__seconds.innerHTML = Number(stopwatch__seconds.innerHTML) + 1;
        if (stopwatch__seconds.innerHTML == 60) {
          stopwatch__minutes.innerHTML =
            Number(stopwatch__minutes.innerHTML) + 1;
          stopwatch__seconds.innerHTML = 0;
        } else if (stopwatch__minutes.innerHTML == 60) {
          stopwatch__hours.innerHTML = Number(stopwatch__hours.innerHTML) + 1;
          stopwatch__minutes.innerHTML = 0;
        }
        secundamer();
      }, 1000);
    }
  }
  secundamer();
  if (
    stopwatch__seconds.innerHTML > 0 ||
    stopwatch__minutes.innerHTML > 0 ||
    stopwatch__hours.innerHTML > 0
  ) {
    stopwatch__del.classList.remove("none");
  }
  stopwatch__del.addEventListener("click", function () {
    stopwatch__seconds.innerHTML = 0;
    stopwatch__minutes.innerHTML = 0;
    stopwatch__hours.innerHTML = 0;
    stopwatch__del.classList.add("none");
  });
});

// calculator

const numbers = document.querySelectorAll(".numbers");
const results = document.querySelector(".calc__screen-out");
const negative = document.querySelector(".negative");
const sign = document.querySelector(".sign");
const ildiz = document.querySelector(".ildiz")

let result = "";
let arr = Array.from(numbers);

function teng() {
  if (results.innerHTML == "") {
    results.innerHTML = "0";
  }
}

arr.forEach((a) => {
  a.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      result = eval(result);
      results.innerHTML = result;
    } else if (e.target.innerHTML == "ac") {
      result = "";
      results.innerHTML = result;
      teng()
    } else if (e.target.innerHTML == "ce") {
      result = result.substring(0, result.length - 1);
      results.innerHTML = result;
      teng()
    } else {
      result += e.target.innerHTML;
      results.innerHTML = result;
    }
  });
});
negative.addEventListener("click", () => {
  results.innerHTML = -results.innerHTML;
  result = results.innerHTML
});
sign.addEventListener("click", () => {
  results.innerHTML = results.innerHTML / 100;
  result = results.innerHTML
})

function sqrt(a) {
  return Math.sqrt(a)
}

ildiz.addEventListener('click', function() {
  results.innerHTML = sqrt(results.innerHTML)
  result = results.innerHTML
})
