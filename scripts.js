$(document).ready(function() {
    // Modal logic for image modal
    $('#imageModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var imgSrc = button.data('img-src'); // Extract info from data-* attributes
        var modal = $(this);
        modal.find('#modalImage').attr('src', imgSrc); // Update the modal's image src
    });

    // Open all links in a new tab by default
    $('a').each(function() {
        if (!$(this).hasClass('same-tab')) {
            $(this).attr('target', '_blank');
        }
    });

    // Check if consent has already been given
    if (!localStorage.getItem("cookieConsentAccepted")) {
        $('#cookieConsent').css('display', 'flex');
    }

    // Handle closing the cookie consent banner
    $('#closeCookieConsent').click(function() {
        $('#cookieConsent').hide();
        localStorage.setItem("cookieConsentAccepted", "true");
    });

    // Function to update and show the reusable status modal
    function showStatusModal(title, message) {
        $('#statusModalLabel').text(title);
        $('#statusModalMessage').text(message);
        $('#statusModal').modal('show');
    }

    // New functionality for showing the appropriate modal based on form submission status
    function getQueryParam(param) {
        let params = new URLSearchParams(window.location.search);
        return params.get(param);
    }

    // Check if a status parameter exists
    const status = getQueryParam('status');

    // Show appropriate modal based on status
    if (status === 'success') {
        showStatusModal('Díky!', 'Vaše zpráva byla úspěšně odeslána. Vážím si Vašeho zájmu a brzy se Vám ozvu.');
    } else if (status === 'error') {
        showStatusModal('Něco se pokazilo...', 'Zprávu se nepodařilo odeslat. Prosím, obraťte se se na mě pomocí uvedeného emailu nebo telefonu. Omlouváme se za technické komplikace.');
    } else if (status === 'validation_error') {
        showStatusModal('Ověřte informace', 'Prosím, správně vyplňte všechna povinná pole a souhlaste s pravidly zpracování osobních údajů. V případě přetrvávajících problémů se na mě prosím obraťe pomocí uvedeného emailu a telefonu.');
    }

    $('#statusModal').on('hidden.bs.modal', function () {
        // Redirect to the specified URL when the status modal is closed
        window.location.href = "https://www.nastdecor.cz/index.html";
    });
    
});
