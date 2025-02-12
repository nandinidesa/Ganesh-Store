window.dataLayer = {
    event: 'pageview',
    pageTitle: document.title,
    pagePath: window.location.pathname,
    customerID: '2d08FB17EE273F4'
}
console.log(window.dataLayer);

function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

// Function to render product details from product.js
function renderProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId'); // Get product ID from URL

    const product = products.find(p => p.id === productId); // Find the product by ID
    if (product) {
        document.querySelector('.product-title').textContent = product.title;
        document.querySelector('.product-price').textContent = `$${product.price.toFixed(2)}`;
        document.querySelector('.product-description').textContent = product.description;
        document.getElementById('main-image').src = product.image;

        // Remove any existing event listeners on the "Add to Cart" button
        const addToCartButton = document.getElementById('add-to-cart-button');
        const newButton = addToCartButton.cloneNode(true);
        addToCartButton.parentNode.replaceChild(newButton, addToCartButton);

        // Set up the "Add to Cart" button
        newButton.addEventListener('click', function () {
            const quantity = parseInt(document.getElementById('quantity').value);
            if (quantity > 0) {
                addToCart({ ...product, quantity }); // Add product with quantity to cart
                alert('Product added to cart!'); // Alert message here
            } else {
                alert('Please enter a valid quantity.');
            }
        });
    } else {
        console.error("No product found with the given ID.");
    }
}

// Function to add product to cart
function addToCart(product) {
    // Get existing cart from local storage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        // If it exists, update the quantity
        existingProduct.quantity += product.quantity;
    } else {
        // If it doesn't exist, add it to the cart
        cart.push(product);
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Update the cart count in the navbar
}

// Run the render function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    renderProductDetails();
    updateCartCount();
});

// Function to update the cart count in the navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Sum up quantities
    document.getElementById('cart-count').innerText = totalQuantity; // Update the cart count
}