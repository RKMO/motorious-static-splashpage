//= require ./jquery.scrollify.js

var scrollPos = 0;
var preIndex = 0;
var count = 0;
$(window).on('scroll', function() {
  var scrollT = $(window).scrollTop();
  scrollPos = scrollT;
})

$(document).ready(function() {
  $.scrollify({
    section: ".section",
    easing: "easeOutQuad",
    scrollSpeed: 500,
    scrollbars: false,
    before: function(e) {
      // preIndex = 0;
    },
    after: function(e) {
      preIndex = parseInt($('body').attr('data-preIndex'));
      if (e > preIndex) {
        var prevEl = preIndex - 1;
        $('.bg-num').each(function(i, el) {
          if (i == preIndex) {
            console.log('grow up')
            $(this).addClass('grow').removeClass('shrink');
          }  else if (i == prevEl) {
            console.log('shrink up')
            $(this).removeClass('grow').addClass('shrink');
          }
        })
        count += 1;
      } else {
        var prevEl = preIndex + 1;
        $('.bg-num').each(function(i, el) {
          if (i == preIndex - 1) {
            console.log('grow down')
            $(this).removeClass('shrink').addClass('grow');
            console.log($(this), i)
          }
          if (i == 0 && preIndex == 0) {
            console.log('rm grow down')
            $(this).removeClass('grow');
          }
        })
      }
      $('body').attr('data-preIndex', e);
    },
  });
});

function animateBGShrink(count) {
  var prevEl = count - 1;
  $('.bg-num').each(function(i, el) {
    if (i == prevEl) {
      $(this).addClass('shrink').removeClass('grow');
    }
  })
}
function animateBGGrow(count) {

}
