// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar visibility on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.remove('navbar-hidden');
      navbar.classList.add('navbar-visible');
    } else {
      navbar.classList.remove('navbar-visible');
      navbar.classList.add('navbar-hidden');
    }
  });


 // Function to simulate typing animation
 function typeWriter(text, i, fnCallback) {
    // Check if i is less than the length of the text
    if (i < (text.length)) {
      // Add the next character to the span
      document.getElementById("typedContent").innerHTML = text.substring(0, i+1);

      // Call the function again for the next character with shorter timeout (faster)
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 30); // Decreased timeout for faster animation
    }
    // When typing is complete, call the callback function (if provided)
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 100);
    }
  }

  // Start the typing animation on page load
  window.onload = function() {
    // Get the text to be typed
    var text = "I am a sixth-semester student majoring in Informatics Engineering at Pasundan University. I possess skills in UI/UX design, web development, graphic design, and IoT engineering. My experience includes 2 years of web development during vocational high school, 2 years focused on UI/UX since starting college, and 4 years in graphic design. Additionally, I am currently participating in the MSIB Kampus Merdeka Batch 6 program for IoT Engineering. I am capable of working under pressure and quickly learning new things.";
    
    // Start the typing animation
    typeWriter(text, 0, function(){
      // Optional callback function after typing is complete
    });
  };