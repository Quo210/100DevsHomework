
function saveRhino (arr) {
    const findLowest = (sample) => Array.from( sample ).sort((a,b) => a - b)[0];
    const findSecondLowest = (sample) => {
        const a = Array.from( sample ).sort( (a,b) => a - b );
        return (a[1])? a[1] : a[0]
    }
    const mainRoutes = arr.map(paths => {
        return findLowest(paths)
    });
    const alternateRoute = arr.map(paths => {
        return findSecondLowest(paths)
    });
    const optimalRoutes = [];
    for (let i = 0; i < 4; i++){
        const a =  [];
        a.push( mainRoutes[i], alternateRoute[i] )
        optimalRoutes.push(a);
    };

    const bestChance = mainRoutes.reduce((a,b) => (a > b)? a : b);
    const indexOfBestChance = mainRoutes.map(lowest => (lowest == bestChance)? true : false).indexOf(true);

    switch(indexOfBestChance){
        case 0:
            return 'North';
        case 1:
            return 'East';
        case 2:
            return 'South';
        case 3:
            return 'West';
    }
    
}

//

// Sum Numbers
function sum (numbers) {
    "use strict";
  if(numbers.length == 0) return 0;
  return numbers.map(elem => parseFloat(elem)).reduce((a,b) => a + b)
   
};

//

function deleteNth(arr,n){
    return arr.reduce((a,b) => {
      let instances = 0;
      a.forEach(elem => { if (elem == b) instances++ });
      (instances < n)? a.push(b) : false ;
      return a
    },[])
  }

  //

  function XO(str) {
    const e = str.toLowerCase().split("").reduce((a,b) => { 
    (!a[b])? a[b] = 1 : a[b]++; 
    return a },{});
    const s = Object.values(e);
    if(s.length == 1) return false;
    return s.every(val => val == s[0]);
  }