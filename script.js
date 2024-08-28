// script.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('appointment-form');

  form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic form validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const service = document.getElementById('service').value;

      if (!name || !email || !phone || !date || !time || !service) {
          alert('Please fill in all required fields.');
          return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          return;
      }

      // If validation passes, you would typically send this data to a server
      // For now, we'll just log it to the console and show a success message
      console.log('Form submitted:', { name, email, phone, date, time, service });
      alert('Appointment request submitted successfully! We will contact you shortly to confirm.');

      // Reset the form
      form.reset();
  });
});