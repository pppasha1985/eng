let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

$('.open_popup').click(function(e){
    e.preventDefault();
    $('.popup-bg').fadeIn(600);
    $('html').addClass('no_scroll');
});
$('.close_popup').click(function(){
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no_scroll');
});
$('.popup-bg').click(function (e) {
    if (!$(e.target).closest(".popup").length) {
      $('.popup-bg').fadeOut(600);
    }
  });