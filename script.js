// Get the footer image element
var footerImage = document.querySelector('.footer-image');

// Function to check if the user has scrolled to the bottom of the page
function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to toggle the visibility of the footer image
function toggleFooterImage() {
    if (isScrolledToBottom()) {
        footerImage.classList.add('show');
    } else {
        footerImage.classList.remove('show');
    }
}

// Listen for scroll events and toggle footer image visibility
window.addEventListener('scroll', toggleFooterImage);

// Initially check if the footer image should be shown
toggleFooterImage();
