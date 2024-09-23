<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form fields
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    $terms = isset($_POST['terms']) ? $_POST['terms'] : '';

    // Validate inputs
    if ($name && $email && $message && $terms) {

        // Email details
        $to = "info@nastdecor.cz";
        $subject = "Poptávka: $name";
        $headers = "From: info@nastdecor.cz" . "\r\n" .
                   "Reply-To: " . $email . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();
        
        // Construct message body
        $email_message = "Z kontaktního formuláře nastdecor.cz ti přišla nová zpráva:\n\n";
        $email_message .= "Jméno a příjmení: " . $name . "\n";
        $email_message .= "Email: " . $email . "\n";
        $email_message .= "Telefon: " . $phone . "\n\n";
        $email_message .= "Zpráva:\n" . $message . "\n";

        // Send the email
        if (mail($to, $subject, $email_message, $headers)) {
            // Redirect on success
            header("Location: /index.html?status=success");
            exit();
        } else {
            // Redirect on failure
            header("Location: /index.html?status=error");
            exit();
        }

    } else {
        // Redirect on validation error
        header("Location: /index.html?status=validation_error");
        exit();
    }
}
?>
