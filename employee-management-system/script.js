const form = document.querySelector("form");
const outputTable = document.querySelector("#display-table tbody");

function displayData() {
   const existingEntries = JSON.parse(localStorage.getItem("employeeSetLists")) || [];

   outputTable.innerHTML = "";

   existingEntries.forEach((employee) => {
      const row = document.createElement("tr");

      row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.idNumber}</td>
      <td>${employee.position}</td>
      <td>${employee.salary}</td>
      <td>
         <button onclick="deleteEmployee(${employee.id})">Delete</button>
      </td>
      `;

      outputTable.appendChild(row);
   });
}

function deleteEmployee(id) {
   const existingEntries = JSON.parse(localStorage.getItem("employeeSetLists")) || [];

   const entriesUpdated = existingEntries.filter((employee) => employee.id !== id);

   localStorage.setItem("employeeSetLists", JSON.stringify(entriesUpdated));

   displayData();
}

form.addEventListener("submit", function (e) {
   e.preventDefault();

   /* DOM */
   const name = document.getElementById("name").value;
   const idNumber = document.getElementById("idNumber").value;
   const position = document.getElementById("position").value;
   const salary = document.getElementById("salary").value;

   if (name === "" || idNumber === "" || position === "" || salary === "") {
      alert("Please fill in all required input.");
      return;
   }

   const newEntry = {
      id: Date.now(),
      name: name,
      idNumber: idNumber,
      position: position,
      salary: salary,
   };

   const existingEntries = JSON.parse(localStorage.getItem("employeeSetLists")) || [];

   existingEntries.push(newEntry);

   localStorage.setItem("employeeSetLists", JSON.stringify(existingEntries));

   form.reset();
   displayData();
});
displayData();
