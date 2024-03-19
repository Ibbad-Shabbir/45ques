// Question 1 : personal message
var ibbad = "ibbad";
console.log("\nQuestion 1:\nhello ".concat(ibbad, ", would you like to learn some python today?"));
// Question 2 : name case
console.log("\nQuestion 2:\n", ibbad.toLowerCase(), ibbad.toUpperCase(), ibbad.charAt(0).toUpperCase() + ibbad.slice(1).toLowerCase());
// Question 3 : famous quote
var author = "Quaid-e-Azam";
console.log("\nQuestion 3:\n".concat(author, " once said, \"I do not believe in taking right decision, i take a decision and make it right\""));
// Question 4 : famous quote 2
var famous_person = "Quaid-e-Azam";
var message = "\nQuestion 4:\n".concat(famous_person, " once said, \"I do not believe in taking right decision, i take a decision and make it right\"");
console.log(message);
// Question 5 : Stripping names
var Name = "\tIbbad Shabbir\n";
console.log("\nQuestion 5:\nName with whitespace:", Name);
var strippedName = Name.trim();
console.log("Stripped name:", strippedName);
// Question 6 : Number eight
var additionResult = 5 + 3;
console.log("\nQuestion 6:\n5 + 3 =", additionResult);
var subtractResult = 13 - 5;
console.log("13 - 5 =", subtractResult);
var multiplyResult = 4 * 2;
console.log("4 * 2 =", multiplyResult);
var divideResult = 16 / 2;
console.log("16 / 2 =", divideResult);
// Question 7 : Favourite number
var FavouriteNumber = 34;
console.log("\nQuestion 7:\nMy favourite number is", FavouriteNumber);
// Question 8 : Comment
// These are the 45 questions made by M.Ibbad roll # 00348484, date : 19/3/24
// Question 9 : Arrays
var names = ["Ibrahim", "Ahyaan", "Hammad", "Ahmed"];
console.log("\nQuestion 9:");
for (var i = 0; i < names.length; i++) {
    console.log("".concat(names[i]));
}
// Question 10 : personalized message
console.log("\nQuestion 10:");
for (var i = 0; i < names.length; i++) {
    console.log("Hello ".concat(names[i], ", would you like to learn some python today?"));
}
// Question 11 : Favourite car
var transport = [
    "Maserati Gran Turismo",
    "Mercedes AMG G63",
    "BMW M4",
    "Nissan Skyline R34",
];
console.log("\nQuestion 11:");
for (var i = 0; i < transport.length; i++) {
    console.log("I would like to own a ".concat(transport[i]));
}
// Question 12 : Guest
console.log("\nQuestion 12:");
var guest = ["Ibrahim", "Ahyaan", "Hammad", "Ahmed"];
for (var i = 0; i < guest.length; i++) {
    console.log("Dear, ".concat(guest[i], ", You are invited to dinner :)"));
}
// Question 13 : Guest part 2
console.log("\nQuestion 13:");
// Find index of guest who cannot make it to dinner
var guestWhoCantMakeIt = "Hammad";
console.log("\n".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the name with "Farzan"
var indexOfGuestWhoCantMakeIt = guest.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guest[indexOfGuestWhoCantMakeIt] = "Farzan";
}
// Update the List
console.log("\nUpdated Guest List:");
for (var i = 0; i < guest.length; i++) {
    console.log("".concat(i + 1, ". ").concat(guest[i]));
}
// Update the Message
console.log("\nInvitation Messages:");
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], ",\nYou are invited to the dinner. See you soon!\n"));
}
// Question 14 : Guest part 3
console.log("\nQuestion 14:");
// Adding guest to start of the array
guest.unshift("Shabbir");
// Adding guest to middle of the array
guest.splice(Math.floor(guest.length / 2), 0, "Zaid");
// Adding guest to end of the array
guest.push("Ammar");
// Informing people about table
console.log("\nWe're getting a bigger table, i'll invite more people to dinner.");
// Updating invitation message
console.log("\nInvitation Message:");
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], ",\nYou are invited to the dinner. See you soon!\n"));
}
// Question 15 : Guest Part 4
console.log("\nQuestion 15:");
//sorry message
console.log("\nWe can only invite two people for dinner, I'm sorry to say that some of you won't be able to join me.");
// Remove guest from the guest list
while (guest.length > 2) {
    var removedGuest = guest.pop();
    console.log("\nSorry ".concat(removedGuest, " I cant invite you to dinner."));
}
// Invitation to the remaining guest
console.log("\nInvitation Message:");
for (var i = 0; i < guest.length; i++) {
    console.log("Dear ".concat(guest[i], ",\nYou are still invited to the dinner. See you soon!\n"));
}
// Remove the guests
guest.pop();
guest.pop();
// final list
console.log("\nThe final guest list is:");
console.log(guest);
// Question 16 : Seeing the world
console.log("\nQuestion 16:");
var world = ["Italy", "Vatican City", "Paris", "Scotland", "London"];
console.log("\nOrignal order:");
for (var i = 0; i < world.length; i++) {
    console.log("\n".concat(world[i]));
}
// sort
console.log("\nSorted order:");
for (var i = 0; i < world.length; i++) {
    console.log("\n".concat(world.slice().sort()[i], "\n"));
}
// orignal
console.log("\nOriginal order (again):");
for (var i = 0; i < world.length; i++) {
    console.log("\n".concat(world[i], "\n"));
}
// reverse
console.log("\nReverse alphabet order:");
for (var i = 0; i < world.length; i++) {
    console.log("\n".concat(world.slice().sort().reverse()[i], "\n"));
}
// orignal
console.log("\nOriginal order (once again):");
for (var i = 0; i < world.length; i++) {
    console.log("\n".concat(world[i], "\n"));
}
// Reverse
console.log("\nReverse order:");
for (var i = 0; i < world.length; i++) {
    console.log("\n".concat(world.reverse()[i], "\n"));
}
// Reverse
console.log("\nReverse order (again) /*its back to its orignal state*/ :");
for (var i = 0; i < world.length; i++) {
    console.log("\n".concat(world.reverse()[i], "\n"));
}
// Alphabetical order
console.log("\nAplhabetical order (again):");
for (var i = 0; i < world.length; i++) {
    console.log("\n".concat(world.sort()[i], "\n"));
}
// Alphabetical order reverse
console.log("\nAlphabetic reverse order:");
for (var i = 0; i < world.length; i++) {
    console.log("\n".concat(world.sort().reverse()[i], "\n"));
}
