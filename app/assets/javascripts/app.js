$(document).ready(function() {

    $('#navbar').scrollToFixed({
        preFixed: function() {
            $('#nav-links strong').css('color', 'transparent');
            $(this).css('opacity', '1');
        },
        postFixed: function() {
            $('#nav-links strong').css('color', 'white');
            $(this).css('opacity', '0.5');
        }
    });


    NProgress.start();
    NProgress.done();

    $(document).on('page:fetch',   function() { NProgress.start(); });
    $(document).on('page:change',  function() { NProgress.done(); });
    $(document).on('page:restore', function() { NProgress.remove(); });
 
  $("#pictures").owlCarousel({
    autoPlay: 6000,
    slideSpeed: 1300,
    paginationSpeed: 1200,
    singleItem: true
  });

  $("#services").owlCarousel({
    autoPlay: 1000,
    slideSpeed: 600,
    paginationSpeed: 800,
    singleItem: true,
    stopOnHover: true,
    transitionStyle: "fade"
  });

  $("#sidebar-slides").owlCarousel({
    singleItem: true,
    lazyLoad : true,
    navigation : true
  });
});