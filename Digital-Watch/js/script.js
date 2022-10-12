const currentTime = () => {
  const el = document.querySelector(".hora");

  let date = new Date;
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  let time = `${hh}:${mm}:${ss}`
  el.innerText = time;
};

const dateFormatter = document.querySelector(".data");
const date = new Date;
const formatter = Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

dateFormatter.innerHTML = formatter.format(date);


currentTime;
setInterval(currentTime, 1000);