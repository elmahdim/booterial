/*
 * Booterial 1.0
 * http://elmahdim.github.io/booterial/
 * Author: @ElmahdiMahmoud
 * https://github.com/elmahdim
 */
(function($) { 
  'use strict';
  $(document).ready(function() {
  $(function() {
    var a, b, c, d;
    $(".has-effect").click(function(e) {
      0 === $(this).find(".ink").length && $(this).prepend("<span class='ink'></span>");
      a = $(this).find(".ink");
      a.removeClass("animate");
      a.height() || a.width() || (b = Math.max($(this).outerWidth(), $(this).outerHeight()), a.css({height:b, width:b}));
      c = e.pageX - $(this).offset().left - a.width() / 2;
      d = e.pageY - $(this).offset().top - a.height() / 2;
      a.css({top:d + "px", left:c + "px"}).addClass("animate");
    });
  });
  function FilledInput(a) {
    this._field = a;
    $(a).focusout(function() {
      $(this).val() && $(this).closest(".form-group.has-label").addClass("is-filled");
    });
    $(a).focusin(function() {
      $(this).val() && $(this).closest(".form-group.has-label").removeClass("is-filled");
    });
  }
  var input = new FilledInput(".form-control");
  });
})(jQuery); 