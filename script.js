let nameCheck = false;
let emailCheck = false;
let phoneCheck = false;

let name1 = document.getElementById("name");
name1.addEventListener("blur", () => {
  nameVal = name1.value;
  reg = /^[a-zA-Z][0-9a-zA-Z]{2,10}$/;
  if (reg.test(nameVal)) {
    name1.classList.remove("is-invalid");
    nameCheck = true;
} else {
    name1.classList.add("is-invalid");
    nameCheck = false;
  }
});

let email1 = document.getElementById("email");
email1.addEventListener("blur", () => {
  emailVal = email1.value;
  reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg1.test(emailVal)) {
    email1.classList.remove("is-invalid");
    emailCheck = true;
} else {
    email1.classList.add("is-invalid");
    emailCheck = false;
  }
});
let mobilenumber1 = document.getElementById("mobilenumber0");
mobilenumber1.addEventListener("blur", () => {
  mobilenumberVal = mobilenumber1.value;
  reg1 = /^[0-9]{10}$/;
  if (reg1.test(mobilenumberVal)) {
    mobilenumber1.classList.remove("is-invalid");
    phoneCheck = true;
} else {
    mobilenumber1.classList.add("is-invalid");
    phoneCheck = false;
  }
});

Btn1 = document.getElementById("Btn1");
alert1 = document.getElementById("alert1");
Btn1.addEventListener("click", function () {
  if (nameCheck && emailCheck && phoneCheck) {
    html = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
    alert1.innerHTML = html;
  } else {
    html = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
    alert1.innerHTML = html;
  }
  setInterval(() => {
      alert1.innerHTML = '';
  }, 2000);
  

});
