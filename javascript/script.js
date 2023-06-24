//Modal carrossel
$(document).ready(function(){
  $('.carrossel').slick();
});    
//Whatsapp

window.addEventListener("scroll", function(){
    var button = document.getElementById("whatsapp");
    button.classList.toggle("visible", window.scrollY > 100);
});

//botao para abrir a area das kitnets

let button = document.getElementById("btn_apresenta")
let parte_aberta = document.getElementById("parte_kitnets_aberto")

button.addEventListener("click", abrir_fechar)

function abrir_fechar(){
    if(parte_aberta.style.display == "none"){
        parte_aberta.style.display = "block"
    }else{
        parte_aberta.style.display = "none"
    }
}


//Slide de kitnets

var swiper = new Swiper(".conteudo_slide", {
    slidesPerView: 3,
    centeredSlides: false,
    slidesPerGroupSkip: 0,
    fade:"true",
    loop:"true",
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      950: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:"true",
    },
  });

  
    //Formulario
    
    function AbrirModal(){
      document.querySelector(".modal_form").classList.add("activate");
      document.querySelector(".fade_modal").style.display="block";
    };

    function FecharModal(){
      document.querySelector(".modal_form").classList.remove("activate");
  document.querySelector(".fade_modal").style.display="none";
  
};



function AbrirModalKitnet(){
  document.querySelector(".modal_kitnet").classList.add("activate");
  document.querySelector(".fade_modal").style.display="block";
};

function FecharModalKitnet(){
  document.querySelector(".modal_kitnet").classList.remove("activate");
  document.querySelector(".fade_modal").style.display="none";
  
};

