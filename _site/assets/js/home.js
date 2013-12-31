(function($) {

  var homeFunctions = function() {

    setTimeout(function() {
      $('html').removeClass('no-overflow');
    }, 1500);

    $(window).on('scroll', function() {
      var st = $(this).scrollTop(),
          w  = $(window),
          wh = w.height(),
          n  = $('#main-nav'),
          nh = n.outerHeight();

          console.log(nh);

        // if(st < wh && st >= 0) {
        //   $('#p-head').css({
        //     marginTop: st / 1.1
        //   });
        // }

        if(st > wh / 6) {
          $('.content-strip--full').addClass('content-strip--fade-in');
        } else {
          $('.content-strip--full').removeClass('content-strip--fade-in');
        }

      if(st > (wh - nh)) {
        n.addClass('nav--solid');
        $('#p-head').addClass('cover-heading--hidden');
      } else {
        n.removeClass('nav--solid');
        $('#p-head').removeClass('cover-heading--hidden');
      }

    });

    // Instagram
    var ww = $(window).width(),
    wh = $(window).height(), res;

    if(ww <= 480) {
      res = 'low_resolution';
    } else {
      res = 'standard_resolution';
    }

    var userFeed = new Instafeed({
      get: 'user',
      resolution: res,
      limit: 10,
      userId: 16277880,
      accessToken: '16277880.467ede5.60f370b5f7d7483ba0bc7288840ea023',
      template: '<li class="grid__item one-fifth palm-one-half"><a href="{{link}}"><img src="{{image}}" /></a></li>'
    });

    userFeed.run();

  };

  $(document).ready(homeFunctions);

})(jQuery);
