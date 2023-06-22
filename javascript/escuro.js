/*fundo_header = modoescuro
parte_kitnets_aberto = parte_kitnets_aberto
sobre_nos = sobrenosescuro
card = cardescuro, cardescuro2, cardescuro3
container_txt_mis = textoescuro, textoescuro2, textoescuro3*/ 

const btn = document.querySelector('.btn');
        const body = document.body;
        btn.onclick = function()
        {
            this.classList.toggle('active')
            body.classList.toggle('active')
            modoescuro.classList.toggle('btn_active')
            parte_kitnets_aberto.classList.toggle('active')
            locacaoescuro.classList.toggle('active')
            sobrenosescuro.classList.toggle('active')
            cardescuro.classList.toggle('active')
            cardescuro2.classList.toggle('active')
            cardescuro3.classList.toggle('active')
            textoescuro.classList.toggle('active')
            textoescuro2.classList.toggle('active')
            textoescuro3.classList.toggle('active')
        
        }
        
let modoescuro = document.getElementById("modoescuro")
let parte_kitnets_aberto = document.getElementById("parte_kitnets_aberto")
let locacaoescuro = document.getElementById("locacaoescuro")
let sobrenosescuro = document.getElementById("sobrenosescuro")
let cardescuro = document.getElementById("cardescuro")
let cardescuro2 = document.getElementById("cardescuro2")
let cardescuro3 = document.getElementById("cardescuro3")
let textoescuro = document.getElementById("textoescuro")
let textoescuro2 = document.getElementById("textoescuro2")
let textoescuro3 = document.getElementById("textoescuro3")

/*
function escuro(){
    if(modoescuro.style.backgroundColor == 'white'){
        modoescuro.style.backgroundColor = '#1a1a1a'
        parte_kitnets_aberto.style.backgroundColor = '#1a1a1a'
        sobrenosescuro.style.backgroundColor = '#1a1a1a'
        cardescuro.style.backgroundColor = '#1a1a1a'
        cardescuro2.style.backgroundColor = '#1a1a1a'
        cardescuro3.style.backgroundColor = '#1a1a1a'
        textoescuro.style.color = 'white'
        textoescuro2.style.color = 'white'
        textoescuro3.style.color = 'white'
    }
    else{
        modoescuro.style.backgroundColor = 'white'
        parte_kitnets_aberto.style.backgroundColor = 'white'
        sobrenosescuro.style.backgroundColor = 'white'
        cardescuro.style.backgroundColor = 'white'
        cardescuro2.style.backgroundColor = 'white'
        cardescuro3.style.backgroundColor = 'white'
        textoescuro.style.color = 'black'
        textoescuro2.style.color = 'black'
        textoescuro3.style.color = 'black'
    }
}*/