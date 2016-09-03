$(document).ready(function() {

    $('#navbar').scrollToFixed({
        preFixed: function() {
            $('#nav-links strong').css('color', 'transparent');
        },
        postFixed: function() {
            $('#nav-links strong').css('color', 'white');
        }
    });


    NProgress.start();
    NProgress.done();

    $(document).on('page:fetch',   function() { NProgress.start(); });
    $(document).on('page:change',  function() { NProgress.done(); });
    $(document).on('page:restore', function() { NProgress.remove(); });
});