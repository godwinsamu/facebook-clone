function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  if (email == "cgodwinsam@gmail.com" && pass == "godwinsamuelc") {
    alert("user verified");
  } else if (email == "" && pass == "") {
    alert("enter the input");
  } else {
    alert("input invalid");
  }
}