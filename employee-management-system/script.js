const form = document.querySelector("form");
const outputTable = document.querySelector("#display-table tbody");

function displayData() {
   const existingEntries = JSON.parse(localStorage.getItem("personsSetLists")) || [];

   outputTable.innerHTML = "";

   existingEntries.forEach((person) => {
      const row = document.createElement("tr");

      row.innerHTML = `
      <td>${person.name}</td>
      <td>${person.idNumber}</td>
      <td>${person.position}</td>
      <td>${person.salary}</td>
      <td>
         <button onclick="deletePerson(${person.id})">Delete</button>
      </td>
      `;

      outputTable.appendChild(row);
   });
}

function deletePerson(id) {
   const existingEntries = JSON.parse(localStorage.getItem("personsSetLists")) || [];

   const entriesUpdated = existingEntries.filter((person) => person.id !== id);

   localStorage.setItem("personsSetLists", JSON.stringify(entriesUpdated));

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

   const existingEntries = JSON.parse(localStorage.getItem("personsSetLists")) || [];

   existingEntries.push(newEntry);

   localStorage.setItem("personsSetLists", JSON.stringify(existingEntries));

   form.reset();
   displayData();
});
displayData();
