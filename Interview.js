$(document).ready(function(){

  let navigating_list=$('.navigation_navbar ul li a');
 let navigation_navbar=$('.Interview_intro').offset().top;
 
 function handleScroll() {

   navigating_list.each(function (index){
     if ($(document).scrollTop() >= $($(this).attr('href')).offset().top - $(window).height()) {
       navigating_list.removeClass("active");
  
     $(this).addClass("active");
     }
   })
   if ($(document).scrollTop() > navigation_navbar - 290) {
    $('.navigation_navbar').css({'opacity':'1','transform': 'rotateX(0deg)'});
    $('.navigation_navbar ul li a').addClass('animateNav')
  }
  if ($(document).scrollTop() < navigation_navbar ) {
    $('.navigation_navbar').css({'opacity':'0','transform': 'rotateX(-60deg)'});
  }
   $('.one').each(function() {
     if ($(document).scrollTop() > $(this).offset().top - $(window).height()) {
       $(this).addClass('animate_icon');
     }
   })
     $('.animated-img').each(function() {
       if ($(document).scrollTop() > $(this).offset().top - $(window).height() + 100) {
         $(this).addClass('visible_img');
       }
     });
     $('.animated-element').each(function() {
       if ($(document).scrollTop() > $(this).offset().top - $(window).height()) {
         $(this).addClass('visible');
       }
     });
    
     $('.animated-img_text').each(function() {
       if ($(document).scrollTop() > $(this).offset().top - $(window).height() + 100) {
         $(this).addClass('visible_img_text');
       }
     });
     
     $('.commment_animate').each(function() {
       if ($(document).scrollTop() > $(this).offset().top - $(window).height() + 200) {
         $(this).addClass('comment_move');
       }
     });
  
     $('.banner_one').each(function () {
      if ($(document).scrollTop() > $(this).offset().top - $(window).height() + 100) {
        $('.banner_one .banner_img').addClass('animate_img_one');
        $('.banner_one .banner_content').addClass('animate_content_one');
        $('.banner_one .comment').addClass('animate_comment');
      }
     })
     $('.banner_two').each(function () {
      if ($(document).scrollTop() > $(this).offset().top - $(window).height() + 100) {
        $('.banner_two .banner_img').addClass('animate_img_two');
        $('.banner_two .banner_content').addClass('animate_content_two');
        $('.banner_two .commentt').addClass('animate_commentt');
      }
     })
     $('.banner_three').each(function () {
      if ($(document).scrollTop() > $(this).offset().top - $(window).height() + 100) {
        $('.banner_three .banner_img').addClass('animate_img_one');
        $('.banner_three .banner_content').addClass('animate_content_one');
        $('.banner_three .commentth').addClass('animate_comment');
      }
     })
     let neededValue= ($(document).scrollTop() / navigation_navbar) * 100;
$('.Introduction').css({'transform' : 'translateY(-' + neededValue  + 'px)'});
console.log(neededValue);
 }
   $(window).scroll(handleScroll);
  
 })