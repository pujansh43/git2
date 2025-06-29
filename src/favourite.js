let favourite = JSON.parse(localStorage.getItem("fav")) || [];

function saveToLocalStorage() {
  localStorage.setItem("fav", JSON.stringify(favourite));
}
