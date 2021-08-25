<?php
    $to = 'hichamfarakes@gmail.com';
    $FirstName= $_POST['f-name'];
    $LastName= $_POST['l-name'];
    $email1= $_POST['email'];
    $phone1= $_POST['phone'];
    $profile1= $_POST['profile'];
    
    $email_from='$email1';
    $email_body ="First Name: $FirstName\n".
                    "Last Name: $FirstName\n".
                    "Email: $email1\n".
                    "Phone: $phone1\n".
                    "Selected Profile: $profile1\n";
    $from = "$FirstName $LastName";
    $to = "hichamfarakes@gmail.com";
    
    $headers = "From: " . $from . "<" . $email1 . ">\r\n";
    $subject = "Profile Registration";

    mail($to,$subject,$email_body,$headers);
    echo "<script>alert('Thank You For your registration. We will get back to you soon')</script>";
    echo "<script>window.open('./index.html','_self')</script>";


?>

