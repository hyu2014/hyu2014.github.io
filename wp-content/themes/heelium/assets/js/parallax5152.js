
jQuery(function ($) {
  $('#feat-img-h[data-type="background"]').each(function(){
    var parallax = $(this); // assigning the objec

    $(window).scroll(function() {
      var yPos = -($(window).scrollTop() / parallax.data('speed'));

      // Put together our final background position
      var coords = '50% '+ (50 + yPos) + '%';

      // Move the background
      parallax.css({"background-position": coords});
    });
});
});

jQuery(document).ready(function($){

    // Allow Page URL to activate a tab's ID
    var taburl = document.location.toString();
    if( taburl.match('#') ) {
        $('.nav-tabs a[href=#'+taburl.split('#')[1]+']').tab('show');
    }

    // Allow internal links to activate a tab.
	$('a[data-toggle="tab"]').on("click",function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
    });

}); // End

//added to allow multiple models to help control common z-index issue, solution allows for auto incrementing ids
jQuery(function ($) {
var checkeventcount = 1,prevTarget;
    $('.modal').on('show.bs.modal', function (e) {
        if(typeof prevTarget == 'undefined' || (checkeventcount==1 && e.target!=prevTarget))
        {
          prevTarget = e.target;
          checkeventcount++;
          e.preventDefault();
          $(e.target).appendTo('body').modal('show');
        }
        else if(e.target==prevTarget && checkeventcount==2)
        {
          checkeventcount--;
        }
     });
 }); // End