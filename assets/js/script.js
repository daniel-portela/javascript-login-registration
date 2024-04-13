const regsiterForm = document.querySelector(".register-form");
const submitBtn = document.getElementById("submit-btn");
const submissionStatus = document.querySelector(".submission-status");

// input values
const firstName = document.getElementById("firstname"),
  lastName = document.getElementById("lastname"),
  emailAddr = document.getElementById("email"),
  phoneNumber = document.getElementById("phonenumber"),
  password = document.getElementById("password"),
  confirmPassword = document.getElementById("confirm-password");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let isValidForm = validateInputValues();
  if (isValidForm) {
    submissionStatus.classList.add("successMessage");
    submissionStatus.textContent = "Registrado com sucesso!";
  } else {
    submissionStatus.classList.add("errorMessage");
    submissionStatus.textContent = "Falha no registro!";
  }

  setTimeout(() => {
    submissionStatus.classList.remove("errorMessage", "successMessage");
  }, 1500);
});

function validateInputValues() {
  let inputValidationStatus = [];
  if (validateName(firstName.value)) {
    inputStatus(true, firstName);
    inputValidationStatus[0] = true;
  } else {
    inputStatus(false, firstName);
    inputValidationStatus[0] = false;
  }

  if (validateName(lastName.value)) {
    inputStatus(true, lastName);
    inputValidationStatus[1] = true;
  } else {
    inputStatus(false, lastName);
    inputValidationStatus[1] = false;
  }

  if (validateEmail(emailAddr.value)) {
    inputStatus(true, emailAddr);
    inputValidationStatus[2] = true;
  } else {
    inputStatus(false, emailAddr);
    inputValidationStatus[2] = false;
  }

  if (validatePhoneNo(phoneNumber.value)) {
    inputStatus(true, phoneNumber);
    inputValidationStatus[3] = true;
  } else {
    inputStatus(false, phoneNumber);
    inputValidationStatus[3] = false;
  }

  if (validatePassword(password.value)) {
    inputStatus(true, password);
    inputValidationStatus[4] = true;
  } else {
    inputStatus(false, password);
    inputValidationStatus[4] = false;
  }

  if (
    confirmPassword.value.trim() !== "" &&
    validateConfirmPassword(password.value, confirmPassword.value)
  ) {
    inputStatus(true, confirmPassword);
    inputValidationStatus[5] = true;
  } else {
    inputStatus(false, confirmPassword);
    inputValidationStatus[5] = false;
  }

  return inputValidationStatus.includes(false) ? false : true;
}

// Validar primeiro e último nome
function validateName(nameTxt) {
  const nameRegex = /^[A-Za-z]+$/; // Nome ou sobrenome contendo apenas letras
  return nameRegex.test(nameTxt);
}

// Validar endereço de e-mail
function validateEmail(emailTxt) {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(emailTxt);
}

// Validar número de telefone
function validatePhoneNo(phoneTxt) {
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return phoneRegex.test(phoneTxt);
}

// Validar senha
function validatePassword(passwordTxt) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // Mínimo de oito caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial
  return passwordRegex.test(passwordTxt);
}

// Validar confirmação de senha
function validateConfirmPassword(passwordTxt, confirmPasswordTxt) {
  return passwordTxt == confirmPasswordTxt;
}

// Status de erro ou sucesso
function inputStatus(status, input) {
  let inputGroup = input.parentElement;
  if (status) {
    inputGroup.classList.add("success");
  } else {
    inputGroup.classList.add("error");
  }

  setTimeout(() => {
    inputGroup.classList.remove("success", "error");
  }, 1500);
}
