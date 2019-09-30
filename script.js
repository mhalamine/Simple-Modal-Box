var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

if ($.cookie('whenToShowDialog') == null) {
    // Create expiring cookie, 2 days from now:
    $.cookie('whenToShowDialog', 'yes', { expires: 2, path: '/' });

    // Show dialog
    toggleModal();
}