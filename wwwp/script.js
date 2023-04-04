async function fetchDO() {
  console.log('hello world async');
  const response = await fetch('/test');
  console.log(response.data);
}

fetchDO();
