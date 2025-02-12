function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartTotal = 0;

    cartItemsContainer.innerHTML = ''; // Clear existing items

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity; // Calculate total for this item
        cartTotal += itemTotal;

        const cartItem = `
            <div class="col-md-12 mb-4">
                <div class="card h-100 shadow-sm cart-item-card">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <img src="${item.image}" class="img-fluid" alt="${item.title}" style="width: 80px; height: 80px; object-fit: cover;">
                            <div class="ms-3">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">$${item.price.toFixed(2)} x ${item.quantity}</p> <!-- Ensure quantity is displayed correctly -->
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-danger" onclick="removeFromCart('${item.id}')">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItem;
    });

    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId); // Remove the item from the cart
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems(); // Re-render the cart items
    updateCartCount(); // Update the cart count
}