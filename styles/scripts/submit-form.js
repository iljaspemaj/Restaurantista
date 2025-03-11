// document.getElementById("newsletter-form").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     const email = getElementById("email").value.trim();
//     const newsletter = document.getElementById("newsletter").checked;

//     const data = {
//         email: email,
//         newsletter: newsletter
//     }

//     localStorage.setItem("formSubmission", JSON.stringify(data));
    
//   });


document.getElementById("newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailaddress").value.trim(); // Correct ID
    const newsletter = document.getElementById("newsletter").checked;

    const data = {
        email: email,
        newsletter: newsletter,
    };

    // Store data in localStorage
    localStorage.setItem("formSubmission", JSON.stringify(data));

    // Send data to the server
    fetch("/submit-form", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((message) => {
            console.log("Server Response:", message);
            alert("Form submitted successfully!");
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form. Please try again.");
        });
});