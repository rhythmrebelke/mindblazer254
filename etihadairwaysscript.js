// Form Submission Handler
document.getElementById("booking-form-etihad").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Collect form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // Display confirmation message
    alert(`Thank you, ${data['full-name']}! Your flight from ${data['departure-city']} to ${data['destination-city']} with ${data['airline']} has been booked.`);
});
