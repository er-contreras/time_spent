const currentDate = () => {
  let currentDate = new Date();
  let info = document.querySelector(".info");

  info.innerHTML = currentDate;
}

currentDate();
setInterval(currentDate, 1000);
