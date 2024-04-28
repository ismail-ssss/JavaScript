fetch("25_test.json")
  .then((Response) => Response.json())
  .then((data) => fetchData(data));

function fetchData(data) {
  console.log(data);
}