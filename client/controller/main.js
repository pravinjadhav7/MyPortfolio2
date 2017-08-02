$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
    }

    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  $logo.slideDown('slow');
	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
	});	

    // Footer is hide  after page is open
    $(document).ready(function() {
     $(".page-footer").hide();
    });
    
    $('#tab-about').click(function() {
	  $(".page-footer").hide();
	});

    $('#tab-resume').click(function() {
	  $(".page-footer").show('slow');
	});
    
    $('#tab-portfolio').click(function() {
	  $(".page-footer").show('slow');
	});

     $('#tab-contact').click(function() {
	  $(".page-footer").show('slow');
	});    
  

function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

    //   $('#tab-container').easytabs({
    //     animate			: true,
    //     updateHash		: true,
    //     transitionIn	: 'slideDown',
    //     transitionOut	: 'slideUp',
    //     animationSpeed	: 600,
    //     tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
    //         if($targetPanel.selector=='#resume'){
    //                 animMeter();
    //         }
    //     });
    });
