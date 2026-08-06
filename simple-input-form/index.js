const form = document.querySelector("form");
const outputTable = document.querySelector("#output-table tbody");

form.addEventListener("submit", function (e) {
   e.preventDefault();

   const fullName = document.getElementById("fullName").value;
   const email = document.getElementById("email").value.trim();
   const password = document.getElementById("password").value.trim();
   const gender = document.querySelector('input[name="gender"]:checked');
   const interests = document.querySelectorAll('input[name="interests"]');

   const selectedInterests = [];

   interests.forEach((checkbox) => {
      if (checkbox.checked) {
         selectedInterests.push(checkbox.value);
      }
   });

   if (email === "" || password === "") {
      alert("Email and Password is required.");
      return;
   }

   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
   }

   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   if (!passwordPattern.test(password)) {
      alert(
         "Password must contain at least:\n" +
            "- 8 characters\n" +
            "- One uppercase letter\n" +
            "- One lowercase letter\n" +
            "- One number\n" +
            "- One special character",
      );
      return;
   }

   if (!gender) {
      alert("Please select a gender.");
      return;
   }

   if (selectedInterests.length === 0) {
      alert("Please select at least one interest.");
      return;
   }

   const selectedGender = gender.value;

   const row = document.createElement("tr");

   row.innerHTML = `
   <td>${fullName}</td>
   <td>${email}</td>
   <td>${selectedGender}</td>
   <td>${selectedInterests.join(", ")}</td>
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
