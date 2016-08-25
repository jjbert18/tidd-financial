$(document).ready(function() {
    $('.js-menu-icon-toggle').click(function(){
        $(this).toggleClass('jsa-open');
        $('.main-menu__navigation').slideToggle();
    });

    $('.main-menu__navigation-item').click(function(){
        var query = Modernizr.mq('(max-width: 776px)');
        if (query) {
            $('.main-menu__navigation').slideUp();
        }
    });
});
