// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  
  // Show button when user scrolls down 300px from the top
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top when button is clicked
  // Note: We're using the CSS scroll-behavior: smooth already defined in the styles.css
  backToTopButton.addEventListener('click', function(e) {
    // The href="#nav" in the HTML already handles the smooth scrolling
    // This is just for any additional functionality if needed
    console.log('Back to top button clicked');
  });
});