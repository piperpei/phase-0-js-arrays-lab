// Write your code here

// Product Array 

const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to Grab First Product Info 

function logFirstProduct() {
  console.log(products[0]);
}

// Function to Add a Product 

function addProduct(productName) {
  products.push(productName);
}

// Add New Product and Name 

function updateProductName(index, newName) {
  products[index] = newName;
}

// Funtion that Removes Last Product 

function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
