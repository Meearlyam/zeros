module.exports = function getZerosCount(number) {
  let twos = 0, fives = 0, temp;
  if(number <= 3) {
    return count;
  }
  for (let i = number; i > 1; i--){
    temp = i;
    while(Math.floor(temp % 5) == 0) {
      temp = Math.floor(temp/5);
      fives++;
    }
    while(Math.floor(temp % 2) == 0) {
      temp = Math.floor(temp/2);
      twos++;
    }
  }
  return Math.min(fives, twos);
}
