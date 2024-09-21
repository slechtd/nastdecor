$(document).ready(function() {
    // Modal logic
    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var imgSrc = button.data('img-src'); // Extract info from data-* attributes
        var modal = $(this);
        modal.find('#modalImage').attr('src', imgSrc); // Update the modal's image src
    });

    // Open all links in a new tab by default
    $('a').each(function() {
        // Check if the link does NOT have the class 'same-tab'
        if (!$(this).hasClass('same-tab')) {
            $(this).attr('target', '_blank');
        }
    });

    // Check if consent has already been given
    if (!localStorage.getItem("cookieConsentAccepted")) {
        $('#cookieConsent').css('display', 'flex'); // Show the banner if consent not given
    }

    // Handle closing the cookie consent banner
    $('#closeCookieConsent').click(function() {
        $('#cookieConsent').hide(); // Hide the banner
        localStorage.setItem("cookieConsentAccepted", "true"); // Store the consent status
    });
});
