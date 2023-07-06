<?php
if(isset($_POST['submit'])) {
    // Informações do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];

    // Endereço de e-mail para onde enviar
    $to = 'guilherme.amarcos@gmail.com';

    // Cabeçalhos do e-mail
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Corpo do e-mail
    $message = "Name: $name\r\n";
    $message .= "Email: $email\r\n";
    $message .= "Subject: $subject\r\n";
    $message .= "Message: $body\r\n";

    // Envio do e-mail
    if(mail($to, $subject, $message, $headers)) {
        echo 'E-mail sent successfully.';
    } else {
        echo 'Error: Unable to send the email.';
    }
}
?>
