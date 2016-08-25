$(document).ready(function() {
    $('.js-menu-icon-toggle').click(function(){
        $(this).toggleClass('jsa-open');
        $('.main-menu__navigation').slideToggle();
    });
});
