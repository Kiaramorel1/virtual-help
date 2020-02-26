$(document).ready(function () {
    // Toggle Sidebar
    $('#menu-toggle').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
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

});

