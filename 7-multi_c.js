// 7-multi_c.js

const occurrences = parseInt(process.argv[2]);

if (isNaN(occurrences) || occurrences <= 0) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < occurrences; i++) {
    console.log("C is fun");
  }
}
