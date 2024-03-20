// Question 1 : personal message

let ibbad = "ibbad";

console.log(
  `\nQuestion 1:\nhello ${ibbad}, would you like to learn some python today?`
);

// Question 2 : name case

console.log(
  "\nQuestion 2:\n",
  ibbad.toLowerCase(),
  ibbad.toUpperCase(),
  ibbad.charAt(0).toUpperCase() + ibbad.slice(1).toLowerCase()
);

// Question 3 : famous quote

let author = "Quaid-e-Azam";

console.log(
  `\nQuestion 3:\n${author} once said, "I do not believe in taking right decision, i take a decision and make it right"`
);

// Question 4 : famous quote 2

let famous_person = "Quaid-e-Azam";

let message = `\nQuestion 4:\n${famous_person} once said, "I do not believe in taking right decision, i take a decision and make it right"`;

console.log(message);

// Question 5 : Stripping names

let Name = "\tIbbad Shabbir\n";
console.log("\nQuestion 5:\nName with whitespace:", Name);

let strippedName = Name.trim();
console.log("Stripped name:", strippedName);

// Question 6 : Number eight

const additionResult = 5 + 3;

console.log(`\nQuestion 6:\n5 + 3 =`, additionResult);

const subtractResult = 13 - 5;

console.log(`13 - 5 =`, subtractResult);

const multiplyResult = 4 * 2;

console.log(`4 * 2 =`, multiplyResult);

const divideResult = 16 / 2;

console.log(`16 / 2 =`, divideResult);

// Question 7 : Favourite number

const FavouriteNumber = 34;

console.log(`\nQuestion 7:\nMy favourite number is`, FavouriteNumber);

// Question 8 : Comment

// These are the 45 questions made by M.Ibbad roll # 00348484, date : 19/3/24

// Question 9 : Arrays

const names: string[] = ["Ibrahim", "Ahyaan", "Hammad", "Ahmed"];

console.log(`\nQuestion 9:`);

for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]}`);
}

// Question 10 : personalized message

console.log(`\nQuestion 10:`);

for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}, would you like to learn some python today?`);
}

// Question 11 : Favourite car

const transport = [
  "Maserati Gran Turismo",
  "Mercedes AMG G63",
  "BMW M4",
  "Nissan Skyline R34",
];

console.log(`\nQuestion 11:`);

for (let i = 0; i < transport.length; i++) {
  console.log(`I would like to own a ${transport[i]}`);
}

// Question 12 : Guest

console.log(`\nQuestion 12:`);

const guest = ["Ibrahim", "Ahyaan", "Hammad", "Ahmed"];

for (let i = 0; i < guest.length; i++) {
  console.log(`Dear, ${guest[i]}, You are invited to dinner :)`);
}

// Question 13 : Guest part 2

console.log(`\nQuestion 13:`);

// Find index of guest who cannot make it to dinner

