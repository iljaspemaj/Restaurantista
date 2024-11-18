let paymentForm = document.getElementById("payment-form");
let payButton = document.getElementById("pay-button")

paymentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let cardNumber = document.getElementById("card-number").value;
    let cvc = document.getElementById("cvc").value;
    let expirationDate = document.getElementById("expiration-date").value;
    
    if (name.trim() === "" || 
    cardNumber.trim() === "" || 
    cvc.trim() === "" || 
    expirationDate.trim() === ""
) { //Trim eshte per te hequr te gjithe hapsiren e bardhe kryesore dhe pasuese prej vlerave hyrse ne input.
        alert("Please fill in all required fields");
        return;
    }

    // Check if the card number is valid
    if (!cardNumber.match(/^\d{13, 16}$/)) {
        alert("Please enter a valid card number!");
        return; // Behet ne rastin kur brenda nje funksioni ose blloku kodi mberrin kodi deri tek return pjeset e tjera anashkalohen
    }

    // Check if the CVC is valid
    if (!cvc.match(/^\d{3, 4}$/)) {
        alert("Please enter a valid CVC!");
        return;
    }

    document.getElementById("success-message").style.display = "block";

    paymentForm.style.filter = 'blur(4px)';
    
    paymentForm.reset();
})