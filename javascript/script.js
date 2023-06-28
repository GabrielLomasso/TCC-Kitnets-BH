//Modal carrossel
$(document).ready(function(){
  $('.carrossel').slick({
    infinite:true,
  });

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

  
    //Modal Formulario
    
    function AbrirModal(){
      document.querySelector(".modal_form").classList.add("activate");
      document.querySelector(".fade_modal_form").style.display="block";
    };

    function FecharModal(){
      document.querySelector(".modal_form").classList.remove("activate");
  document.querySelector(".fade_modal_form").style.display="none";
  
};
//validação
function validarEmail(){
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');
  
  if(!email.checkValidity()){
    error.innerHTML = "Email invalido";  
  }
   
}

function redefinirMsg(){
  var error = document.querySelector('#error-email');
  if (error.innerHTML == "Email invalido"){
    error.innerHTML = "";
  }
}


    
    

    

//Modal kitnet
//Kitnet1
function AbrirModalKitnet1(){
  document.querySelector(".kitnet1").classList.add("activate");
  document.querySelector(".fade_kitnet1").style.display="block";
};

//fechar modal kitnet
function FecharModalKitnet1(){
  document.querySelector(".kitnet1").classList.remove("activate");
  document.querySelector(".fade_kitnet1").style.display="none";
  
};

//Kitnet2
function AbrirModalKitnet2(){
  document.querySelector(".kitnet2").classList.add("activate");
  document.querySelector(".fade_kitnet2").style.display="block";
};

//fechar modal kitnet
function FecharModalKitnet2(){
  document.querySelector(".kitnet2").classList.remove("activate");
  document.querySelector(".fade_kitnet2").style.display="none";
  
};
//Kitnet3
function AbrirModalKitnet3(){
  document.querySelector(".kitnet3").classList.add("activate");
  document.querySelector(".fade_kitnet3").style.display="block";
};

//fechar modal kitnet
function FecharModalKitnet3(){
  document.querySelector(".kitnet3").classList.remove("activate");
  document.querySelector(".fade_kitnet3").style.display="none";
  
};

//Kitnet4
function AbrirModalKitnet4(){
  document.querySelector(".kitnet4").classList.add("activate");
  document.querySelector(".fade_kitnet4").style.display="block";
};

//fechar modal kitnet
function FecharModalKitnet4(){
  document.querySelector(".kitnet4").classList.remove("activate");
  document.querySelector(".fade_kitnet4").style.display="none";
  
};
//Kitnet5
function AbrirModalKitnet5(){
  document.querySelector(".kitnet5").classList.add("activate");
  document.querySelector(".fade_kitnet5").style.display="block";
};

//fechar modal kitnet
function FecharModalKitnet5(){
  document.querySelector(".kitnet5").classList.remove("activate");
  document.querySelector(".fade_kitnet5").style.display="none";
  
};
