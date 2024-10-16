// script.js

let currentVideo = null; // Variable to hold the currently playing video

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Function to handle iframe click
const iframes = document.querySelectorAll('iframe');
iframes.forEach(iframe => {
    iframe.addEventListener('click', () => {
        // Stop the currently playing video, if there is one
        if (currentVideo && currentVideo !== iframe) {
            // Send a message to pause the previous video
            const message = '{"event":"command","func":"pauseVideo","args":""}';
            currentVideo.contentWindow.postMessage(message, '*');
        }

        // Set the new current video
        currentVideo = iframe;

        // Optionally show an alert
        alert('You clicked on a video!'); // You can remove this line if alerts are not needed
    });
});



function filterVideos() {
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const container = document.querySelector('.container');
    const headings = container.querySelectorAll('h2, h3');

    headings.forEach(heading => {
        const videoSection = heading.closest('h2'); // Get the section header
        const isVisible = heading.textContent.toLowerCase().includes(filter);
        
        // Show or hide headings based on the filter
        heading.style.display = isVisible ? '' : 'none';

        // If any of the subsections are visible, ensure the section header is visible
        if (isVisible) {
            videoSection.style.display = '';
        } else {
            const anyVisible = Array.from(videoSection.nextElementSibling.querySelectorAll('h3'))
                .some(h3 => h3.style.display !== 'none');
            videoSection.style.display = anyVisible ? '' : 'none';
        }
    });
}
