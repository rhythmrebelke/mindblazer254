// JavaScript for the booking form submission
document.getElementById("booking-form-tanzanian").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // Display a dynamic confirmation message
    const message = `
        Thank you, ${data['full-name']}!
        Your flight from ${data['departure-city']} to ${data['destination-city']} with Tanzanian Airways has been booked successfully.
        A confirmation email will be sent to ${data['email']}.
    `;
    alert(message);

    // Reset the form after submission
    event.target.reset();
});
