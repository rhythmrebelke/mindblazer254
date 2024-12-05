// JavaScript for booking form validation and interaction

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form-uganda');

    // Handle form submission
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Grab the form values
        const name = bookingForm.querySelector('input[name="full-name"]').value;
        const email = bookingForm.querySelector('input[name="email"]').value;

        // Simple form validation (ensure name and email are filled)
        if (name && email) {
            alert(`Thank you for booking, ${name}! We will send a confirmation to ${email}.`);
            bookingForm.reset(); // Reset the form fields
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
