<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "info@electrical-services.ca";
    $to = "tymur.mazur@gmail.com";
    $subject = "New message from electrical-services.ca";
    $message = '<p>Name: <strong>' .$_POST['user-name'].'</strong></p>';
    $message.= "Phone:" .$_POST['user-tel'];
    $message.= "Message:" .$_POST['user-message'];
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers.= "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";
?>