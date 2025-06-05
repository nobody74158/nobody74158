// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const message = contactForm.elements["message"].value;

    // Simulated form submission (you can replace this with real backend logic)
    alert(`Thank you, ${name}! Your message has been received.`);

    // Clear the form
    contactForm.reset();
  });
});
