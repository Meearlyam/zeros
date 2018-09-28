module.exports = function getZerosCount(number) {
  let twos = 0, fives = 0, temp;
  if(number <= 3) {
    return count;
  }
  for (let i = number; i > 1; i--){
    temp = i;
    while(temp % 5 == 0) {
      temp /= 5;
      fives++;
    }
    while(temp % 2 == 0) {
      temp = temp >> 1;
      twos++;
    }
  }
  return Math.min(fives, twos);
}
