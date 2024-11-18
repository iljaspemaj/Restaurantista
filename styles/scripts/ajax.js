function openModel() {
    document.getElementById("myModal").style.display = "block";
}

function closeModel() {
    document.getElementById("myModal").style.display = "none";
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

$(document).ready(function(){
    $(".menu-item").click(function(){
        $("#newsletter-form").submit(function(event){
            event.preventDefault();

            let email = $("#email").val().trim();
            var newsletter = $("#checkbox").is("checked");

            if(!isInvalidEmail(email)){
                showMessage("Please enter a vaild email address", "error");
                return;
            }

            $.ajax({
                url: "/submit-form.js",
                type: "POST",
                data: { email: email, 
                    newsletter: newsletter },
                success: function(response){
                    showMessage("Thank you for subscribind!", "success");
                },
                error: function(xhr, status, error){
                    showMessage("An error ocurred. Please try again later", "error");
                    console.log(xhr.responseText);
                }
            })
        })
    })
});

function showMessage(message, type){
    let messageContainer = $("message-container");
    messageContainer.text(message);
    
    messageContainer.removeClass().addClass(type);

    let countdown = 10;
    let interval = setInterval(function(){
        messageContainer.html(
        `Page will reload in ${countdown} seconds ${countdown !== 1 ? "s" : ""}`
    );
    countdown--;
    
    if(countdown < 0){
        clearInterval(countdownInterval);
        window.location.reload();
    }
    }, 1000)
}