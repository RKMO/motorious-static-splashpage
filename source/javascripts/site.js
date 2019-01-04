//= require ./jquery.scrollify.js

var scrollPos = 0;
var preIndex = 0;
var count = 0;

$(document).ready(function() {
  $.scrollify({
    section: ".section",
    easing: "easeOutQuad",
    scrollSpeed: 600,
    scrollbars: false,
    offset: 16,
    afterRender:function() {
      $('body').attr('data-preIndex',0);
    },
    before: function(e) {
      var direction,preIndex;
      preIndex = parseInt($('body').attr('data-preIndex'));
      if (e > preIndex) {
        $.scrollify.current().find('.bg-num').addClass('grow');
        if (count >= 1) {
          $("div[data-position='" + count + "']").addClass('shrink');
        }
        count += 1;
      }else {
        count -= 1;
        $.scrollify.current().find('.bg-num').removeClass('shrink');
        $("div[data-position='" + (count - 1) + "']").addClass('shrink');
        $("div[data-position='" + (count + 1) + "']").removeClass('grow');
      }
      $('body').attr('data-preIndex',e);
    },
    after: function() {
      $.scrollify.current().find('.section-content').addClass('animate');
    }
  })
  $('.prev').on('click', function(e) {
    e.preventDefault();
    $.scrollify.previous();
  })
  $('.next').on('click', function(e) {
    e.preventDefault();
    $.scrollify.next();
  });
  $('.expand').on('click', function(e) {
    $(this).addClass('active');
    $(this).find('form').addClass('active');
  })
});
