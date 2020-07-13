const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const nickname = localStorage.getItem("nickname");
const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LoGGED_IN = "loggedIn";
console.log("asdfffffffff")
if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LoGGED_IN;
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  console.log(value);
  localStorage.setItem(NICKNAME, value);
  input.value = "";
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
