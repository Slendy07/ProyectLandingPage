document.getElementById("button-menu").addEventListener("click", () => {
  document.getElementById("button-menu").classList.toggle("close");
  document.getElementById("nav").classList.toggle("show");
});

document.getElementById("nav").addEventListener("click", e => {
  if (e.target.id === "nav") {
    document.getElementById("nav").classList.remove("show");
    document.getElementById("button-menu").classList.remove("close");
  }
});

// Redireccion hacia las wiki de star wars

//wiki jedi
const redirectUrl = function(url){
  var win = window.open(url, '_blank');
 win.focus();
}