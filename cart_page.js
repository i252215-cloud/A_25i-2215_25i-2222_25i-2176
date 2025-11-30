alert("Welcome to Toy Planet Cart! Review your items before checkout.");
const qtyButtons = document.querySelectorAll(".qty-btn"); 
const qtyInputs = document.querySelectorAll(".qty-input"); 
const totalPrices = document.querySelectorAll(".total-price-data"); 
const priceCells = document.querySelectorAll(".price-data"); 
const checkoutBtn = document.querySelector(".checkout-btn"); 
const grandTotalEl = document.querySelector(".grand-total strong"); 
function updateTotals() {
    let subtotal = 0;
    qtyInputs.forEach((input, index) => {
        let quantity = parseInt(input.value);
        let price = parseInt(priceCells[index].textContent.replace("$", ""));
        let total = quantity * price;
        totalPrices[index].textContent = "$" + total;
        subtotal += total;
    });
    let tax = Math.round(subtotal * 0.14); 
    let grandTotal = subtotal + tax;
    grandTotalEl.textContent = "$" + grandTotal;
    console.log("Cart updated. Subtotal:", subtotal, "Tax:", tax, "Grand Total:", grandTotal);
}
qtyButtons.forEach(button => {
    button.addEventListener("click", function() {
        let input = this.parentElement.querySelector(".qty-input");
        let currentVal = parseInt(input.value);

        if(this.textContent === "+") {
            input.value = currentVal + 1;
        } else if(this.textContent === "-" && currentVal > 1) {
            input.value = currentVal - 1;
        }

        updateTotals();
    });
});


qtyInputs.forEach(input => {
    input.addEventListener("change", function() {
        if(this.value < 1 || isNaN(this.value)) this.value = 1;
        updateTotals();
    });
});


checkoutBtn.addEventListener("click", function() {
    alert("Thank you for your purchase! Your order has been placed.");
    console.log("Checkout clicked. Order processed.");
});
console.log("Cart page loaded successfully");
