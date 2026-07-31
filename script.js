//const toggleButton = document.getElementById('theme-toggle');

//toggleButton.addEventListener('click', () => {
//  document.body.classList.toggle('dark-mode');
//});

const toggleSwitch = document.getElementById('theme-toggle');

if (toggleSwitch) {
  toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  });
}

//const toggleSwitch = document.getElementById('theme-toggle');

//toggleSwitch.addEventListener('change', () => {
//  document.body.classList.toggle('dark-mode');
//});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = "Thanks! (Note: this form doesn't actually send anything yet.)";
  });
}