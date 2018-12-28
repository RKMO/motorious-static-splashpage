$(window).on('scroll', function() {
  $('.bg-num').each(function(i, el) {
    console.log(el, i)
    var numPos = $(el).offset().top - $(window).scrollTop();
    if (numPos <= 200) {
      $(this).addClass('grow');
    }
  })
})
