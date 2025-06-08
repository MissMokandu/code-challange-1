function calculateChaiIngredients(numberOfCups) {
  // Ingredient quantities per cup
  const waterPerCup = 200; 
  const milkPerCup = 50;   
  const teaLeavesPerCup = 1;
  const sugarPerCup = 2;   

  
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  
  console.log(`To make ${numberOfCups} cup${numberOfCups > 1 ? 's' : ''} of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''}`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
  console.log(`\nEnjoy your Chai Bora!`);
}


const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(userInput);


if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}
