$(document).ready(function () {
    // Sidebar
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
    $('#sidebarCollapse, .overlay').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.overlay').toggleClass('active');
    });

    //Scroll to top
    $('#scrollToTop').on("click",function(e){
        e.preventDefault();
        window.scrollTo(0,0)
    })

});