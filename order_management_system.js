// Task 1
// Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 }
    { name: 'Americano', price: 4, quantity: 9 },
    { name: 'Ristretto', price: 3, quantity: 7 },
    { name: 'Red Eye', price: 5, quantity: 7 },
    { name: 'Irish', price: 4, quantity: 5 }
    ];

// Task 2
// Create an Orders Array of Order Objects
const orders = [];
orders.push({
    customerName: 'Karl Maverick',
    items: [
      { productName: 'Americano', quantity: 5 },
      { productName: 'Irish', quantity: 2 }
    ],
    status: 'Pending'
  });

// Task 4
// Create a Function to Calculate Total for an Order
function calculateOrderTotal (order) {
    return order.items.reduce((sum, coffee) => {
        const product = inventory.find(prod => prod.name === coffee.productName); // Const for finding coffee name in inventory array
        return product ? sum + product.price * coffee.quantity : sum; // Const for finding coffee name in inventory array
    }, 0);
}

// Calculate order total
const total = calculateOrderTotal(orders);
console.log(`Total for ${orders.customerName}: $${total}`); // Logs name of customer with order and total value of bill to be paid