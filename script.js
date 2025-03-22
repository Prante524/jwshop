function showMessage() {
    alert("Welcome to Elegant Jewelry! Discover timeless pieces crafted for elegance and sophistication.");
    document.body.style.backgroundColor = "#f5e1c8";
    setTimeout(() => {
        document.body.style.backgroundColor = "#f9f9f9";
    }, 1000);
}

function addToCart() {
    alert("Jewelry item added to your cart!");
    let cartIcon = document.getElementById("cart-icon");
    cartIcon.classList.add("bounce");
    setTimeout(() => {
        cartIcon.classList.remove("bounce");
    }, 1000);
}

function submitForm(event) {
    event.preventDefault();
    alert("Thank you for reaching out! Our team will contact you shortly.");
    document.getElementById("contact-form").reset();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    alert("Experience our jewelry collection in a new elegant look!");
}

function showDiscount() {
    alert("Exclusive Offer! Get 20% off on diamond collections this week only!");
}

function subscribeNewsletter() {
    alert("Thank you for subscribing! Stay updated on new arrivals and exclusive jewelry offers.");
}
