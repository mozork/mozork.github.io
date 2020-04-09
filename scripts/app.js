$(function () {
  // ANIMSITION

  $('.animsition').animsition({
    inClass:'zoom-in-sm',
    outClass:'zoom-out-sm'
  })
  .one('animsition.inStart',function(){
    console.log('event -> inStart');
  })
  .one('animsition.inEnd',function(){
    console.log('event -> inEnd');
  });

  // LANGUAGES

  if('.language-choices'){
    $('.language-choices__container').scrollLeft(780);
  }

  $('.language-choice').on('click', function(){
    $('.language-choice').removeClass('active');
    $(this).addClass('active');
  })

  // DIFFICULTY

  $('.difficulty-bar1').on('click', function(){
    $('.difficulty-bar1').removeClass('active');
    $('.difficulty-bar2').removeClass('active');
    $('.difficulty-bar3').removeClass('active');
    $('.difficulty-bar4').removeClass('active');
    $('.difficulty-bar5').removeClass('active');
    $('.difficulty-bar1').addClass('active');
    $('.difficulty-label--selected').text('Per niente');
    if(!$('.autovalutazione2-button2').hasClass('active')){
      $('.autovalutazione2-button2').fadeIn();
    };
  });
  $('.difficulty-bar2').on('click', function(){
    $('.difficulty-bar1').removeClass('active');
    $('.difficulty-bar2').removeClass('active');
    $('.difficulty-bar3').removeClass('active');
    $('.difficulty-bar4').removeClass('active');
    $('.difficulty-bar5').removeClass('active');
    $('.difficulty-bar1').addClass('active');
    $('.difficulty-bar2').addClass('active');
    $('.difficulty-label--selected').text('Poco');
    if(!$('.autovalutazione2-button2').hasClass('active')){
      $('.autovalutazione2-button2').fadeIn();
    };
  });
  $('.difficulty-bar3').on('click', function(){
    $('.difficulty-bar1').removeClass('active');
    $('.difficulty-bar2').removeClass('active');
    $('.difficulty-bar3').removeClass('active');
    $('.difficulty-bar4').removeClass('active');
    $('.difficulty-bar5').removeClass('active');
    $('.difficulty-bar1').addClass('active');
    $('.difficulty-bar2').addClass('active');
    $('.difficulty-bar3').addClass('active');
    $('.difficulty-label--selected').text('Abbastanza');
    if(!$('.autovalutazione2-button2').hasClass('active')){
      $('.autovalutazione2-button2').fadeIn();
    };
  });
  $('.difficulty-bar4').on('click', function(){
    $('.difficulty-bar1').removeClass('active');
    $('.difficulty-bar2').removeClass('active');
    $('.difficulty-bar3').removeClass('active');
    $('.difficulty-bar4').removeClass('active');
    $('.difficulty-bar5').removeClass('active');
    $('.difficulty-bar1').addClass('active');
    $('.difficulty-bar2').addClass('active');
    $('.difficulty-bar3').addClass('active');
    $('.difficulty-bar4').addClass('active');
    $('.difficulty-label--selected').text('Molto');
    if(!$('.autovalutazione2-button2').hasClass('active')){
      $('.autovalutazione2-button2').fadeIn();
    };
  });
  $('.difficulty-bar5').on('click', function(){
    $('.difficulty-bar1').removeClass('active');
    $('.difficulty-bar2').removeClass('active');
    $('.difficulty-bar3').removeClass('active');
    $('.difficulty-bar4').removeClass('active');
    $('.difficulty-bar5').removeClass('active');
    $('.difficulty-bar1').addClass('active');
    $('.difficulty-bar2').addClass('active');
    $('.difficulty-bar3').addClass('active');
    $('.difficulty-bar4').addClass('active');
    $('.difficulty-bar5').addClass('active');
    $('.difficulty-label--selected').text('Estremamente');
    if(!$('.autovalutazione2-button2').hasClass('active')){
      $('.autovalutazione2-button2').fadeIn();
    };
  });

  // VIDEO

  var video = $('#video').get(0);

  $('.playBtn').on('click', function(){
    video.play();
    $(this).fadeOut();
    $('.video-controls').fadeIn();
    $('.bg-blur').fadeOut();
    if($(this).hasClass('playBtnExercise')) {
      $('.exercise-button3').fadeOut();
      $('.exercise-button1').fadeOut();
    }
  });
  $('.pauseBtn').on('click', function(){
    video.pause();
    $('.video-controls').fadeOut();
    $('.bg-blur').fadeIn();
    if($(this).hasClass('pauseBtn--exercise')){
      $('.exercise-button2').fadeIn();
      $('.exercise-button3').fadeIn();
    } else {
      $('.playBtn').fadeIn();
    }
  });
  $('.fine-video').on('click', function(){
    $('.page-title-label').fadeOut();
    $('.page-title').fadeOut();
    $('.progressBar-container').fadeOut();
    $('.remainTime').fadeOut();
    $('.video-controls').fadeOut();
    $('.difficulty').fadeIn();
    $('.bg-blur').fadeIn();
    video.pause();
  });

  if( video ) {
    setInterval(function(){
      var totalTime = video.duration;
      var currentTime = video.currentTime;
      var remainTime = Math.floor(totalTime - currentTime);
      var percentageTime = (100 * currentTime / totalTime) + '%';

      var minutesTime = Math.floor(remainTime/60);
      var secondsTime = remainTime-(minutesTime*60);

      $('.minutesTime').html(minutesTime);
      $('.secondsTime').html(secondsTime);
      $('.progressBar').css('width' , percentageTime);
    },1000)
  }

  // FOTO

  $('.nome-foto').on('click', function(){
    $('#input-nome').val('Marco Dirigi');
    $('.foto-btn').addClass('filled');
    $('.profilo2-button1').fadeIn();
  })

  // SCROLLER

  $('.scroller-column').scroll(function(){
    var column = $(this);
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      var items = column.find('.scroller-items')
      var offset = Math.abs(items.position().top);
      var itemHeight = 70;
      var resto = offset % itemHeight;
      var active = 3;

      if (resto != 0 && itemHeight ) {
        if (resto > (itemHeight/2)) {
          var finalPos = (itemHeight-resto)+offset;
          column.find('.scroller-item').removeClass('active');
          column.find('.scroller-item').removeClass('semi-active');
          column.animate({scrollTop: finalPos}, 200);
          active = (finalPos/itemHeight) + 2;
          column.find('.scroller-item').eq(active-1).addClass('semi-active');
          column.find('.scroller-item').eq(active).addClass('active');
          column.find('.scroller-item').eq(active+1).addClass('semi-active');
        } else {
          var finalPos = offset-resto;
          column.find('.scroller-item').removeClass('active');
          column.find('.scroller-item').removeClass('semi-active');
          column.animate({scrollTop: finalPos}, 200);
          active = (finalPos/itemHeight) + 2;
          column.find('.scroller-item').eq(active-1).addClass('semi-active');
          column.find('.scroller-item').eq(active).addClass('active');
          column.find('.scroller-item').eq(active+1).addClass('semi-active');
        }
      }
    }, 250));
  })

  // GOALS

  $('.goals__img').on('click', function(){
    $('.goals__img').removeClass('active');
    $(this).addClass('active');
  })

  // PREFERENCES

  $('.preferences__img').on('click', function(){
    $('.preferences__img').removeClass('active');
    $(this).toggleClass('active-border');
  })

  // DASHBOARD

  $('.dashboard1-button2').on('click', function(){
    $('.exercise-choices__container').fadeIn();
    $('.dashboard1-button3').fadeIn();
    $(this).fadeOut();
  })
  $('.dashboard1-button3').on('click', function(){
    $('.exercise-choices__container').fadeOut();
    $('.dashboard1-button2').fadeIn();
    $(this).fadeOut();
  })

  // NO-STRESS

  $('.no-stress-config__item').on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

  $('.no-stress-button2').on('click', function(){
    $('.more-exercises__container').fadeIn();
    $('.no-stress-button3').fadeIn();
    $(this).fadeOut();
  })
  $('.no-stress-button3').on('click', function(){
    $('.more-exercises__container').fadeOut();
    $('.no-stress-button2').fadeIn();
    $(this).fadeOut();
  })

  // SPOTIFY

  $('.spotify-btn--active').on('click', function(){
    $('.spotify-controls').fadeToggle();
  })







});
