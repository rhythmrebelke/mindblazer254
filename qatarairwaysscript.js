// Form Submission Handler
document.getElementById("booking-form-qatar").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Collect form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // Show confirmation message
    alert(`Thank you, ${data['full-name']}! Your flight from ${data['departure-city']} to ${data['destination-city']} with ${data['airline']} has been booked.`);
});
