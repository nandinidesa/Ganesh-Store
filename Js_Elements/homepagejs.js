// Creation of DataLayer 
window.dataLayer = {
    event :'pageview',
    pageTitle : 'hoempage',
    userType : 'Guest',
    customerID : '2d08FB17EE273F4'
}
console.log(window.dataLayer);

let a = document.querySelector(".btn");
a.addEventListener("click", function () {
    let emailInput = document.querySelector('input[type="email"]');
    let email = emailInput.value;

    // Regular expression to validate email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert("Valid email! Subscribed successfully.");
        storeEmail(email);
    } else {
        alert("Please enter a valid email address.");
    }
});