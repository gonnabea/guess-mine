/* eslint-disable prettier/prettier */
const { initSockets } = require("./sockets");

const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LoGGED_IN = "loggedIn";

const nickname = localStorage.getItem(NICKNAME);

const logIn = (nickname) => {
    // eslint-disable-next-line no-undef
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });
  initSockets(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LoGGED_IN;
  logIn(nickname);
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LoGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
