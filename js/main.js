$(document).ready(function () {
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
});