function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let allowed = "";
  if (includeUppercase) allowed += upper;
  if (includeLowercase) allowed += lower;
  if (includeNumbers) allowed += numbers;
  if (includeSymbols) allowed += symbols;

  if (allowed === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = allowed[Math.floor(Math.random() * allowed.length)];
    password += randomChar;
  }

  document.getElementById("result").value = password;
}

function copyPassword() {
  const result = document.getElementById("result");
  result.select();
  result.setSelectionRange(0, 99999); // for mobile
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

document.getElementById("length").addEventListener("input", function () {
  document.getElementById("lengthValue").textContent = this.value;
});
