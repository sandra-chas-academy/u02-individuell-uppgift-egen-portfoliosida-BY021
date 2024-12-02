
console.time();

console.log("hello")

console.log("hello world")

console.timeEnd();

let delas = "hejsan"
delas = 20

console.log(delas+1);

let myNumber;
myNumber = 10;
myNumber = myNumber + 3 + " hej";

console.log(myNumber)

const info = "hello world " + 10;

console.log(info);

//öka/minska/gångra med ett tal
//öka
let plus = 0;
plus = plus + 1;
//alternativt
plus += 1;

console.log(plus)

//minska
let minus = 0;
minus = minus - 1;
//alternativt
minus -= 1;

console.log(minus);

//multiply
let multiply = 2;
multiply = multiply * 10;
//alternativt
multiply *= 2;

console.log(multiply); 

//dela
let divide = 2;
divide = divide / 2;
//alternativt
divide /= 2;

console.log(divide); 

//modulo % (reminder) will always return values -1, -0, 0, 1

let i = 1;
const isEven = i % 2 === (0 || -0);

console.log("isEven", isEven);

let reminder = i % 4;
// reminder = reminder % 2;
reminder %= 2;

console.log(reminder)

//Boolean (sant eller falskt)

let isHome = true;
console.log ("Är du hemma?", isHome)
isHome = false;
console.log("Är du hemma nu?", isHome)

let compare = "Baker";
const isLike = compare == "Baker";
console.log("== är värden lika?", isLike);

const isNotLike = compare != "Baker";

console.log("!= är värden olika?", isNotLike);

let age = 14;

const isChild = age < 15; // age är mindre än värdet (15)
const isYouth = age >= 15 && age < 25; //age är större eller lika med än första värdet (15) OCH (&&) är mindre än andra värdet (25)
const isAdult = age >= 25 && age < 65; // age är större eller lika med än första värdet (25) OCH (&&) är mindre än andra värdet (65) 
const isSenior = age >= 65; // age är större eller lika med värdet (65)

console.log("Är Barn", isChild);
console.log("Är Ung", isYouth);
console.log("Är Vuxen", isAdult);
console.log("Är Gammal", isSenior);
console.log("age:", age);


// === vs == & != vs !==

const controlAge = age == "66" //kontrollerar endast om två värden är lika
const controlAgeWithDatatype = age === "66" //Kontrollerar om två värden OCH datatypen är lika (standard)

console.log("==", controlAge);
console.log("===", controlAgeWithDatatype)

const deControlAge = age != "66"; //Kontrollerar endast om värdet är olika
const deControlAgeWithDatatype = age !== "66"; //kontrollerar om värdet OCH datatypen är olika

console.log("!=", deControlAge);
console.log("!==", deControlAgeWithDatatype)
// LOGISKA OPERATORER (&&, ||, !)
let isMember = true;

function seniorQualified() {
    if (isMember === true && age >= 65) { //Alla värden måste vara true för att få senior rabatt
    // (isMember && isSenior === true) ger samma resultat eftersom variablen är identified längre upp i koden.
      console.log("You are Qualified for senior discount!");
    }
    else if(isYouth || isAdult || isSenior) { //Ett av dessa värden måste vara true för att få tillgång till medlemsskap
      console.log("You are qualified to become a member!");
    }
      else {
      console.log("You are not Qualified to become a member!");
    }
}

seniorQualified()


//Stängar (STRINGS)
const myName = "Baker Yousif"
const myAge = 31;

console.log("hej mitt namn är " + myName + " och jag är " + myAge); //Sträng konkatenering
console.log(`hej mitt namn är ${myName} och jag är ${myAge} men i april är jag ${myAge + 1}`) //Template literals

function matematik(v){
const milesToKm = v * 1.609344;
return milesToKm

};

console.log(`Vi ska åka ${matematik(10)} kilometer`);


const greeting = "baker";
console.log(`baker is ${greeting.length} letters long`);
console.log(`What is second, third and fourth letter of Baker? ${greeting.substring(1, 4)}`);

const specificLetter = greeting[2];
console.log("Specific Letter:", specificLetter);
const lastLetter = greeting[greeting.length-1];
console.log("Last letter:", lastLetter);