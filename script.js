const showFormButton = document.getElementById('show-form');
const contactForm = document.getElementById('contact-form');

showFormButton.addEventListener('click', function() {
  contactForm.style.display = 'block';
  showFormButton.style.display = 'none';
});