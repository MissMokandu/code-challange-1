function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015; // 1.5%
  const minFee = 10;
  const maxFee = 70;

  let calculatedFee = amountToSend * feePercentage;

  // Apply minimum and maximum fee limits
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  const totalDebited = amountToSend + calculatedFee;

  // Output
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log(`\nSend Money Securely!`);
}

// Prompt the user
const userInput = prompt("Unatuma Ngapi? (KES):");
const amountToSend = parseFloat(userInput);

// Validate input
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Tafadhali ingiza kiasi sahihi cha kutuma.");
}


