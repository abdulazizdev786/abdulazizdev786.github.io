<?php
    $to = 'abdulaziz652369@gmail.com';
    $name1 = $_POST["name"];
    $email1= $_POST["email"];
    $text= $_POST["message"];
    $subject1= $_POST["subject"];
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email1 . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $body ='<table style="width:100%">
        <tr>
            <td>'.$name1.'</td>
        </tr>
        <tr><td>Email: '.$email1.'</td></tr>
        <tr><td>Subject: '.$subject1.'</td></tr>
        <tr><td>Text: '.$text.'</td></tr>
        
    </table>';

    if (@mail($to, $email, $body, $headers))
    {
        echo 'The message has been sent.';
    }else{
        echo 'failed';
    }

?>

