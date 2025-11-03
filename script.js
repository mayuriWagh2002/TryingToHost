$(document).ready(function() {
    var slideIndex = 0;
    showSlides(slideIndex);
  
    $('.prev').click(function() {
      slideIndex -= 1;
      showSlides(slideIndex);
    });
  
    $('.next').click(function() {
      slideIndex += 1;
      showSlides(slideIndex);
    });
  
    function showSlides(n) {
      var i;
      var slides = $('.image-slider img');
      if (n >= slides.length) { slideIndex = 0; }
      if (n < 0) { slideIndex = slides.length - 1; }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[slideIndex].style.display = 'block';
    }
  });




