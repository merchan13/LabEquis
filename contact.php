<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];


$subject = "Message from a site visitor ".$field_name;

$body_message = "From: ".$field_name."\r\n";
$body_message .= "E-mail: ".$field_email."\r\n";
$body_message .= "Message: ".$field_message;



$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
$headers .= "From: ".$field_email."\r\n";
$headers .= "Reply-To: ".$field_email."\r\n";

if (mail("jmerchan@labequis.com", $subject, $body_message, $headers)) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to labequis@labequis.com');
		window.location = 'index.html';
	</script>
<?php
}
?>
