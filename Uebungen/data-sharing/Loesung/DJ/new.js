'use strict';
function send(){

  var users = {};
  var result = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

  if ( !document.getElementById("name").value ) {
    alert("no name");
    return false;
  }

  users.id = result.length+1;
  users.name = document.getElementById("name").value;

  result.push(users);
  localStorage.setItem("users", JSON.stringify(result));

  window.location.replace("list.html");
}