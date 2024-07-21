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

    const btnQuieroAyudar = document.getElementById("btnQuieroAyudar");
    const formSection = document.getElementById("formSection");

    btnQuieroAyudar.addEventListener("click", function() {
        formSection.style.display = formSection.style.display === "none" || formSection.style.display === "" ? "block" : "none";
    });

    const images = ["./img/voluntarios1.jpg","./img/voluntarios5.jpg","./img/voluntarios3.jpg","./img/voluntarios4.jpg","./img/voluntarios2.jpg","./img/voluntarios6.jpg","./img/voluntarios7.jpg","./img/voluntarios8.jpg","./img/voluntarios9.jpg","./img/voluntarios10.jpg","./img/voluntarios11.jpg","./img/voluntarios12.jpg","./img/voluntarios13.jpg","./img/voluntarios14.jpg","./img/voluntarios15.jpg"];
    
    
    let currentIndex = 0;
    const imageContainer = document.querySelector('.image-container2');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    
    function displayImages() {
      imageContainer.innerHTML = '';
      for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = images[currentIndex + i];
        imageContainer.appendChild(img);
      }
    }
    
    displayImages();
    
    prevButton.addEventListener('click', () => {
      currentIndex -= 5;
      if (currentIndex < 0) {
        currentIndex = 0;
      }
      displayImages();
    });
    
    nextButton.addEventListener('click', () => {
      currentIndex += 5;
      if (currentIndex >= images.length) {
        currentIndex = images.length - 5;
      }
      displayImages();
    });


});
