// we dont use url module instead can use URL class. we can get the details like hostname, query params, pathn name etc
const myUrl = new URL(
  "https://www.aasaanjobs.com/profile/12345?status=active&type=candidate"
);
console.log(myUrl);
