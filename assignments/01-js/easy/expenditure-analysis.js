/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const groupedObject = {};
  const output = [];

  transactions.forEach((transaction) => {
    let price = transaction.price;
    let category = transaction.category;

    if (groupedObject[category]) {
      groupedObject[category] += price;
    } else {
      groupedObject[category] = price;
    }
  });

  for (const category in groupedObject) {
    output.push({ category: category, totalSpent: groupedObject[category] });
  }
  // console.log(output);
  return output;
}

module.exports = calculateTotalSpentByCategory;
