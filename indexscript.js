document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#airways-links a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
            const targetElement = document.getElementById(targetId);
            
            // Scroll smoothly to the target element
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
