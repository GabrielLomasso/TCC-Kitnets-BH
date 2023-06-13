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
        parte_aberta.style.display = "block"
    }else{
        parte_aberta.style.display = "none"
    }
}

var swiper = new Swiper(".conteudo_slide", {
    slidesPerView: 2,
    centeredSlides: false,
    slidesPerGroupSkip: 0,
    fade:"true",
    loop:"true",
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
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