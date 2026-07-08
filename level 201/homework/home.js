const params = new URLSearchParams(window.location.search);

console.log(params.get("category")); // phones
console.log(params.get("sort"));     // price
