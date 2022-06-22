
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

//7

function isIsogram(str){
  return Object.values( str.toLowerCase().split("").reduce((a,b)=>{
    if(!a[b]) a[b] = 0; a[b]++; return a
  },{}) ).every(element => element == 1)
}

//

function basicOp(operation, value1, value2)
{
  switch(operation){
      case "+":
      return value1 + value2
      break;
      case "-":
      return value1 - value2
      break;
      case "*":
      return value1 * value2
      break;
      case "/":
      return value1 / value2
      break;
  }
}

//8

function hoopCount (n) {
  return (n >= 10)? 'Great, now move on to tricks' : "Keep at it until you get it"    
}

//6
decodeMorse = function(morseCode){
  const byWord = morseCode.trim().split("   ");
  const splitByChar = (e) => e.split(" ");
  const rosetta = Object.keys(MORSE_CODE);
  return byWord.map(word => {
    const byLetter = splitByChar(word);
    const positions = byLetter.map(letter => rosetta.indexOf(letter));
    let decodedWord = '';
    positions.forEach(n => decodedWord += Object.values(MORSE_CODE)[n]);
    return decodedWord
  }).join(" ")
}


//6
function encode(str,  n)
{
  const arr = [];
  str.split("").forEach(char => {
    arr.push( char.charCodeAt(0) - 96 )
  })
  let holder = Array.from( n.toString().split("") );
  return arr.map(num => {
    if(holder.length == 0){
      holder = Array.from( n.toString().split("") )
    } return parseInt(num) + parseInt(holder.shift())
  })
}

//7 Binary Conversion

function addBinary(a,b) {
  const remainders = [];
  function binaryRedux(val,storage){
    storage.push(val % 2);
    let divided = val / 2;
    if(divided >= 1){
      console.log('Recursion for',divided,'Started')
      binaryRedux(Math.floor(divided),storage)
    } else {
      console.log('Binary sequence obtained',storage)
    }
  }
  binaryRedux((a+b),remainders);
  remainders.reverse(); // Remember reverse MUTATES the original array
  console.log(`${a+b} in Binary is`,
              remainders.reduce((a,b)=>{
    return a + b.toString()
  },"")
             );
  return remainders.reduce((a,b)=>{
    return a + b.toString()
  },"")
}

function vowelIndices(word){
  const regEx = /[aeiouy]/i;
  const sWord = word.split('');
  const locations = [];
  for (let i = 0; i < sWord.length; i++){
    if(regEx.test(sWord[i])) locations.push(i+1)
  } return locations
}

function squareDigits(num){
  const nums = Array.from( String(num) );
  return Number( nums.reduce((a,b)=>{
    let number = Number(b) * Number(b);
    a += number;
    return a
  },'') )
}

function highAndLow(numbers){
  const nums = numbers.split(" ").sort((a,b)=>b-a);
  return `${nums[0]} ${nums[nums.length-1]}`
}

function findShort(s){
  const a = s.split(" ").sort((a,b)=>a.length - b.length)
  return a[0].length
}

function DNAStrand(dna){
  const a = dna.split("");
  const b = [];
  a.forEach(base => {
    switch(base){
        case 'A':
        b.push('T');
        break;
        case 'T':
        b.push('A');
        break;
        case 'G':
        b.push('C');
        break;
        case 'C':
        b.push('G');
        break;
    }
  });
  return b.join("")
}

function maskify(cc) {
  if(cc.toString().length <= 4) return cc;
  const a = cc.toString().split("").reverse().join("");
  let newStr = a.substring(0,4) + a.substring(4).replace(/./g,"#");
  return newStr.split("").reverse().join("")
}

function friend(friends){
  return friends.filter(person => person.length === 4)
}

function findNextSquare(sq) {
  if(sq < 0) return -1;
  if(Math.sqrt(sq) % 1 !== 0) return -1;
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

function nbYear(p0, percent, aug, p) {
  if(percent == 0) return 50;
  let years = 0;
  let p0sum = p0;
  for (; p0sum <= p;){
    let perc = (percent/100);
    p0sum += Math.floor( (p0sum * perc) + aug )
    years++
  }
  return years
}

function printerError(s) {
  const a = s.split("").filter( char => !(char.charCodeAt(0) > 109) );
  return `${s.length - a.length}/${s.length}`
}

function rowSumOddNumbers(n) {
  let pyramidLevel = 0;
  let lastInt = -1;
  let endResult = 0;
  while (pyramidLevel != n){
    pyramidLevel++
    if(pyramidLevel != n){
      for (let innerCounter = 0; innerCounter < pyramidLevel; innerCounter++){
        lastInt += 2;
      } 
    }
  }
  if(pyramidLevel == n){
    for (let innerCounter = 0; innerCounter < pyramidLevel; innerCounter++){
      lastInt += 2;
      endResult += lastInt;
    }
  }
  return endResult
}

/*
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
*/

function divisors(integer) {
  const divisors = [];
  for (let i = 2; i < integer; i++){
    if(integer % i == 0) divisors.push(i)
  } 
  if (divisors.length == 0) return `${integer} is prime`;
  else return divisors
};

function solution(str, ending){
  return (str.substring(
    str.length - ending.length
  ) == ending )?
    true : false
}

const number = (array) => {
  let counter = 0;
  return array.map((str) => {
    counter++
    return `${counter}: ${str}`
  })
}

function calculateYears(principal, interest, tax, desired) {
  if(principal == desired) return 0;
  let capital = principal;
  let counter = 0
  for (; capital < desired; counter++){
    let yearlyRevenue = capital * interest
    capital += Math.round( yearlyRevenue - (yearlyRevenue * tax) )
  } return counter
}