document.getElementById("userProfileDropDown").addEventListener("click", function () {
    var dropdownMenu = document.getElementsByClassName('custom-dropdown-menu')[0];
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
});