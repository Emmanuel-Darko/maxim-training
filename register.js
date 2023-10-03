const entries = [];

const form = document.getElementById("registration-form");
const entriesTable = document.getElementById("entriesTable");
const entriesBody = document.getElementById("entriesBody");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const otherNames = document.getElementById("other-names").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("house-address").value;
  const guardianName = document.getElementById("guardian-name").value;
  const guardianPhone = document.getElementById("guardian-phone").value;

  const rowData = {
    firstName,
    otherNames,
    phoneNumber,
    email,
    address,
    guardianName,
    guardianPhone
  };
  entries.push(rowData);

  document.getElementById("first-name").value = "";
  document.getElementById("other-names").value = "";
  document.getElementById("phone-number").value = "";
  document.getElementById("email").value = "";
  document.getElementById("house-address").value = "";
  document.getElementById("guardian-name").value = "";
  document.getElementById("guardian-phone").value = "";

  while (entriesBody.firstChild) {
    entriesBody.removeChild(entriesBody.firstChild);
  }

  entries.forEach((entry) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const otherNamesCell = document.createElement("td");
    const phoneNumberCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const addressCell = document.createElement("td");
    const guardianNameCell = document.createElement("td");
    const guardianPhoneCell = document.createElement("td");

    firstNameCell.textContent = entry.firstName;
    otherNamesCell.textContent = entry.otherNames;
    phoneNumberCell.textContent = entry.phoneNumber;
    emailCell.textContent = entry.email;
    addressCell.textContent = entry.address;
    guardianNameCell.textContent = entry.guardianName;
    guardianPhoneCell.textContent = entry.guardianPhone;

    row.appendChild(firstNameCell);
    row.appendChild(otherNamesCell);
    row.appendChild(phoneNumberCell);
    row.appendChild(emailCell);
    row.appendChild(addressCell);
    row.appendChild(guardianNameCell);
    row.appendChild(guardianPhoneCell);
    entriesBody.appendChild(row);
  });
});
