// Task 1
// Create an Inventory Array of Product Objects
const inventory = [
    { name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 },
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
      { name: 'Americano', quantity: 5 },
      { name: 'Irish', quantity: 2 }
    ],
    status: 'Pending'
  });

// Task 3
// Create a Function to Place an Order
function placeOrder(customerName, purchase) {
    // Check stock availability
    for (let i = 0; i < purchase.length; i++) {
        const item = purchase[i];
        const product = inventory.find(prod => prod.name === item.name);
        if (!product || product.quantity < item.quantity) {
            console.log(`${item.name} not available`);
             return;// Do not place the order
        }
    }

    // Update inventory and add order
    for (let i = 0; i < purchase.length; i++) {
        const item = purchase[i];
        const product = inventory.find(prod => prod.name === item.name);
        product.stock -= item.quantity; // Update stock directly
    }

    // Create and store the new order
    const newOrder = {
        customerName: customerName,
        items: purchase,
        status: "Pending"
    };
    orders.push(newOrder);

    console.log(`Order placed successfully for ${customerName}:`, newOrder);
}

// Example usage
placeOrder("Connor Manley", [{ name: "Irish", quantity: 3 },{ name: "Latte", quantity: 5 },{ name: "Ristretto", quantity: 4 }]);

// Task 4
// Create a Function to Calculate Total for an Order
function calculateOrderTotal (order) {
    return order.items.reduce((sum, coffee) => {
        const product = inventory.find(prod => prod.name === coffee.name); // Const for finding coffee name in inventory array
        return product ? sum + product.price * coffee.quantity : sum; // Const for finding coffee name in inventory array
    }, 0);
}

// Calculate order total
const lastOrder = orders[orders.length - 1];
const total = calculateOrderTotal(lastOrder);
console.log(`Total for ${lastOrder.customerName}: $${total}`); // Logs name of customer with order and total value of bill to be paid

// Task 5
// Create a Function to Mark an Order as Completed
function completeOrder(customerName){
        const orders = inventory.find(ord => ord.customerName === customerName);
        if(!orders){
            console.error(`${customerName}'s order was not found.`);
        }else{
            console.log(`${customerName}'s order is complete.`)
            order.status="Complete"
        }
    }
    completeOrder('Carl Maverick');
    completeOrder('Connor Manly');

// Task 6
// Create a Function to Mark an Order as Completed