
const ratio =.01
var options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });

}

const handleSlide = function (entries, slider) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('slide-right');
      slider.unobserve(entry.target);
    }
  });

}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
      observer.observe(r);
});

const slider = new IntersectionObserver(handleSlide, options);
document.querySelectorAll('.slide').forEach(function(r) {
      slider.observe(r);
});

const $hovermenu = document.querySelector('.menu-deroulant')
const $sousmenu = document.querySelector('.ssmenu')
const $textmenus = document.querySelector('.sousmenu')

$hovermenu.onmouseenter = () => {
  $sousmenu.classList.add('menueffet')
  $textmenus.classList.add('texteeffet')
}

$hovermenu.onmouseleave = () => {
  $sousmenu.classList.remove('menueffet')
  $textmenus.classList.remove('texteeffet')
}

/*$(document).ready(function (){
    $('.num').counter({
        time: 1200
    });
});*/
var c = 1836;
var t = 500;
var cpt = 0;
var duree = 1.
var delta = Math.ceil((duree * 1000) / c);
var alfa = Math.ceil((duree * 1000) / t);
var node = document.getElementById("num1");
var node2 = document.getElementById("num2");

function countdown() {
    node.innerHTML = ++cpt;
    if ( cpt < c ){
        setTimeout(countdown, delta);
    }
}
    setTimeout(countdown, delta);

function countdown2(){
    node2.innerHTML = ++cpt;
    if ( cpt < t ){
        setTimeout(countdown2, alfa);
    }
}
    setTimeout(countdown2, alfa);

jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else {
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});


