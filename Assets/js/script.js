const today = moment();
  
const dateEl = document.querySelector("#currentDay");
dateEl.innerHTML = today.format('dddd, MMMM Do');