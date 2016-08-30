$(document).ready(function() {

    $('#navbar').scrollToFixed({
        preFixed: function() {
            $('#nav-links strong').slideUp(50);
            $('.logo').css('height', '2em');
            $('#links_container').css('padding', '0');
            $(this).css('opacity', '1');
        },
        postFixed: function() {
            $('#nav-links strong').slideDown(50);
            $('.logo').css('height', '3em');
            $('#links_container').css('padding', '1em 0');
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