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
