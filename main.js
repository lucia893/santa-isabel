document.addEventListener('DOMContentLoaded', function() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var closeBtn = document.querySelector('.close');
    var galleryImgs = document.querySelectorAll('.gallery img');

    galleryImgs.forEach(function(img) {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    const buttons = document.querySelectorAll(".btnC");
    const hiddenDivs = document.querySelectorAll(".esconder");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            hiddenDivs[index].style.display = hiddenDivs[index].style.display === "none" ? "block" : "none";
        });
    });
});
