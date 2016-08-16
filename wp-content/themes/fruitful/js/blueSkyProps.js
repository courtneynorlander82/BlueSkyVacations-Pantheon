/* blueSkyProps.js - Blue Sky Vacations Property Listing jQuery script
	Ken Anich - anichk@csp.edu
	Written: July 30, 2016
	Revised: 
*/

// blueSkyProps() - Accordion function for hiding/displaying property data
	jQuery(document).ready(function($)
	{
		// Display content of first h3 element, hiding all other elements
		$(".accord h3").eq(0).addClass("active");
		$(".accord ul").eq(0).show();
		
		// Set function for click event
		$(".accord h3").click(function() 
		{
			//When h3 is clicked, display next "ul" element and hide any other open "ul" elements
			$(this).next("ul").slideToggle("slow").siblings("ul:visible").slideUp("slow");
			// Toggle "active" class to selected h
			$(this).toggleClass("active");
			$(this).siblings("h3").removeClass("active");
		}); // end of (".accord h3").click()
	}); // end of blueSkyProps()

