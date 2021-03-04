const today = moment();
  
const dateEl = document.querySelector("#currentDay");
dateEl.innerHTML = "Today's date is: " + today.format('dddd, MMMM Do');