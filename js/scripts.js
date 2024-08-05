document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementsByClassName('close')[0];

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            lightbox.style.display = "block";
            lightboxImg.src = this.getAttribute('data-full');
        });
    });

    close.addEventListener('click', function () {
        lightbox.style.display = "none";
    });

    window.addEventListener('click', function (event) {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    });
});
