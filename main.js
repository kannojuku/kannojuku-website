$('.header-btn-menu').on('click', function() {
  $('.header-btn-menu').toggleClass('menu-btn-open');
  $('menu').toggleClass('menu-open');
  $('.header-inner').toggleClass('header-open-menu')
});
$('.slideshow').scroll(function() {
  const ww = $(window).width();
  const ww3 = ww*3;
  const s = $(this).scrollLeft();
  if (s == 0) {
    $('.sbl').addClass('hidden');
  } else if (ww3 <= (s+10)) {
    $('.sbr').addClass('hidden');
  } else {
    $('.sbr, .sbl').removeClass('hidden')
  }
});
$('.sbl').on('click', function() {
  const ww = $(window).width();
  const s = $('.slideshow').scrollLeft();
  const s_after = s - ww;
  $('.slideshow').removeClass('scroll-snap-x');
  $('.slideshow').animate({scrollLeft: s_after},400,'swing',function(){
    $('.slideshow').addClass('scroll-snap-x')})
});
$('.sbr').on('click', function() {
  const ww = $(window).width();
  const ww3 = ww*3;
  const s = $('.slideshow').scrollLeft();
  const s_after = s + ww;
  $('.slideshow').removeClass('scroll-snap-x');
  $('.slideshow').animate({scrollLeft: s_after},400,'swing',function(){
    $('.slideshow').addClass('scroll-snap-x')});
});
$('.invite-button').on('click', function() {
      $('.iba').css('animation','iba 1.2s ease 0s 1 normal none running');
      setTimeout(function() {
        $('.iba').css('animation','none');

      }, 1250);
});
$('.slideshow, .scroll-button').on('touchend', function() {
      $('.slideshow').removeClass('scroll-auto');
      setTimeout(function(){
        $('.slideshow').addClass('scroll-auto');
      }, 10000);
});
$(function(){
  const ww = $(window).width();
  const ww3 = ww*3;
  setInterval(function(){
    let s= $('.slideshow').scrollLeft();
    let s_after = s+ww;
    if (s < ww3){
      $('.scroll-auto').removeClass('scroll-snap-x');
      $('.scroll-auto').animate({scrollLeft: s_after},600,'swing',function(){$('.scroll-auto').addClass('scroll-snap-x')});
    } else if ((s+10) >= ww3){
      $('.scroll-auto').removeClass('scroll-snap-x');
      $('.scroll-auto').animate({scrollLeft: 0 },800,'swing',function(){$('.scroll-auto').addClass('scroll-snap-x')});
    };
  }, 7000);
});
$('.slideshow').scroll(function(){
  const s = $('.slideshow').scrollLeft();
  const ww = $(window).width();
  if (s < (ww/3)){
    $('.sbd1').addClass('now-dot');
    $('*:not(.sbd1)').removeClass('now-dot');
  } else if ((ww/3*2) < s && s < (ww/3*4)){
    $('.sbd2').addClass('now-dot');
    $('*:not(.sbd2)').removeClass('now-dot');
  } else if ((ww/3*5) < s && s < (ww/3*7)) {
    $('.sbd3').addClass('now-dot');
    $('*:not(.sbd3)').removeClass('now-dot');
  } else if ((ww/3*8) < (s + 10)){
    $('.sbd4').addClass('now-dot');
    $('*:not(.sbd4)').removeClass('now-dot');
  } else {
    $('*').removeClass('now-dot');
  };
});
$('.corona-button').on('click', function() {
      $('.cba').css('animation', 'cba 800ms ease 0s 1 normal both running');
      setTimeout(function() {

      }, 850);
});
$('.more-button').on('click',function(){
  $('body *').addClass('nmba');
  $('body').css({
    'background-color':'var(--kanno-main-color)',
    'transition':'2s'});
});
history.pushState(null, null, null);
