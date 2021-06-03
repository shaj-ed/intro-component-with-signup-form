// DOM Select
const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email-address");
const password = document.querySelector("#password");

// Helper Variable
const emailPattern = /\S+\@+\S+\.+\S+/;

// Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validation()) {
    clearInput();
  }
});

// Functions //

// Validation
function validation() {
  let result = true;

  // Get input values
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  // First name validation
  if (!firstNameValue) {
    showError(firstName, "First name cannot be empty.");
    result = false;
  }

  // Last name validation
  if (!lastNameValue) {
    showError(lastName, "Last name cannot be empty.");
    result = false;
  }

  // Email validation
  if (!emailValue) {
    showError(email, "Email address cannot be empty.");
    result = false;
  } else if (!emailPattern.test(emailValue)) {
    showError(email, "Looks like this is not an email.");
    result = false;
  }

  // Password
  if (!passwordValue) {
    showError(password, "Password cannot be empty.");
    result = false;
  } else if (passwordValue.length < 7) {
    showError(password, "Password must have 8 characters.");
    result = false;
  }

  return result;
}

// Show error
function showError(input, text) {
  const inputParent = input.parentElement;
  // Change input border colot
  input.classList.add("error-border");
  const errorIcon = inputParent.querySelector("img");
  // Show error icon
  errorIcon.style.display = "block";
  const span = document.createElement("span");
  span.classList.add("error-message");
  span.innerText = text;

  // Append
  inputParent.appendChild(span);

  // Remove error after a while
  setTimeout(() => {
    input.classList.remove("error-border");
    errorIcon.style.display = "none";
    span.remove();
  }, 1000);
}

// Clear the fields after submit
function clearInput() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
}
