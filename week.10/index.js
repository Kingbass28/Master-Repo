
  document.getElementById('toppingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('toppingName').value;
    const type = document.getElementById('toppingType').value;
    const spicy = document.getElementById('toppingSpicy').value;

    // Create a new row and cells
    const table = document.getElementById('toppingsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = type;
    newRow.insertCell(2).textContent = spicy;

    // Clear the form
    document.getElementById('toppingForm').reset();
  });