/* blueSkyProps.js - Blue Sky Vacations Contact Zoom jQuery script
	Courtney Norlander - whitfiec@csp.edu
	Matt Allen - allenm2@csp.edu
	Written: July 30, 2016
	Revised: 
*/

//got the expansion code from the lesson with Peter Johnson in our classes tutorial//
   jQuery(document).ready(function($) {
        $(function( ) {
        $(".expand").click(function() {
           // prevent the hyperlink from happening if jQuery active
           $("a").removeAttr('href');
            var thisImage = $(this);
            thisImage.toggleClass('expand-change');
        });
     });
   });
	
	jQuery(document).ready(function($){
    $(".contactHover").mouseover(function(){
        $(".contactHover").css("background-color", "#302c90");
		  $(".contactHover").css("color", "white");
    });
    $(".contactHover").mouseout(function(){
		 $(".contactHover").css("background-color", "white");
		  $(".contactHover").css("color", "black");
    });
});

