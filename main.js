$(document).ready(function() {
  // Navbar toggle button
  $('.menu-toggle').click(function() {
    $('.navbar-links').toggleClass('active');
  });

  // Smooth scrolling
  $('#mainMenu a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Highlight active link on scroll
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 70;

    // Assign active class to nav links while scolling
    $('section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $('#mainMenu a.active').removeClass('active');
        $('#mainMenu a').eq(i).addClass('active');
}
});
}).scroll();
});