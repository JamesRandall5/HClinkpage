window.addEventListener('scroll', function() {
    var footerImage = document.querySelector('.footer-image');
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if ((window.innerHeight + scrollTop) >= scrollHeight) {
        footerImage.style.display = 'block';
    } else {
        footerImage.style.display = 'none';
    }
});
