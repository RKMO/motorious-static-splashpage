//= require ./jquery.scrollify.js

var scrollPos = 0;
var preIndex = 0;
var count = 0;

$(document).ready(function() {
  var vh = window.innerHeight * 0.01;
  document.body.style.setProperty('--vh', `${vh}px`);
  $('.section').css('--vh', `${vh}px`);
  $.scrollify({
    section: ".section",
    easing: "easeOutQuad",
    scrollSpeed: 600,
    scrollbars: false,
    offset: 16,
    setHeights: false,
    afterRender:function() {
      $('body').attr('data-preIndex',0);
      if (count == 0) {
        $('.expand').addClass('active')
      }
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
        if (count == 1) {
          $('.expand').removeClass('active');
        }
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
      $("div[data-position='" + (count - 1 ) + "']").next('.section-content').removeClass('animate');
      $("div[data-position='" + (count + 1 ) + "']").next('.section-content').removeClass('animate');
      if (count == ($('.bg-num').length)) {
        $('.expand').addClass('active');
      } else if (count == 0) {
        $('.expand').addClass('active');
      } else {
        $('.expand').removeClass('active');
      }
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
  $('a.top').on('click', function(e) {
    e.preventDefault();
    $.scrollify.instantMove("#1");
    count = 0;
    $(".bg-num").removeClass('grow shrink');
    $('.section-content').removeClass('animate');
    $('.expand').addClass('active');
  });
  $('.expand .ta-center').on('click', function() {
    $(this).text() == "I'm primarily a ..." ? $(this).text('Request early access') : $(this).text("I'm primarily a ...");
    $(this).next('form').slideToggle('slow');
    $(this).toggleClass('active');
  })
  $("input[type=email]").on("focus", function() {
    $("input[type=submit]").addClass('active');
  })
  $('form').on('submit', function(e) {
    event.preventDefault();
    __ss_noform.push(['submit', null, '2a3fd6a9-2bbb-4c66-a036-33b14f004ea5']);
    this.submit();
    $('.expand .ta-center').text('Thank you for your interest!');
    $(this).slideToggle('slow');
  })
});
