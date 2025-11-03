window.onload = function() {
    const images = document.querySelectorAll('.image-holder img');
    const scrollContent = document.querySelector('.scroll-content');
    const ellipsesContainer = document.querySelector('.ellipses-container');
  
    // Function to resize the images when in focus
    function resizeImages(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.style.width = '404px';
          image.style.height = '582px';
        } else {
          image.style.width = '372px';
          image.style.height = '486px';
        }
      });
    }
  
    // Function to change the ellipses on scroll
    function changeEllipses() {
      // Calculate the number of images
      const numImages = images.length;
  
      // Add ellipses based on the number of images
      ellipsesContainer.innerHTML = '';
      for (let i = 0; i < numImages; i++) {
        const ellipse = document.createElement('span');
        ellipse.textContent = '•';
        ellipse.classList.add('ellipse');
        if (i === 0) {
          ellipse.classList.add('active');
        }
        ellipsesContainer.appendChild(ellipse);
      }
  
      // Highlight the current image when scrolled
      scrollContent.addEventListener('scroll', function() {
        const scrollLeft = scrollContent.scrollLeft;
        const imageWidth = 404 + 10; // Considering 10px space between images
  
        const currentIndex = Math.round(scrollLeft / imageWidth);
        resizeImages(currentIndex);
  
        const ellipses = document.querySelectorAll('.ellipse');
        ellipses.forEach((ellipse, i) => {
          if (i === currentIndex) {
            ellipse.classList.add('active');
          } else {
            ellipse.classList.remove('active');
          }
        });
      });
    }
  
    // Initial function calls
    resizeImages(0); // Set the size of the initial image
    changeEllipses(); // Generate ellipses
  };
  