const form = document.querySelector("form");
const outputTable = document.querySelector("#output-table tbody");

form.addEventListener("submit", function (e) {
   e.preventDefault(e);

   const name = document.getElementById("name").value;
   const grade = document.getElementById("grade").value;
   const gender = document.querySelector('input[name="gender"]:checked');
   const gradeValue = Number(grade);

   if (name === "" || grade === "" || !gender || gradeValue < 0 || gradeValue > 100) {
      alert("Please fill in all required input and grade must be 0-100.");
      return;
   }

   const genderValue = gender.value;

   let remarks;

   if (gradeValue <= 74) {
      remarks = "Failed";
   } else if (gradeValue <= 89) {
      remarks = "Passed";
   } else {
      remarks = "Excellent";
   }

   const row = document.createElement("tr");

   row.innerHTML = `
   <td>${name}</td>
   <td>${grade}</td>
   <td>${remarks}</td>
   <td>${genderValue}</td>
   <td>
      <button id="delete-btn">Delete</button>
   </td>
   `;

   row.querySelector("#delete-btn").addEventListener("click", function () {
      row.remove();
   });

   outputTable.appendChild(row);

   form.reset();
});
