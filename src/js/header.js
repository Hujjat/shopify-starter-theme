

// PREVENT INSIDE CLICK DROPDOWN 
$('.dropdown-menu').on("click.bs.dropdown", function (e) { e.stopPropagation(); e.preventDefault(); });