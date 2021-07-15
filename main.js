var userNumbers = [3.02, -3.65, 5, -9, -15.6, 0, 4.3];

function makeItPositive(numbers) {
  var result = [];
  var positifier = -1;
  for (var number of numbers) {
    if (number < 0) {
      result.push(Math.round(number * positifier));
    } else {
      result.push(Math.round(number));
    }
  }

  return result;
}

console.log(makeItPositive(userNumbers));
