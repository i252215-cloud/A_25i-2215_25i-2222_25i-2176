
window.addEventListener("load", function() {
    alert("Welcome to Toy Planet Payment Page! Review your order before paying.");
    console.log("Payment page loaded successfully");
});


const payBtn = document.querySelector(".pay-btn");
payBtn.addEventListener("click", function(e) {
    e.preventDefault(); 
    alert("Thank you! Your payment has been processed.");
    console.log("Pay button clicked. Payment confirmed.");
});
