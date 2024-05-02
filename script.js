// Get the footer element with the logo
var mainFooter = document.querySelector('.footer');

// Function to check if the user has scrolled to the bottom of the page
function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to toggle the visibility of the main footer
function toggleMainFooter() {
    if (isScrolledToBottom()) {
        mainFooter.style.display = 'block';
    } else {
        mainFooter.style.display = 'none';
    }
}

// Listen for scroll events and toggle main footer visibility
window.addEventListener('scroll', toggleMainFooter);

// Initially check if the main footer should be shown
toggleMainFooter();
