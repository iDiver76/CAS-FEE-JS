'use strict';

function removeUser(id) {
  //console.log(id);
  users.splice(id,1);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.replace("list.html");
}

var users = JSON.parse(localStorage.getItem("users"));
var userList = "";
// console.log(users);
if (!users) {
} else {
  users.forEach(function (item, index) {
    //console.log(item);
    userList += `<li>${item.name} <button onclick="removeUser(${index})">remove</button></li>`;
  });

  document.getElementById("numberOfElements").innerHTML = `Anzahl Elemente ${users.length}`;
  document.getElementById("elements").innerHTML = `<ul> ${userList} </ul>`;
}
