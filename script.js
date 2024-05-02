window.addEventListener('scroll', function() {
    var buttonContainer = document.getElementById('button-container');
    var footer = document.querySelector('.footer');

    // Get the height of the viewport
    var viewportHeight = window.innerHeight;

    // Get the bottom position of the button container
    var buttonContainerBottom = buttonContainer.getBoundingClientRect().bottom;

    // Check if the bottom of the button container is within the viewport
    if (buttonContainerBottom <= viewportHeight) {
        footer.style.display = 'block'; // Show the footer
    } else {
        footer.style.display = 'none'; // Hide the footer
    }
});
