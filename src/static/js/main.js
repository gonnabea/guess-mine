(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBaUM7QUFBQSxNQUM3QkMsT0FENkIsR0FDUEQsSUFETyxDQUM3QkMsT0FENkI7QUFBQSxNQUNwQkMsUUFEb0IsR0FDUEYsSUFETyxDQUNwQkUsUUFEb0I7QUFFcENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGdCQUE2QkQsT0FBN0I7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlTm90aWYoZGF0YSl7XHJcbiAgICBjb25zdCB7bWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX0gOiAke21lc3NhZ2V9YClcclxufSJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You : ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYWMzNWQ5OWUuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQTZCO0FBQ3pCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUNELElBQUFBLE9BQU8sRUFBUEE7QUFBRCxHQUExQjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsaUJBQXFCSCxPQUFyQjtBQUNIOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQThCO0FBQzFCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVJLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNIOztBQUdEUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxjQUFWLEVBQTBCQyx3QkFBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hhbmRsZU1lc3NhZ2VOb3RpZn0gZnJvbSBcIi4vY2hhdFwiXHJcblxyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xyXG5cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSl7XHJcbiAgICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwge21lc3NhZ2V9KTtcclxuICAgIGNvbnNvbGUubG9nKGBZb3UgOiAke21lc3NhZ2V9YClcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpe1xyXG4gICAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLCB7IG5pY2tuYW1lIH0pO1xyXG59XHJcblxyXG5cclxuc29ja2V0Lm9uKFwibWVzc2FnZU5vdGlmXCIsIGhhbmRsZU1lc3NhZ2VOb3RpZikiXX0=
},{"./chat":1}]},{},[2])