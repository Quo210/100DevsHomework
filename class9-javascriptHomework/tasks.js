/* variables */

/* 1 */

let admin, myName;
myName = "John";
admin = myName;
alert(admin);

// 2

const nameOfMyPlanet = "Tierra";
let currentUser;

// 3

// Shouldn't use uppercase because variables must be declared in lowercase. For several words use cammelCase.
// Example says that uppercase can be used on certain occasions like when a value is never going to change BUT 
// I feel it's redundant because being a const already means it will not change. ¯\_(ツ)_/¯


// functions

// 1

// There is no difference because the return keyword will stop the function from executing on the line it appears, so when if evaluates as true then it won't reach the point where else is/isnt located

// 2

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  (age > 18)? true : confirm('Did parents allow you?');// Ternary version

  
  function checkAge(age) {
    return (age > 18) || confirm('Lel?');
  }


//3

function min(a,b){
    if (a > b){
        return a;
    } else if (b > a){
        return b
    } else {
        return 'Both are the same';
    }
}

//4

function pow(x,n){
    return x**n;
}

// based on the solution of the page

  function pow(x,n) {
    let result = x;

    if (n <= -1){
        alert('elevated negatives are not supported lol')
        return
    }

    const verfX = isNaN(x); 
    const verfn = isNaN(n);
      
    if (verfX === true && verfn !== false){
        console.log('Nope');
    }
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
     console.log(result);
  }

pow(3,2) // 9;


window.addEventListener('click',function(){
  // code 
});

