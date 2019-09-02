$(document).ready(function () {
    // Init Sidenav
    $('.button-collapse').sideNav();
    
    // Init Dropdown Button
    $('.dropdown-button').dropdown({
        alignment : 'left',
        inDuration : 500,
        constrainWidth : false,
        belowOrigin: true,
        hover : true
    });

    // Init Modal
    $('.modal').modal({
        dismissible: false
    });

    // Init Tabs
    $('.tabs').tabs();

    // Init Scrollspy
    $('.scrollspy').scrollSpy();

    // Init Carousel
    $('.carousel').carousel({
        duration: 500,
        dist: -200,
        shift: 100,
        padding: 900,
        numVisible: 3,
        }, setTimeout(autoplay, 5000));

    function autoplay(){
        $('.carousel').carousel('next');
        setTimeout(autoplay, 5000);
    }
});