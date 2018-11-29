$(document).ready(function() {

    $('.magnifying-glass').click(function() {
        $('#search-string').slideToggle('slow');
    });

    $('#nav-desktop ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    });

    // $(".carousel-inner").swipe({
    //     //Generic swipe handler for all directions
    //     swipeLeft: function(event, direction, distance, duration, fingerCount) {
    //         $(this).parent().carousel('prev');
    //     },
    //     swipeRight: function() {
    //         $(this).parent().carousel('next');
    //     },
    //     //Default is 75px, set to 0 for demo so any distance triggers swipe
    //     threshold: 0
    // });


    $("#slider-principal").swiperight(function() {  
      $("#slider-principal").carousel('prev');  
    });  
   $("#slider-principal").swipeleft(function() {  
      $("#slider-principal").carousel('next');  
   });

   $("#video-slider").swiperight(function() {  
      $("#video-slider").carousel('prev');  
    });  
   $("#video-slider").swipeleft(function() {  
      $("#video-slider").carousel('next');  
   }); 

   $("#twitter-slider").swiperight(function() {  
      $("#twitter-slider").carousel('prev');  
    });  
   $("#twitter-slider").swipeleft(function() {  
      $("#twitter-slider").carousel('next');  
   }); 

   $(".mbr-slider").swiperight(function() {  
      $(".mbr-slider").carousel('prev');  
    });  
   $(".mbr-slider").swipeleft(function() {  
      $(".mbr-slider").carousel('next');  
   }); 

});

(function($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function(options) {

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function() {
            var $this = $(this),
                $parent = $this.parent(),
                defaults = {
                    delay: 0,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                settings = $.extend(true, {}, defaults, options, data),
                timeout;

            $parent.hover(function(event) {
                // so a neighbor can't open the dropdown
                if (!$parent.hasClass('open') && !$this.is(event.target)) {
                    return true;
                }

                if (settings.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $parent.addClass('open');
            }, function() {
                timeout = window.setTimeout(function() {
                    $parent.removeClass('open');
                }, settings.delay);
            });

            // this helps with button groups!
            $this.hover(function() {
                if (settings.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $parent.addClass('open');
            });

            // handle submenus
            $parent.find('.dropdown-submenu').each(function() {
                var $this = $(this);
                var subTimeout;
                $this.hover(function() {
                    window.clearTimeout(subTimeout);
                    $this.children('.dropdown-menu').show();
                    // always close submenu siblings instantly
                    $this.siblings().children('.dropdown-menu').hide();
                }, function() {
                    var $submenu = $this.children('.dropdown-menu');
                    subTimeout = window.setTimeout(function() {
                        $submenu.hide();
                    }, settings.delay);
                });
            });
        });
    };

    // apply dropdownHover to all elements with the data-hover="dropdown" attribute
    $('[data-hover="dropdown"]').dropdownHover();
});

//     $(function() {
//     var mglass = $('.magnifying-glass');
//     var form = $('.header-search-box');
//     mglass.click(function() {
//         if (form.is(':hidden')) {
//             form.show().focus()
//         }
//         form.animate({
//             'width': form.width() == 100 ? '0px' : '100px'
//         }, 'fast', function() {
//             if (form.width() == 0) {
//                 form.hide();
//             }
//         });
//     });
// });



// $('.magnifying-glass').click(function() {
//     $('#search-string').toggle('slow');
// });

// var mglass = $('.magnifying-glass');
//     var form = $('.header-search-box');
//     mglass.click(function() {
//         if (form.is(':hidden')) {
//             form.show().focus()
//         }
//         form.animate({
//             'width': form.width() == 100 ? '0px' : '100px'
//         }, 'fast', function() {
//             if (form.width() == 0) {
//                 form.hide();
//             }
//         });
//     });

// $(".magnifying-glass").click(function () {

//     $(".header-search-box").toggle("slide", {
//         direction: "right"
//     }, 500);

// });

// $(".carousel").swipe({

//   swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

//     if (direction == 'left') $(this).carousel('next');
//     if (direction == 'right') $(this).carousel('prev');

//   },
//   allowPageScroll:"vertical"

// });
