document.addEventListener('DOMContentLoaded', function(){
    const proximo = document.querySelector('#setaDireita')
    const anterior = document.querySelector('#setaEsquerda')
    const honda = document.querySelector('#honda')
    const scooter = document.querySelector('#Scooter')
    const saibaMais = document.querySelector('#saiba')
    const cinza = document.querySelector('#cinza')
    const information = document.querySelector('#informations')
    const close = document.querySelector('#close')

    saibaMais.addEventListener('click', assinar)
    proximo.addEventListener('click', next)
    anterior.addEventListener('click', before)
    close.addEventListener('click', closeWindow)

    function next(){
        scooter.style.opacity="0";
        scooter.style.display="none"
        honda.style.opacity="1"
        honda.style.display="flex"
    }
    
    function before(){
        honda.style.opacity="0"
        honda.style.display="none"
        scooter.style.opacity="1";
        scooter.style.display="flex"
    }

    function assinar(){
        cinza.style.display="block";
        information.style.display="flex";
    }
    
    function closeWindow(){
        cinza.style.display="none";
        information.style.display="none";
    }

});