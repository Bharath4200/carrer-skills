const doraemon = document.getElementById("doraemon");
const password = document.getElementById("password");

password.addEventListener("focus", () => {
  doraemon.src = "assets/doraemon-closed.png"; // eyes closed
});

password.addEventListener("blur", () => {
  doraemon.src = "assets/doraemon.png"; // eyes open
});

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Simple demo login (frontend only)
  if (user === "admin" && pass === "1234") {
    window.location.href = "index.html"; // CONNECTS TO INDEX
  } else {
    error.innerText = "❌ Invalid Username or Password";
  }
}
