const inputEmail = document.querySelector("form input[type='email']");
const submitInput = document.querySelector("form input[type='submit']");
const errorSpan = document.getElementById("error");
const loader = document.querySelector(".loader");
const overlay = document.querySelector(".overlay");
const newsletterForm = document.getElementById("newsletterForm");

inputEmail.addEventListener("focus", () => {
  errorSpan.textContent = "";
  inputEmail.style.border = "3px dotted rgb(86, 170, 209)";
  inputEmail.style.outline = "none";
});

submitInput.addEventListener("click", (e) => {
  e.preventDefault(); 

  let submit = false;
  const emailValue = inputEmail.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
  inputEmail.style.borderColor = "red";

  if (emailValue === "") {
    errorSpan.textContent = "Please fill in your email";
  } else if (!emailPattern.test(emailValue)) {
    errorSpan.textContent = "Valid email required";
  } else {
    errorSpan.textContent = "";
    inputEmail.style.border = "1px solid hsl(231, 7%, 60%)";
    submit = true;
  }

  if (submit) {
    showLoader();
    
    setTimeout(() => {
      window.location.href = `thankyou.html?email=${encodeURIComponent(emailValue)}`;
       hideLoader();
    }, 900); 
  
  }
});

function showLoader() {
  loader.style.visibility = "visible";
  overlay.style.visibility = "visible";
}

function hideLoader() {
  loader.style.visibility = "hidden";
  overlay.style.visibility = "hidden";
}
