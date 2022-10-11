&lt;![CDATA[

jQuery(document).ready(function(){

$('#titres').hide(0).delay(5000).show(200);
});

]]&gt;

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

const ratio =.01
var options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      console.log('visible');
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });

}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
      observer.observe(r);
});
