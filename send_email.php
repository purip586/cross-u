<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $area = $_POST["area"];
    $visa = $_POST["visa"];
    $income = $_POST["income"];

    $recipient = "puri@xu-1.co.jp";

    // Create email headers
    $headers = "From: $name <$email>\r\n";
    $headers = "Reply-To: $email\r\n";
    
    // Send the email
    if (mail($recipient, $headers)) {
        echo "Thank you for contacting us! Your message has been sent successfully.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
