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
