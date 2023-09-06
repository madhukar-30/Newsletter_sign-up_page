// Parse the query parameters from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get the email query parameter
const email = urlParams.get("email");

if (email) {
    // Display the email on the page
    document.getElementById("emailPlace").textContent = email;
}

document.addEventListener("DOMContentLoaded",function(){
    const dismissButton = document.getElementById("dismiss-button");
    dismissButton.addEventListener("click",function(){
        window.location.href="index.html";
    });
});
