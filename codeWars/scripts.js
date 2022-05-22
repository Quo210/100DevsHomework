
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

  //

  function sumMix(x){
    return x.reduce((a,b)=>{
      return a + parseInt(b);
    },0)
  }

  //

  function towerBuilder(nFloors) {
    const arr = [];
    for (let i = 0; i < nFloors; i++){
      let myStr = "";
      let counter = 0;
      const strLen = (i*2)+1;
      while(counter < strLen){
        myStr += "*";
        counter++
      }
      arr.push(myStr);
    }
    
    arr.reverse();
    for (let i = 0; i < arr.length; i++){
      const extraWhites = i * 2;
      let target = arr[i];
      let whites = "";
      while(whites.length != extraWhites / 2){
        whites += " ";
      }
      arr[i] = whites + target + whites;
    }
    arr.reverse()
    
    return arr
  }

  //

  function descendingOrder(n){
    return parseInt( n.toString().split("").map(a => parseInt(a)).sort((a,b)=>b-a).join("") )
  }

  //

  function check(a, x) {
    return a.includes(x)
  }

  //

  function disemvowel(str) {
    const reg = /a?e?i?o?u?/ig;
    return str.replace(reg,"");
  }

  //

  function DNAtoRNA(dna) {
    return dna.replace(/T/g,"U")
  }

  //

  function findUniq(arr) {
    arr.sort((a,b) => a-b);
    return (arr[0] == arr[1])? arr[arr.length-1] : arr[0]
  }

  //

  function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((a,b)=>a+b) / classPoints.length < yourPoints)? true : false
  }
  
  //

  function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
  }

  function findEvenIndex(arr)
{
  function sumRight(pos){
    const a = arr.slice(pos+1,arr.length).reduce((a,b)=>a+b,0);
    return a
  }
  
  function sumLeft(pos){
    if(pos == 0){ return 0 } else {
      const newArr = arr.slice(0,pos)
      const a = newArr.reduce((a,b)=>a+b,0);
      return a   
  }
    }
    
  
  let index = undefined;
  let counter = 0;
  while(counter < arr.length){    
    const end = (sumLeft(counter) == sumRight(counter));
    (end == true)? index = counter : 0;
    counter++;
  }
  
  return (index != undefined)? index : -1;
  
  
}

function chain(input, fs) {
    return fs.reduce((a,b)=>{
      return b(a)
    },input)
  }

  //

  function getCount(str) {
    return str.split("").reduce((a,b)=>{
      (/[aeiou]/.test(b) == true)? a++ : a ;
      return a
    },0)
  }

  // 

  function spinWords(string){
    const words = string.split(" ");
    let final = [];
    words.forEach(word =>{
      if(word.length < 5){ 
        final.push(word) 
        return
      }
      final.push( word.split("").reverse().join("") );
    })
    return final.join(" ")
  }

  //

  function smash (words) {
    return words.join(" ")
 };

 function lovefunc(flower1, flower2){
  return ( (flower1 % 2 == 0) != (flower2 % 2 == 0) )? true : false
}

function digital_root(n) {
  const splitSum = (num) => 
  num.toString()
  .split("")
  .map(a => parseInt(a) )
  .reduce( (a,b) => a + b );
  let result = n;
  while (result.toString().length > 1){
    result = splitSum(result)
  } 
  return result
}

function litres(time) {
  return (time != 0)? Math.floor(time * 0.5) : 0;
}

function likes(names) {
  const l = names.length;
  
  function joinNames(n){
    if(n.length < 1) return false;
    if(n.length < 4){
    let r = n[0];
      for(let i = 1; i < n.length; i++){
      (i == n.length-1)? r += ` and ${n[i]}` : r += `, ${n[i]}`;
      }
    return r
    } else {
      let c = 0;
      const a = n.slice(2).forEach(num => c++);
      return `${n[0]}, ${n[1]} and ${c} others like this`
    } 
  }
  
  switch(true){
      case (l == 0):
      return 'no one likes this'
      break;
      case (l == 1):
      return `${names[0]} likes this`
      break;
      case (l >= 2 && l < 4):
      return `${joinNames(names)} like this`;
      break;
      case (l >= 4):
      return joinNames(names)
      break;
  }
  
}

//8

function solution(str){
  return str.split("").reverse().join("")
}

//

