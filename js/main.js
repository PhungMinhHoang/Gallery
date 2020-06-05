$(document).ready(function () {
    // Sidebar
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
    $('#sidebarCollapse, .overlay').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.overlay').toggleClass('active');
    });

    // Plugin masonry layout
    $('.gallery').masonry({
        // options
        itemSelector: '.gallery__item',
        //columnWidth: 200
    });


});