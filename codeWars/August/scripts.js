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

  // return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  const a = ages.sort((a,b) =>b-a)
  const b = [];
   b.push(a[1],a[0])
   return b
 }
 