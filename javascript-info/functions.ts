// Note: javascript first initilized all the functions
// then start executing the code from the first line to
// the last line, but it is fucntion is assigned to some
// variable then it wil not work.

// with function expression we can declare a function and
// assign to it at runtime and also make it availabe globally

// global variable
let name = "john";

// inline function
const getNickName = () => "johnny";
const sum = (a: number, b: number) => a + b;

// same vairable shadowed the outer variable
// default parameter value is 20
// ?? operator is used to check if the value is null or undefined,
// if it is, it will return true
const fn = (age = 20, nickname = getNickName(), isValid: any) => {
  // local variable
  let name = "peter";
  console.log(name, age, nickname, isValid ?? true);
};

const checkAge = (age: number) => {
  return age > 18 ? true : confirm("Are you sure you want to continue?");
};

console.log(name);
fn(10, undefined, undefined);
console.log(name);
console.log(sum(10, 20));

// If a function does not return a value, it is the same as if it returns undefined
const doNothing = () => {};
console.log(doNothing() === undefined);

checkAge(20);
pow(3, 2);

// auto calling function
((a: number, b: number) => {
  console.log(a + b);
})(10, 10);

let a = 1;
[0, 4].forEach((n: any) => console.log(n));
console.log(null == 0);
console.log(Number(null));
console.log(Number(null) == 0);
console.log(Number(null) === 0);
console.log(null || 1);
console.log(1 && 5);
console.log(1 && null && 2);
console.log(null || (2 && 3) || 4);
console.log(!!"non-empty");

// ?? works only for null or undefined
let height = 0;
console.log(height || 100);
console.log(height ?? 100);

// outer label is used to break the outer loop
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(i, j);
  }
}

// switch always uses strict comparison (===) for matching cases
// no break will enables fall through

function pow(a: number, b: number) {
  return a ** b;
}

export default { pow };
