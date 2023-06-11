//Whatsapp

window.addEventListener("scroll", function(){
    var button = document.getElementById("whatsapp");
    button.classList.toggle("visible", window.scrollY > 100);
});