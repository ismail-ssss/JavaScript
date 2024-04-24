// ++++++++++++++++++ async +++++++++++++++
// async function always returns a promise
// await pauses the execution of its surrounding async function
// until the promise is settled.

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("this is resolve");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api();
  await api();
}

getWeatherData();

//another way to call async() iifi
// iifi runs as soon as it is defined
// iifi use to avoid unnasasary variables
// it will data that variable after execution

(async function () {
  await api();
  await api();
})();
