const form = document.querySelector('form'); // Gafar


// Listen to form submission event
form.addEventListener("submit", submitForm);

// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Function to call on form submission
function submitForm() {
  // Event object
  let event = window.event;

  // Preventing form submission so that we can do other things, in this case, validation
  event.preventDefault();

  // Get form values
  const firstName = document.querySelector('.first-name').value;
  const lastName = document.querySelector('.last-name')?.value;
  const email = document.getElementsByClassName('email')[0].value;
  const phoneNumber = document.getElementsByClassName('phone-number')[0].value;
  const password = document.querySelector('.password').value;
  const confirmPassword = document.getElementsByClassName('confirm-password')[0].value;
  const validateButton = document.querySelector("button");

  // Start validation
  let validationMessage = "";

  // Validate lastName
  if(!lastName || lastName < 3) validationMessage = "Please use a longer last name";

  // validate email: using regex
  if(!validateEmail(email)) validationMessage = "Check that you entered the correct email address";

  // Validate phone number: using regex
  if(!/^[234]\d{12}$/.test(phoneNumber)) validateMessage = "Enter your phone number in the format 2348165972229"

  // Validate password
  if (!/\d/.test(password))  validateMessage = 'Password must contain a number';
  if (!/[A-Z]/.test(password)) validateMessage = 'Password must contain an upperCase letter';
  if (password.length < 6) validateMessage = 'Password must be at least 6 characters long';

  // Validate confirm password
  if(password !== confirmPassword) validateMessage = "Please ensure that passwords match";

  document.querySelector("#validationResponse").innerHTML = validateMessage;

}