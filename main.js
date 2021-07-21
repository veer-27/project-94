function addUser() {
    User_name = document.getElementById("username").value;
localStorage.setItem("User name",User_name);
window.location="index2.html";

}