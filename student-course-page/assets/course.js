// Sidebar Toggle
$(document).ready(function () {
    // Toggle Sidebar
    $('#menu-toggle').on('click', function () {
        $('#sidebar').toggleClass('toggle');
    })
    // dropdown in Sidebar
    $('#1submenu').on('click', function () {
        $('.dropdown-container1').toggle();
    })
    $('#2submenu').on('click', function () {
        $('.dropdown-container2').toggle();
    })
    $('#3submenu').on('click', function () {
        $('.dropdown-container3').toggle();
    })
    $('#4submenu').on('click', function () {
        $('.dropdown-container4').toggle();
    })
    $('#menu-toggle').on('click', function () {
        $('#sidebar').toggleClass('active');
    })
    // // Accordian Collapse
    // $(document).ready(function(){
    //     // Add minus icon for collapse element which is open by default
    //     $(".collapse.show").each(function(){
    //     	$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    //     });
        
    //     // Toggle plus minus icon on show hide of collapse element
    //     $(".collapse").on('show.bs.collapse', function(){
    //     	$(this).prev(".button-link").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    //     }).on('hide.bs.collapse', function(){
    //     	$(this).prev(".button-link").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    //     });
    // });
});