const products = { 1: "Laptop", 2: "Phone", 3: "Tablet" };

function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products[id]) {
        resolve(products[id]);
      } else {
        reject(new Error("Product not found"));
      }
    }, 500);
  });
}


getProduct(1)
  .then(product => console.log("Product:", product))
  .catch(error => console.error("Error:", error.message));

getProduct(99)
  .then(product => console.log("Product:", product))
  .catch(error => console.error("Error:", error.message));
