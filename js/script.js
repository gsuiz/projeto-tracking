const menu = document.querySelector('#menu')
const close = document.querySelector('#closemenu')
const navlink = document.querySelector('#nav-m')
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const login = document.querySelector('#login')
const bol = document.querySelector('.navlink-d__list li:nth-of-type(4)')

login.addEventListener('mouseenter', entrar)
login.addEventListener('mouseout', sair)

let link1 = document.querySelector('#link1')
link1.addEventListener('mouseenter', () => {login.style.color = 'hsl(230, 29%, 20%)';bol.style.color = 'hsl(230, 29%, 20%)';link1.style.color = 'hsl(295, 11%, 77%)'})
link1.addEventListener('mouseout', () => {login.style.color = 'hsl(295, 11%, 77%';bol.style.color = 'hsl(295, 11%, 77%)';link1.style.color = 'hsl(230, 29%, 20%)'})

const link2 = document.querySelector('#link2')
link2.addEventListener('mouseenter', () =>{login.style.color = 'hsl(230, 29%, 20%)';bol.style.color = 'hsl(230, 29%, 20%)';link2.style.color = 'hsl(295, 11%, 77%)'})
link2.addEventListener('mouseout', () =>{login.style.color = 'hsl(295, 11%, 77%)';bol.style.color = 'hsl(295, 11%, 77%)';link2.style.color = 'hsl(230, 29%, 20%)'})

const link3 = document.querySelector('#link3')
link3.addEventListener('mouseenter', () =>{login.style.color = 'hsl(230, 29%, 20%)';bol.style.color = 'hsl(230, 29%, 20%)';link3.style.color = 'hsl(295, 11%, 77%)'})
link3.addEventListener('mouseout', () =>{login.style.color = 'hsl(295, 11%, 77%)';bol.style.color = 'hsl(295, 11%, 77%)';link3.style.color = 'hsl(230, 29%, 20%)'})

function entrar(){
    login.style.color = 'hsl(230, 29%, 20%)'
    bol.style.color = 'hsl(230, 29%, 20%)'
    link1.style.color = 'hsl(295, 11%, 77%)'
    link2.style.color = 'hsl(295, 11%, 77%)'
    link3.style.color = 'hsl(295, 11%, 77%)'
}

function sair(){
    login.style.color = 'hsl(295, 11%, 77%)'
    bol.style.color = 'hsl(295, 11%, 77%)'
    link1.style.color = 'hsl(230, 29%, 20%)'
    link2.style.color = 'hsl(230, 29%, 20%)'
    link3.style.color = 'hsl(230, 29%, 20%)'
}

function hover(){
    login.style.color = 'hsl(230, 29%, 20%)'
    links[1].style.color = 'hsl(295, 11%, 77%)'
}

function out(){
    login.style.color = 'hsl(295, 11%, 77%)'
}

menu.addEventListener('click', aparecer)
close.addEventListener('click', sumir)

function aparecer(){
    menu.style.display = 'none'
    navlink.style.display = 'block'
}

function sumir(){
    menu.style.display = 'block'
    navlink.style.display = 'none'
}

btn1.addEventListener('click', aperta)
btn2.addEventListener('click', aperta2)

function aperta(){
    btn1.style.backgroundColor = 'hsl(0, 100%, 68%)'
    btn1.style.color = 'white'
    btn1.style.fontWeight = '700'
    btn2.style.fontWeight = '400'
    btn2.style.backgroundColor = 'transparent'
    btn2.style.color = 'hsl(0, 100%, 68%)'
}

function aperta2(){
    btn2.style.backgroundColor = 'hsl(0, 100%, 68%)'
    btn2.style.color = 'white'
    btn1.style.backgroundColor = 'transparent'
    btn1.style.color = 'hsl(0, 100%, 68%)'
    btn1.style.fontWeight = '400'
    btn2.style.fontWeight = '700'
}