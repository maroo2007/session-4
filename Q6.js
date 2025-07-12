function calculateShipping(weight) {
  return new Promise((resolve, reject) => {
    if (weight <= 0) {
      reject(new Error("Weight must be positive"));
    } else {
      const cost = weight * 5;
      resolve(cost);
    }
  });
}


calculateShipping(2)
  .then(cost => console.log(`Shipping cost: $${cost}`))
  .catch(error => console.error("Error:", error.message));

calculateShipping(-1)
  .then(cost => console.log(`Shipping cost: $${cost}`))
  .catch(error => console.error("Error:", error.message));
