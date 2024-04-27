// short circuit : circuit evaluation avoids unnecessary work and leads to efficient processing. if you have something like a && b, and a is false, JavaScript won't be checking b because it already knows result will be false

const a = 10;
const b = 10;

// here b value will not check if a is false
if (a == 11 && b == 10) {
  console.log("both are equal to there value");
} else {
  console.log("a is not equal to 11");
}
