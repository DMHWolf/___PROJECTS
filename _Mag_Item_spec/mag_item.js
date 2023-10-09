// Define arrays for four different data sets
const culture = ["Aberration", "Human","Human","Human","Celestial", "Dragon","Drow","Dwarf","Dwarf","Elemental Air","Elemental Earth","Elemental Fire","Elemental Water","Elf","Elf","Fey","Fiend","Giant","Gnome","Undead"];
const detail = ["Arcane", "Bane", "Heroic", "Ornament","Prophecy","Religious","Sinister","Symbol of Power"];
const minorprop = ["Beacon", "Compass", "Conscientious", "Delver","Gleaming","Guardian","Harmonious","Hidden Message","Key","Language","Song Craft","Strange Material","Temperate","Unbreakable","War Leader","Waterbourne","Wicked","Illusion","Reroll"];
const quirk = ["Blissful", "Confident", "Covetous", "Frail","Hungry","Loud","Metamorphic","Muttering","Painful","Possessive","Repulsive","Slothful"];

// Function to generate a random message
function generateRandomMessage() {
  // Randomly select one item from each data set
  const randomCulture = culture[Math.floor(Math.random() * culture.length)];
  const randomDetail = detail[Math.floor(Math.random() * detail.length)];
  const randomProp = minorprop[Math.floor(Math.random() * minorprop.length)];
  const randomQuirk= quirk[Math.floor(Math.random() * quirk.length)];
  
  // Construct the message
  const message = `${randomCulture} ${randomDetail} ${randomProp} ${randomQuirk}`;

 // Return the generated message
 return message;
}

// Example usage
const randomMessage = generateRandomMessage();
console.log(randomMessage);