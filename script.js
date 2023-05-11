console.log('connected');

const validateForm = () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const address = document.getElementById('address').value;
  const mobile = document.getElementById('mobile').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!name) {
    alert('Name must be filled out');
    return false;
  } else if (!/^[a-zA-Z ]+$/.test(name)) {
    alert('Name must contain only letters and spaces');
    return false;
  }

  if (!email) {
    alert('Email must be filled out');
    return false;
  }

  if (!age) {
    alert('Age must be filled out');
    return false;
  } else {
    // Check age is a number and is at least 18
    if (isNaN(age) || age < 18) {
      alert('You must be at least 18 years old to register');
      return false;
    }
  }

  if (!gender) {
    alert('Gender must be selected');
    return false;
  } else {
    // Check that a valid gender has been selected
    const validGenders = ['Male', 'Female'];
    if (!validGenders.includes(gender)) {
      alert('Invalid gender selected');
      return false;
    }
  }  

  if (!address) {
    alert('Address must be filled out');
    return false;
  }

  if (!mobile) {
    alert('Mobile number must be filled out');
    return false;
  } else if (!/^[0-9+]+$/.test(mobile)) {
    alert('Mobile number must contain only digits and the "+" sign');
    return false;
  }

  if (!password) {
    alert('Password must be filled out');
    return false;
  }

  if (!confirmPassword) {
    alert('Please confirm your password');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
  }

  return true;
}

const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (validateForm()) {
    const successMsg = document.createElement('p');
    successMsg.innerText = 'Your registration has been completed.';
    successMsg.style.color = 'green';
    successMsg.style.marginTop = '1rem';
    registrationForm.appendChild(successMsg);
    registrationForm.reset();
  }
});

