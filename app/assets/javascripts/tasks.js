// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function() {

  var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
  // console.log('document is ready' new Date());
  $('#task_name').focus();
  $('.modal .btn-primary').click(function() {
    $('.edit_task').submit();
  });
});
