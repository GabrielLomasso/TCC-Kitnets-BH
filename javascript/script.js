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

  // Botao escuro e claro

  let escuros = document.getElementById("modoescuro")
let escuros2 = document.getElementById("modoescuro2")
let escuros3 = document.getElementById("modoescuro3")
let escuros4 = document.getElementById ("parte_kitnets_aberto")
let escuros5 = document.getElementById ("modoescuro4")
let escuros6 = document.getElementById("my_btn")
function escuro(){
    if(escuros.style.backgroundColor == 'white'){
        escuros.style.backgroundColor = 'black'
        escuros2.style.backgroundColor = '#110a1f'
        escuros3.style.backgroundColor = 'black'
        escuros4.style.backgroundColor = 'black'
        escuros5.style.color = 'white'
        escuros6.style.backgroundColor = '#110a1f'
    }
    else{
        escuros.style.backgroundColor = 'white'
        escuros2.style.backgroundColor = '#5E17EB'
        escuros3.style.backgroundColor = 'rgba(255, 255, 255, 0.328)'
        escuros4.style.backgroundColor = 'rgba(255, 255, 255, 0.328)'
        escuros5.style.color = 'black'
        escuros6.style.backgroundColor = '#5E17EB'
    }
}

//Formulario

function AbrirModal(){
  document.querySelector(".modal_form").classList.add("active");
  document.querySelector(".fade_modal").style.display="block";
};

function FecharModal(){
  document.querySelector(".modal_form").classList.remove("active");
  document.querySelector(".fade_modal").style.display="none";

};

//Modal kitnets


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


function AbrirModalKitnet(){
  document.querySelector(".modal_kitnet").classList.add("active");
  document.querySelector(".fade_modal").style.display="block";
};

function FecharModalKitnet(){
  document.querySelector(".modal_kitnet").classList.remove("active");
  document.querySelector(".fade_modal").style.display="none";

};
