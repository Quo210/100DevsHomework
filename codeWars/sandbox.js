function findNextSquare(sq) {
  let answer = 0;
  let counter = sq + 1;
  while (answer === 0){
    const sqrt = Math.sqrt(counter);
    if (sqrt % 1 === 0){
      answer = counter;
    } else {
      counter++
    }
  }
  return counter
}

console.log(
  findNextSquare(999)
)