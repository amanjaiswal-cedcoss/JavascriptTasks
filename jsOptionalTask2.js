function check() {
  flagName=checkName();
  flagEmail=checkEmail();
  flagPassword=checkPassword();
  console.log(flagName ,flagEmail, flagPassword)
if(flagName==flagEmail==flagPassword==true){
  document.getElementById("name").value='';
  document.getElementById("email").value='';
  document.getElementById("password").value='';
}
}
function checkName() {
  
  var flagName=false;
  var name = document.getElementById("name").value;
  var regexName = /^[A-Z][a-z]{2,} [A-Z][a-z]{2,}/;

  if (regexName.test(name) == false) {
    document.getElementById("nameOutput").innerHTML =
      "Name should contain first name and last name and upto 25 characters";
  }
  else{
    flagName=true;
    document.getElementById("nameOutput").innerHTML='';
    return flagName;
  }
}
function checkEmail() {
  flagEmail=false;
  var email = document.getElementById("email").value;
  var regexEmail = /^[A-Za-z][A-Za-z0-9_.]{2,}@[a-z]{2,}.[a-z]{2,}$/;
  if (regexEmail.test(email) == false) {
    document.getElementById("emailOutput").innerHTML =
      "Email cannot contain more than 30 characters";
  }
  else{
    flagEmail=true;
    document.getElementById("emailOutput").innerHTML='';
    return flagEmail;
  }
}
function checkPassword() {
  document.getElementById("passwordOutput").innerHTML=" ";
  flagPassword=false;
  var password = document.getElementById("password").value;
  var regexPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (password.length < 6) {
    document.getElementById("passwordOutput").innerHTML =
      "Password should contain more than 6 characters";
  }
  else{
  if (regexPassword.test(password) == false) {
    document.getElementById("passwordOutput").innerHTML =
      "Password should contain 1 Uppercase, 1 Lowercase and a special character";
  }
  else{
    flagPassword=true;
    return flagPassword;
  }
}
}
