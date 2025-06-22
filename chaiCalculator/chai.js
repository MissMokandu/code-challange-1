function calculateChaiIngredients() {
  let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  let numberOfCups = parseInt(input);

  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    alert("Please enter a valid number of cups.");
    return;
  }

  let water = numberOfCups * 200;
  let milk = numberOfCups * 50;
  let teaLeaves = numberOfCups;
  let sugar = numberOfCups * 2;

  let message = `To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:\n` +
                `Water: ${water} ml\n` +
                `Milk: ${milk} ml\n` +
                `Tea Leaves (Majani): ${teaLeaves} tablespoon(s)\n` +
                `Sugar (Sukari): ${sugar} teaspoon(s)\n\n` +
                `Enjoy your Chai Bora!`;

  console.log(message);
  document.getElementById("output").textContent = message;
}

