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
            modoescuro.classList.toggle('active')
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
let logo = document.getElementById("logo")
