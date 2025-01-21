let expensesForm = document.getElementById("expensesForm");

expensesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newExpense = { amount: amountInput.value, location: locationInput.value };
  console.log(newExpense, "Here are the new expenses: ");
});
