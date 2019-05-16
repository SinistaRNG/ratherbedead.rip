/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

//Used to fire scroll function once after scrolling is done.
var timerid; 
$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault();
        $("#menu a").removeClass('active');
        var id = $(this).attr("href").substring(1);
        $("body").animate({
            'scrollTop': $("section#" + id).offset().top
        });        
    });
    //forcing window scroll to execute on page load
	$("body").scrollTop(1); 
    $(window).scroll(function(){
        clearTimeout(timerid);
        timerid = setTimeout(checkactivelink, 50);
    });

    function checkactivelink()
    {
        $("section").each(function(){
            if($("body").scrollTop() >= $(this).offset().top)
            {
                $("#menu a").removeClass('active');
                    $("#menu a[href=#" + $(this).attr("id") + "]").addClass('active');
            }
        });
    }
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
