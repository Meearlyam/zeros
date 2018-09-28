module.exports = function getZerosCount(number) {
  let fives = 0, temp;
  if(number <= 3) {
    return count;
  }
  for (let i = number; i > 1; i--){
    temp = i;
    while(temp % 5 == 0) {
      temp /= 5;
      fives++;
    }
  }
  return fives;
}
