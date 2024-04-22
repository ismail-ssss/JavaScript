// ............ Dates ...............

// let dates = new Date();
// console.log(typeof dates);
// console.log(dates.toString());
// console.log(dates.toDateString());
// console.log(dates.toLocaleDateString());
// console.log(dates.toLocaleString());
// console.log(dates.toLocaleTimeString());
// console.log(dates.toTimeString());
// console.log(dates.toUTCString());

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toString);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date();

// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

// let newDate = new Date();

// newDate.toLocaleString('default',{
//     weekday: "long"
// })

function rotateClockHands() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.getElementById("hourHand");
  const minuteHand = document.getElementById("minuteHand");
  const secondHand = document.getElementById("secondHand");

  const hourDegrees = hours * 30 + minutes * 0.5; // Each hour is 30 degrees, each minute is 0.5 degrees
  const minuteDegrees = minutes * 6 + seconds * 0.1; // Each minute is 6 degrees, each second is 0.1 degrees
  const secondDegrees = seconds * 6; // Each second is 6 degrees

  hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
}

// Update clock hands every second
setInterval(rotateClockHands, 1000);

// Initial call to rotate clock hands immediately
rotateClockHands();
