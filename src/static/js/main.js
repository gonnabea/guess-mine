(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var nickname = localStorage.getItem("nickname");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LoGGED_IN = "loggedIn";

if (nickname === null) {
  body.className = "loggedOut";
} else {
  body.className = "loggedIn";
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  console.log(value);
  localStorage.setItem(NICKNAME, value);
  input.value = "";
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNWY5YmJkYjguanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTklDS05BTUUiLCJMT0dHRURfT1VUIiwiTG9HR0VEX0lOIiwiY2xhc3NOYW1lIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBR0EsSUFBTUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBakI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7O0FBRUEsSUFBR0wsUUFBUSxLQUFLLElBQWhCLEVBQXFCO0FBQ2pCTCxFQUFBQSxJQUFJLENBQUNXLFNBQUwsR0FBaUIsV0FBakI7QUFDSCxDQUZELE1BRU87QUFDSFgsRUFBQUEsSUFBSSxDQUFDVyxTQUFMLEdBQWlCLFVBQWpCO0FBQ0g7O0FBRUQsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR1osU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGNEIsTUFHcEJjLEtBSG9CLEdBR1ZELEtBSFUsQ0FHcEJDLEtBSG9CO0FBSTVCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBVixFQUFBQSxZQUFZLENBQUNhLE9BQWIsQ0FBcUJYLFFBQXJCLEVBQStCUSxLQUEvQjtBQUNBRCxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0gsQ0FQRDs7QUFTQSxJQUFHYixTQUFILEVBQWE7QUFDVEEsRUFBQUEsU0FBUyxDQUFDaUIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNSLGdCQUFyQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIilcclxuXHJcblxyXG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmlja25hbWVcIik7XHJcbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xyXG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcclxuY29uc3QgTG9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xyXG5cclxuaWYobmlja25hbWUgPT09IG51bGwpe1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBcImxvZ2dlZE91dFwiO1xyXG59IGVsc2Uge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBcImxvZ2dlZEluXCI7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5pZihsb2dpbkZvcm0pe1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn0iXX0=
},{}]},{},[1])