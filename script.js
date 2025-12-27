console.log("JS START");
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

 form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameVal = document.getElementById("name").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const messageVal = document.getElementById("message").value.trim();

  formMsg.className = ""; // reset state

  if (nameVal === "" || emailVal === "" || messageVal === "") {
    formMsg.textContent = "Please fill all fields.";
    formMsg.classList.add("error");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailVal)) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.classList.add("error");
    return;
  }

  formMsg.textContent = "Thanks " + nameVal + ", your message is received.";
  formMsg.classList.add("success");
  form.reset();
});
 

console.log("JS END");
