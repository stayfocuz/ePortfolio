document.addEventListener('DOMContentLoaded', function () {
    // Modal functionality
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    document.getElementById('openModal').addEventListener('click', function () {
        myModal.show();
    });

    // Carousel functionality
    $('#projectCarousel').carousel({
        interval: 2000 // Change the speed as needed
    });

    // Form validation
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (event) {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');

        if (!name.value || !email.value || !message.value) {
            alert('All fields are required.');
            event.preventDefault();
        } else if (!validateEmail(email.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});