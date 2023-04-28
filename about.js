// Smooth scroll functionality for navbar links
$(document).ready(function() {
    $('.nav-link').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
    });
  });
  