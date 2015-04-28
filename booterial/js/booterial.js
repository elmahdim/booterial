(function($) { 
  'use strict';
  $(document).ready(function() {

$(function(){
  var ink, d, x, y;
  $(".has-effect").click(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
  });
});


function FilledInput(_field) {
    this._field = _field;

    $(_field).focusout(function() {
      if($(this).val()) { 
        $(this).closest('.form-group.has-label').addClass('is-filled'); 
      }
    });

    $(_field).focusin(function() {
      if($(this).val()) { 
        $(this).closest('.form-group.has-label').removeClass('is-filled'); 
      }
    });
}
var input  = new FilledInput('.form-control');

  });
})(jQuery); 