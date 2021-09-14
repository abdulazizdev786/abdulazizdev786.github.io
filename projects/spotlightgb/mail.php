<?php
    $to = 'info@spotlightgb.com';
    $name1= $_POST['fname'];
    $email1= $_POST['email'];
    $phone1= $_POST['phone'];
    $company1= $_POST['company'];
    $service = $_POST['service-dropdown'];
    $message= $_POST['message'];
    
    $email_from='$email1';
    $email_body ="Name: $name1\n".
                    "Email: $email1\n".
                    "Phone: $phone1\n".
                    "Company: $company1\n".
                    "Service Required: $service\n".
                    "Message: $message\n";
    $from = "$name1";
    $to = "info@spotlightgb.com";
    
    $headers = "From: " . $from . "<" . $email1 . ">\r\n";
    $subject = "Contact Us From Spotlight GB";

    mail($to,$subject,$email_body,$headers);
    echo "<script>alert('Thank You For your message. We will get back to you soon')</script>";
    echo "<script>window.open('https://spotlightgb.com','_self')</script>";


?>

