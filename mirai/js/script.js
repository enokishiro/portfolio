$(function(){
  /* フェードイン */
  //参考url https://web-emo.com/jquery-scroll-fadein/
  $(window).scroll(function (){
    $('.element').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
          $(this).addClass('active');
        }
    });
  });

  $("article h2").vegas({
    slides: [
        { src: "img/slide1.jpg" },
        { src: "img/slide2.jpg" },
        { src: "img/slide3.jpg" },
        { src: "img/slide4.jpg" }
    ]
});

  /* ハンバーガーメニュー */
  $(".btn").click(function(){
    $(this).toggleClass("active");
    $(".glonav").toggleClass("active");
  });
  $(".link").click(function(){
    $(".btn").removeClass("active");
    $(".glonav").removeClass("active");
  });

  /* スムーススクロール */
  //参考url https://125naroom.com/web/2899
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
$(document).ready(function() {
	$('body').ripples({ 
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
	});
});
