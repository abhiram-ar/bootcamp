
let myUrl = new URL("https://example.com:8080/path/name?query=test#hash");

console.log(myUrl);
console.log(myUrl.searchParams.get("query"));
console.log(myUrl.hostname);