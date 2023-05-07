<?php
  // Define variables
  $to = file_get_contents('.email');
  $subject = $_POST['subject'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Load email from secret file
  $email_file = fopen(".email", "r");
  $to_email = fgets($email_file);
  fclose($email_file);

  // Set headers
  $headers = "From: $email \r\n";
  $headers .= "Reply-To: $email \r\n";
  $headers .= "Content-type: text/html; charset=UTF-8 \r\n";

  // Send email
  mail($to_email, $subject, $message, $headers);

  // Redirect back to HTML page
  header('Location: https://portfolio-ttibbs.netlify.app');
?>