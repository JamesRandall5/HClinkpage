window.addEventListener('scroll', function() {
    var buttonContainer = document.getElementById('button-container');
    var footer = document.querySelector('.footer');

    // Get the height of the viewport
    var viewportHeight = window.innerHeight;

    // Get the bottom position of the button container
    var buttonContainerBottom = buttonContainer.getBoundingClientRect().bottom;

    // Get the scroll position
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Check if the bottom of the button container is within the viewport and user has scrolled past it
    if (buttonContainerBottom <= viewportHeight && scrollPosition > buttonContainer.offsetTop) {
        footer.style.display = 'block'; // Show the footer
    } else {
        footer.style.display = 'none'; // Hide the footer
    }
});
