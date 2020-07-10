

$( document ).ready(function() {

  $(document).on("click", function (event) {
    if ($(event.target).closest(".search-box").length === 0) {
      if($(".search-input").val() === ''){
        $(".menu").removeClass('hide');
        $(".search-box").removeClass('open');
      }
    }else{
      setTimeout(function(){
        $("#search-input").focus();
      },10);
      $(".search-box").addClass('open');
      $(".menu").addClass('hide');
    }
  });

  $("#search-input").on("input", function (event) {
    if($("#search-input").val() !== '') {
      $('.clear-icon').addClass('show');
    }else{
      $('.clear-icon').removeClass('show');   
    }
  });

  var elem = document.querySelector('.home');
  var bounding = elem.getBoundingClientRect();
  

  $(window).on('scroll',function() {
    if(bounding.height - 50 < $(document).scrollTop() ){
      $('.spacer').addClass('show');
    }else {
        $('.spacer').removeClass('show');
    }
  });

  $('.clear-icon').on("click", function (event) {
    event.stopPropagation();
    $("#search-input").val('');
    $('.clear-icon').removeClass('show');
    $(".menu").removeClass('hide');
    $(".search-box").removeClass('open');
    $('.search-by').removeClass('show');
  });

  $('.search-icon').on("click", function (event) {

    if($('.search-box').hasClass('open')){
      event.stopPropagation();

      $('.search-by').addClass('show');
      $('.search-by .word').html($("#search-input").val());

      $('html, body').animate({
        scrollTop: $("#list-section").offset().top - 150
      }, 1200);
    }
  });
});