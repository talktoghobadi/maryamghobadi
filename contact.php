<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


//Load composer's autoloader
// require 'vendor/autoload.php';
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);  // Passing `true` enables exceptions

// configure
$from = 'Demo contact form <talktoghobadi@gmail.com>';
$sendTo = 'Demo contact form <talktoghobadi@gmail.com>'; // Add Email
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'subject' => 'Subject', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in the email
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending

try
{

  //Server settings
      $mail->SMTPDebug = 2;                                 // Enable verbose debug output
      $mail->PHPMailer(true);                               // Set mailer to use SMTP
      $mail->Host = 'smtp.gmail.com';                         // Specify main and backup SMTP servers
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = 'talktoghobadi@gmail.com';            // SMTP username
      $mail->Password = 'Ad36607660';                         // SMTP password
      $mail->SMTPSecure = 465;                              // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 587;                                    // TCP port to connect to

    $emailText = "You have new message from contact form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From:'  . $from,
        'Reply-To:'  . $from,
        'Return-Path:'  . $from,
    );

    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array(type => success, message => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array(type => danger, message => $errorMessage);
}

if (!empty($_SERVER[HTTP_X_REQUESTED_WITH]) && strtolower($_SERVER[HTTP_X_REQUESTED_WITH]) == xmlhttprequest) {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray[message];
}
