
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
