const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


const formsubmit = () => {

  let email = document.getElementById("email-address");
  let fullName = document.getElementById("full-name");
  let msg = document.getElementById("message");
  let submit = document.getElementById("formSubmit")

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (fullName.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(fullName.value, email.value, msg.value,);
      success();
    }
  })
}
formsubmit();

function sendmail(fullName, email, msg) {
  const formData = {
    from_name: fullName,
    to_name: email,
    message: msg
  };

  emailjs.send('service_5un9k9c', 'template_73yyald', formData)
}

function emptyerror() {
  swal("Oops...", "Fields cannot be empty!", "error");
}

function error() {
  swal("Oops...", "Something went wrong!", "error");
}

function success() {
  swal("Success...", "Successfully sent message", "success")
}