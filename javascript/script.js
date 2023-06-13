//Whatsapp

window.addEventListener("scroll", function(){
    var button = document.getElementById("whatsapp");
    button.classList.toggle("visible", window.scrollY > 100);
});

//botao para abrir a area das kitnets

let button = document.getElementById("my_btn")
let parte_aberta = document.getElementById("parte_kitnets_aberto")

button.addEventListener("click", abrir_fechar)

function abrir_fechar(){
    if(parte_aberta.style.display == "none"){
        parte_aberta.style.display = "flex"
    }else{
        parte_aberta.style.display = "none"
    }
}

