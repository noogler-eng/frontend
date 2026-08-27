let user: any = {
    name: "John",
    age: 30,
    nestedObject: {
        nestedName: "Nested John",
        nestedAge: 10
    }
}

console.log(user["name"], user.name)
user["isAdmin"] = true
user.nickname = "Johnny"
console.log(user)   
user["nick name"] = "Johnster"
console.log(user["nick name"])
delete user["nick name"]

const fruit = "apple"
const bag = {
    [fruit]: 5
}

console.log(bag)
console.log(bag.apple)
console.log("apple" in bag)

// string must be numerical convertable arranged in order automatically
const order: any = {}
order["2"] = "second"
order["1"] = "first"
order["3"] = "third"
order["anything"] = undefined
console.log(order)


// object dont store values directly, they store references to values
// object pointing them to the memory in the heap
let admin = user;
admin.name = "Alice"
console.log(user.name)
console.log(user)
console.log(user == admin)
console.log(user === admin)


// deep copy vs shallow copy
// shallow copy - only make chnages in first level object not in nested
// needs deep clone for nested objects also
let clone = Object.assign({}, user)
console.log(clone == user)
console.log(clone === user)
console.log("still: ", clone.nestedObject === user.nestedObject)

let deepClone = structuredClone(user)
console.log(deepClone == user)
console.log(deepClone === user)
console.log("deep clone: ", deepClone.nestedObject === user.nestedObject)

// deep clone using JSON methods
// drawback: if the object has functions or undefined values, 
// they will be lost in the process, not reliable method as data will be lost
let deepClone2 = JSON.parse(JSON.stringify(user))
console.log(deepClone2 == user)
console.log(deepClone2 === user)
console.log("deep clone 2: ", deepClone2.nestedObject === user.nestedObject)


// object referencing itself, circular reference
let circular: any = {};
circular["self"] = circular
let clonedCircular = structuredClone(circular)
console.log(clonedCircular == circular)
console.log(clonedCircular === circular)
console.log("circular: ", clonedCircular.self === circular.self)

// many functions giving errro while using structuredClone, 
// so using JSON methods for deep cloning or using loadash library for deep cloning


// garbage collector removes unreferenced objects from memory, so if an object is not 
// referenced by any variable or property, it will be removed from memory automatically.
// drawback: count 0 but in the circualr reference, the object is still referenced by itself, 
// so it will not be removed from memory automatically. ---- mark-and-sweep alogrithm

// alogirithm (mark-and-sweep)
// Mark roots 
// Traverse aur mark references
// Recurse 
// Sweep unmarked objects

// more small alogirithms on top of it
// Generational collection
// Incremental collection
// Idle-time collection


const myUser = {
    name: "John",
    age: 30,
    sayHi() {
        console.log("Hello", this.name)
    }
}
myUser.sayHi()


// constructor function with new
// making an object using constructor function, this is a special function that is used to 
// create objects and it is called with the new keyword. The new keyword creates a new empty 
// object and sets the this value to that object. The constructor function can have properties 
// and methods that are assigned to the new object.
function MyFund(name: string) {
    this.name = name;
    this.isAdmin = false;
}

let myFund = new MyFund("John")
console.log(myFund, typeof myFund)
console.log(myFund.name)
console.log(myFund.isAdmin)