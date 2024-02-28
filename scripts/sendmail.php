<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "info@electrical-services.ca";
    $to = "tymur.mazur@gmail.com";
    $subject = "Book estimate from electrical-services.ca";
    $message = $_POST['user-message'];
    
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";
?>