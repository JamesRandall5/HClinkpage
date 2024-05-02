// Get the footer element
var footer = document.querySelector('.footer');

// Function to check if the user has scrolled to the bottom of the page
function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to toggle the visibility of the footer
function toggleFooter() {
    if (isScrolledToBottom()) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}

// Listen for scroll events and toggle footer visibility
window.addEventListener('scroll', toggleFooter);

// Initially check if the footer should be shown
toggleFooter();
