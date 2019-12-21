

// PREVENT INSIDE CLICK DROPDOWN 
$('body').on("click", ".dropdown-menu", function (e) {
    $(this).parent().is(".show") && e.stopPropagation();
});