// Creation of DataLayer 
window.dataLayer = {
    'pageTitle':document.title,
    'pagePath':window.location.pathname
}

const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('liked');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let subscribeButton = document.querySelector(".newsletter .btn");
    subscribeButton.addEventListener("click", function () {
        let emailInput = document.querySelector('input[type="email"]');
        let email = emailInput.value;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            alert("Valid email! Subscribed successfully.");
        } else {
            alert("Please enter a valid email address.");
        }
    });
});