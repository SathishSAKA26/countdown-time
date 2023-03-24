"use strict";

// add array data
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// get element
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-formed h4");
// console.log(items);

// futureDate
let futureDate = new Date(2023, 3, 1, 0, 54, 0);
// console.log(futureDate);

// date in giveaway
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

let weekday = week[futureDate.getDay()];
// console.log(weekday);

giveaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;
  // console.log(time);
  // console.log(today);
  // 1s = 1000s

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all value
  let days = time / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((time % oneDay) / oneHour);
  let minutes = Math.floor((time % oneHour) / oneMinute);
  let seconds = Math.floor((time % oneMinute) / 1000);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);

  // set values Array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
  if (time < 0) {
    clearInterval(countdown);
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
