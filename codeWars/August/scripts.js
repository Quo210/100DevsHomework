function gimme (triplet) {
    let a = Array.from( triplet ).sort((a,b) => a - b)[1]
    return triplet.indexOf(a)
  }

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
   };

   function roundToNext5(n){
    let val = n;
    while (val % 5 !== 0){
      val++
    }
    return val
  }