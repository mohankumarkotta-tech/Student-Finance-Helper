let student = { name: "", income: 0 };

document.getElementById("detailsForm").addEventListener("submit", function(e) {
  e.preventDefault();
  student.name = document.getElementById("studentName").value;
  student.income = parseInt(document.getElementById("studentIncome").value);

  document.getElementById("displayName").innerText = student.name;
  document.getElementById("displayIncome").innerText = student.income;

  // Budget breakdown
  document.getElementById("budgetName").innerText = student.name;
  document.getElementById("budgetFood").innerText = Math.round(student.income * 0.3);
  document.getElementById("budgetRent").innerText = Math.round(student.income * 0.4);
  document.getElementById("budgetTransport").innerText = Math.round(student.income * 0.1);
  document.getElementById("budgetSavings").innerText = Math.round(student.income * 0.2);

  // Expenses suggestion
  document.getElementById("expensesName").innerText = student.name;
  document.getElementById("expenseFood").innerText = Math.round(student.income * 0.1);
  document.getElementById("expenseBooks").innerText = Math.round(student.income * 0.15);
  document.getElementById("expenseTravel").innerText = Math.round(student.income * 0.05);

  // Savings goals
  document.getElementById("savingsName").innerText = student.name;
  document.getElementById("savingsLaptop").innerText = Math.round(student.income * 0.15);
  document.getElementById("savingsProject").innerText = Math.round(student.income * 0.1);
  document.getElementById("savingsEmergency").innerText = Math.round(student.income * 0.05);

  // Bills
  document.getElementById("billsName").innerText = student.name;
  document.getElementById("billsElectricity").innerText = Math.round(student.income * 0.05);
  document.getElementById("billsInternet").innerText = Math.round(student.income * 0.05);

  // Split expenses
  document.getElementById("splitName").innerText = student.name;
  let rentShare = Math.round(student.income * 0.4);
  document.getElementById("splitRent").innerText = rentShare;
  document.getElementById("splitPerPerson").innerText = Math.round(rentShare / 3);

  // Advice based on income
  document.getElementById("adviceName").innerText = student.name;
  let adviceText = "";
  if (student.income < 5000) {
    adviceText = "Your income is limited. Focus on essentials and save at least ₹500 per month.";
  } else if (student.income <= 15000) {
    adviceText = "Maintain 20% savings and avoid overspending on entertainment.";
  } else {
    adviceText = "With a good income, diversify savings into SIPs or mutual funds.";
  }
  document.getElementById("adviceText").innerText = adviceText;

  // Show dashboard
  document.getElementById("student-form").classList.remove("active-module");
  document.getElementById("dashboard").classList.add("active-module");
});

function openModule(moduleId) {
 
