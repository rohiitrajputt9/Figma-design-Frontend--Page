const video = document.getElementById('myVideo');
const playButtonOverlay = document.getElementById('playButtonOverlay');

// Function to toggle play/pause and the overlay
function togglePlayPause() 
{
    if (video.paused) 
        {
        video.play();
        playButtonOverlay.classList.add('hidden'); // Hide the overlay
    } else {
        video.pause();
        playButtonOverlay.classList.remove('hidden'); // Show the overlay
    }
}

// Event listener for clicking anywhere on the video container
video.parentElement.addEventListener('click', togglePlayPause);

// Optional: Hide the overlay when the video starts playing (e.g., if autoplay)
video.addEventListener('play', () => {
    playButtonOverlay.classList.add('hidden');
});

// Optional: Show the overlay when the video ends
video.addEventListener('ended', () => {
    playButtonOverlay.classList.remove('hidden');
});

// Optional: Show the overlay if the video is paused for any reason (e.g., scrubbing)
video.addEventListener('pause', () => {
    playButtonOverlay.classList.remove('hidden');
});

// Ensure DOM is loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, script initialized');
});




$(document).ready(function() {
    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonials = $('.testimonial-item');
    const dots = $('.dot');
    let testimonialInterval;

    function showTestimonial(index) {
        testimonials.removeClass('active').hide();
        dots.removeClass('active');

        $(testimonials[index]).fadeIn(500).addClass('active');
        $(dots[index]).addClass('active');
        currentTestimonial = index;
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function startSlider() {
        testimonialInterval = setInterval(nextTestimonial, 5000); // 5 seconds
    }

    function resetSlider() {
        clearInterval(testimonialInterval);
        startSlider();
    }

    // Initial display
    showTestimonial(0);
    startSlider();

    // Dot click handler
    dots.on('click', function() {
        const index = $(this).index();
        showTestimonial(index);
        resetSlider(); // Reset interval on manual navigation
    });

    // Contact Form Submission
    const contactForm = $('#contactForm');
    const successModal = $('#successModal');
    const closeModalBtn = $('.close-button');
    const body = $('body');

    contactForm.on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Basic HTML5 validation will handle required and email types
        if (contactForm[0].checkValidity()) {
            successModal.css('display', 'flex'); // Show modal
            body.addClass('modal-open'); // Prevent body scroll
            contactForm[0].reset(); // Clear the form
        }
    });

    // Close modal when close button is clicked
    closeModalBtn.on('click', function() {
        successModal.css('display', 'none');
        body.removeClass('modal-open'); // Enable body scroll
    });

    // Close modal when clicking outside of the modal content
    $(window).on('click', function(event) {
        if ($(event.target).is(successModal)) {
            successModal.css('display', 'none');
            body.removeClass('modal-open');
        }
    });
});