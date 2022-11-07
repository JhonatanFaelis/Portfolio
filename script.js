$(document).ready(()=>{

var modal = $('.modalBox');

$('#botao').click(function(){
    modal.show();
})

$('#close').click(function(){
    modal.hide();
})


/*JAVAO para os botoes*/
const control = document.querySelectorAll('.control');
let currentItem = 0;
const elemento = document.querySelectorAll('.elemento');
const maxItems = elemento.length;

control.forEach(control => {
control.addEventListener('click', () =>{
    const isLeft = control.classList.contains('arrow-left');
        if (isLeft){
            currentItem -=1;
        } else {
            currentItem += 1;
        }

     if (currentItem >= maxItems)   {
        currentItem = 0;
     }

     if (currentItem < 0){
        currentItem = maxItems - 1;
     }

     elemento.forEach(elemento => elemento.classList.remove('current-element'));

     elemento[currentItem].scrollIntoView({inline : "center", behavior:"smooth"});

     elemento[currentItem].classList.add("current-element");
});    
});





})

/*MENU RESPONSIVO*/

function menuShow(){

    let menuMobile = document.querySelector('.mobile-menu')
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open')
            document.querySelector('.icon').src ="./img/menu_white_36dp.svg"
        } else {
            menuMobile.classList.add('open')
            document.querySelector('.icon').src ="./img/close_white_36dp.svg"
    }
}