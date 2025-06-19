// validate.js

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form from submitting

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Form submitted successfully!');
  // You can now send the form data using fetch/ajax if needed
  document.getElementById('contactForm').reset();
});
