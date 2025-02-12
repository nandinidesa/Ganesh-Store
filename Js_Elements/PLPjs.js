const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('liked');
    });
});
console.log(window.dataLayer);

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

document.querySelectorAll('.product-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const productId = this.getAttribute('data-product-id');
        const product = products.find(p => p.id == productId);
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = this.getAttribute('href');
    });
});