let guestWhoCantMakeIt = "Hammad";
console.log(`\n${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the name with "Farzan"

let indexOfGuestWhoCantMakeIt = guest.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
  guest[indexOfGuestWhoCantMakeIt] = "Farzan";
}

// Update the List

console.log("\nUpdated Guest List:");
for (let i = 0; i < guest.length; i++) {
  console.log(`${i + 1}. ${guest[i]}`);
}

// Update the Message

console.log("\nInvitation Messages:");
for (let i = 0; i < guest.length; i++) {
  console.log(
    `Dear ${guest[i]},\nYou are invited to the dinner. See you soon!\n`
  );
}

// Question 14 : Guest part 3

console.log(`\nQuestion 14:`);

// Adding guest to start of the array

guest.unshift("Shabbir");

// Adding guest to middle of the array

guest.splice(Math.floor(guest.length / 2), 0, "Zaid");

// Adding guest to end of the array

guest.push("Ammar");

// Informing people about table

console.log(
  `\nWe're getting a bigger table, i'll invite more people to dinner.`
);

// Updating invitation message

console.log("\nInvitation Message:");
for (let i = 0; i < guest.length; i++) {
  console.log(
    `Dear ${guest[i]},\nYou are invited to the dinner. See you soon!\n`
  );
}

// Question 15 : Guest Part 4

console.log(`\nQuestion 15:`);

//sorry message

console.log(
  `\nWe can only invite two people for dinner, I'm sorry to say that some of you won't be able to join me.`
);

// Remove guest from the guest list

while (guest.length > 2) {
  const removedGuest = guest.pop();
  console.log(`\nSorry ${removedGuest} I cant invite you to dinner.`);
}

// Invitation to the remaining guest

console.log("\nInvitation Message:");
for (let i = 0; i < guest.length; i++) {
  console.log(
    `Dear ${guest[i]},\nYou are still invited to the dinner. See you soon!\n`
  );
}

// Remove the guests

guest.pop();
guest.pop();

// final list

console.log("\nThe final guest list is:");
console.log(guest);

// Question 16 : Seeing the world

console.log(`\nQuestion 16:`);

const world = ["Italy", "Vatican City", "Paris", "Scotland", "London"];

console.log(`\nOrignal order:`);

for (let i = 0; i < world.length; i++) {
  console.log(`${world[i]}`);
}

// sort

console.log("\nSorted order:\n");

for (let i = 0; i < world.length; i++) {
  console.log(`${world.slice().sort()[i]}\n`);
}

// orignal

console.log("\nOriginal order (again):\n");

for (let i = 0; i < world.length; i++) {
  console.log(`${world[i]}\n`);
}

// reverse

console.log("\nReverse alphabet order:\n");

for (let i = 0; i < world.length; i++) {
  console.log(`${world.slice().sort().reverse()[i]}\n`);
}

// orignal

console.log("\nOriginal order (once again):\n");

for (let i = 0; i < world.length; i++) {
  console.log(`${world[i]}\n`);
}

// Reverse

console.log("\nReverse order:\n");

for (let i = 0; i < world.length; i++) {
  console.log(`${world.reverse()[i]}\n`);
}

// Reverse

console.log("\nReverse order (again) /*its back to its orignal state*/ :\n");

for (let i = 0; i < world.length; i++) {
  console.log(`${world.reverse()[i]}\n`);
}

// Alphabetical order

console.log("\nAplhabetical order (again):\n");

for (let i = 0; i < world.length; i++) {
  console.log(`${world.sort()[i]}\n`);
}

// Alphabetical order reverse

console.log("\nAlphabetic reverse order:\n");

for (let i = 0; i < world.length; i++) {
  console.log(`${world.sort().reverse()[i]}\n`);
}

// Question 17

console.log(`\nQuestion 17:`);
// guest.length is getting the amount of entries in the array "guest", the ans should be 0
console.log(`\nthe number of guests i am inviting are ${guest.length}`);

// Question 18

console.log(`\nQuestion 18:`);

const carCompany = [
  "Honda",
  "Nissan",
  "Apollo",
  "Maserati",
  "Porsche",
  "BMW",
  "Bugatti",
  "Ferrari",
  "Koenigsegg",
  "Pagani",
];

console.log(`\nList of famous car companies\n`);

for (let i = 0; i < carCompany.length; i++) {
  console.log(`${i + 1}. ${carCompany[i]}`);
}

// Question 19

console.log(`\nQuestion 19:\n`);

const objectitem = [
  {
    Name: "Ibbad",
    Age: "17",
    Class: "XI",
    Institue: "Habib Public High School",
  },
];

console.log(
  `My name is ${objectitem.map(
    (item) =>
      `${item.Name}\nI am ${item.Age} years old\nI study in grade ${item.Class} at ${item.Institue} `
  )}`
);

// Question 20

// Intentional Error

// console.log(carCompany[20])
// This is an index error

// Question 21

// True

console.log(`\nQuestion 21:\n`);

const car = "Jesko";

console.log(`is car == 'Jesko'? i predict True`);
console.log(car === "Jesko");

const color = "orange";

console.log(`is color == 'orange'? i predict True`);
console.log(color === "orange");

const cpu = "AMD";
console.log(`is cpu == 'AMD'? i predict True`);
console.log(cpu === "AMD");

const mount = "K2";
console.log(`is mount == 'K2'? i predict True`);
console.log(mount === "K2");

const choclate = "Toblerone";
console.log(`is choclate == 'Toblerone'? i predict True`);
console.log(choclate === "Toblerone");

// False

const phone = "iPhone";
console.log(`is phone == 'iPhone'? i predict False`);
console.log(phone !== "iPhone");

const card = "CTA";
console.log(`is card == 'CTA'? i predict False`);
console.log(card !== "CTA");

const design = "UI";
console.log(`is design == 'UI'? i predict False`);
console.log(design !== "UI");

const Mouse = "Logitech";
console.log(`is Mouse == 'Logitech'? i predict False`);
console.log(Mouse !== "Logitech");

const Keyboard = "KeyChron";
console.log(`is Keyboard == 'KeyChron'? i predict False`);
console.log(Keyboard !== "KeyChron");

// Question 22

console.log(`\nQuestion 22:\n`);

// Test for equality with strings

let str1 = "Str";
let str2 = "num";
let str3 = "str";
let str4 = "str";

// False

console.log(str1 === str2);

// True

console.log(str4 === str3);

// Test for equality with strings using lowercase

console.log(`\nEquality with str using lowercase\n`);

// false

console.log(str1.toLowerCase() === str2.toLowerCase());

// True

console.log(str1.toLowerCase() === str3.toLowerCase());

// Test for equality with numbers

console.log(`\nEquality with numbers\n`);

let num1 = 1;
let num2 = 2;
let num3 = 1;
let num4 = 2;

// False
console.log(num1 !== num3);

// True
console.log(num3 !== num2);

// Test for inequality with numbers

console.log(`\ngreater than less than with numbers\n`);

console.log(num1 < num2); // true

console.log(num2 < num1); // false

console.log(num3 <= num2); //true

console.log(num2 <= num3); //false

// And or Operator
console.log(`\nAND OR operators\n`);

console.log(num1 > num2 && num3 < num4); // false
console.log(num2 > num1 || num2 < num3); // true

// In an array

console.log(`\nIn an Array\n`);

const colors = ["magenta", "fusica", "grey", "green"];

console.log(colors.includes("magenta")); // true

console.log(colors.includes("purple")); // false

// Not in an array

console.log(`\nNOT in an Array\n`);

console.log(!colors.includes("purple")); // True

console.log(!colors.includes("grey")); // false

// question 23

console.log(`\nQuestion 23:\n`);

var alien_color = "green";

if (alien_color === "green") {
  console.log("You shot a green alien!\nYou have earned 5 points"); // output = 5 points
}

var alien_color = "brown";

if (alien_color === "green") {
  console.log("You shot a green alien!\nYou have earned 5 points"); // no output
}

// question 24

console.log(`\nQuestion 24:\n`);

// if block
var alien_color = "red";

if (alien_color === "red") {
  console.log("You shot a green alien!\nYou have earned 5 points");
} else {
  console.log("You shot a blue alien!\nYou have earned 10 points");
}

// else block
var alien_color = "blue";

if (alien_color === "green") {
  console.log("You shot a green alien!\nYou have earned 5 points");
} else {
  console.log("You shot a blue alien!\nYou have earned 10 points");
}

// Question 25

console.log(`\nQuestion 25:\n`);

// green block

var alien_color = "green";

if (alien_color === "green") {
  console.log("Player earned 5 points!");
} else if (alien_color === "yellow") {
  console.log("Player earned 10 points!");
} else {
  console.log("Player earned 15 points!");
}

// yellow block

var alien_color = "yellow";

if (alien_color === "green") {
  console.log("Player earned 5 points!");
} else if (alien_color === "yellow") {
  console.log("Player earned 10 points!");
} else {
  console.log("Player earned 15 points!");
}

// red block

var alien_color = "red";

if (alien_color === "green") {
  console.log("Player earned 5 points!");
} else if (alien_color === "yellow") {
  console.log("Player earned 10 points!");
} else {
  console.log("Player earned 15 points!");
}

// Question 26

console.log(`\nQuestion 26:\n`);

const age = 68;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// Question 27

console.log(`\nQuestion 27:\n`);

const favourite_fruit = ["Honeydew", "Mango", "Watermelon"];

if (favourite_fruit.includes("Honeydew")) {
  console.log("You like Honeydew!");
}
if (favourite_fruit.includes("banana")) {
  console.log("You like banana!");
}
if (favourite_fruit.includes("Watermelon")) {
  console.log("You like Watermelon!");
}
if (favourite_fruit.includes("Mango")) {
  console.log("You like Mango!");
}
if (favourite_fruit.includes("Apricot")) {
  console.log("You like Apricot!");
}

// Question 28 : Hello Admin

console.log(`\nQuestion 28:\n`);

const userName = ["Hammad", "Ibrahim", "Ibbad", "Shabbir", "admin"];

for (let i = 0; i < userName.length; i++) {
  if (userName[i] === "admin") {
    console.log("Hello Admin!, would you like to see  a status report?");
  } else {
    console.log(`Hello ${userName[i]}!, thank you for logging in again`);
  }
}
//  Question 29
console.log(`\nQuestion 29:\n`);

userName.slice().pop();
userName.slice().pop();
userName.slice().pop();
userName.slice().pop();
userName.slice().pop();

if (userName.length === 0) {
  console.log("We need to find some users");
}

// Question 30

console.log(`\nQuestion 30:\n`);

let usr = ["Ibbad", "Ibrahim", "Fazila", "Ayaan", "ALI"];

let new_users = ["ibbad", "Hammad", "AHYAAN", "ali"];

for (let i = 0; i < new_users.length; i++) {
  let new_username = new_users[i].toLowerCase();
  if (usr.some((new_users) => new_users.toLowerCase() === new_username)) {
    console.log(
      `${new_users[i]}, this username is taken, please enter a new username`
    );
  } else {
    console.log(`${new_users[i]}, this username is available`);
  }
}

// Question 31

console.log(`\nQuestion 31:\n`);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num === 1) {
    console.log(`${num}st`)
  } else if (num === 2) {
    console.log(`${num}nd`)
  } else if (num === 3) {
    console.log(`${num}rd`)
  } else {
    console.log(`${num}th`)
  }
}

// Question 32

console.log(`\nQuestion 32:\n`);

let pizza = ["Fajita", "Pepproni", "Chicago"];

for (let i = 0; i < pizza.length; i++) {
  console.log(`${pizza[i]}`);
}
console.log(`\n`)
for (let i = 0; i < pizza.length; i++) {
  console.log(`I like ${pizza[i]} pizza`);
}
console.log("\nI Like pizza because it tastes so good\nThe cheese and the tomato sauce just melts in my mouthn\nwith an amazing tender chicken\nit's a delicacy, I love pizza")

// Question 33

console.log(`\nQuestion 33:\n`);

let animal = ["Lion", "Tiger", "Leopard"];

for (let i = 0; i < animal.length; i++) {
  console.log(`${animal[i]}`);
}
console.log(`\n`);
for (let i = 0; i < animal.length; i++) {
  console.log(`A ${animal[i]} is a big cat`);
}

console.log("\nAny of these cats would make a great addition to the zoo");