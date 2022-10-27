<?php
use PHPMailer\PHPMailer\PHPMailer;

//Pour utiliser notre objet PHPMailer
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


$nom;$telephone;$email;$message;$captcha;
$nom = filter_input(INPUT_POST, 'nom', FILTER_SANITIZE_STRING);
$telephone = filter_input(INPUT_POST, 'telephone', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
$captcha = filter_input(INPUT_POST, 'token', FILTER_SANITIZE_STRING);
 if(!$captcha){
   echo '
   Please check the the captcha form.
   ';
   exit;
 }
 $secretKey = "6LcnNK8iAAAAADqPD_lCRIAF7BLQLk5A5FLRLud0";
 $ip = $_SERVER['REMOTE_ADDR'];
 $data = array(
             'secret' => $secretKey,
             'response' => $captcha
         );
 $verify = curl_init();
 curl_setopt($verify, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
 curl_setopt($verify, CURLOPT_POST, true);
 curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
 curl_setopt($verify, CURLOPT_SSL_VERIFYPEER, false);
 curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);
 $response = curl_exec($verify);
 $responseDebug = json_decode($response);
 $responseKeys = json_decode($response,true);
 header('Content-type: application/json');
 if($responseKeys["success"]) {


   $mail = new PHPMailer(true);
   try {
     $mail->isSMTP(); //Pour preciser que c'est du SMTP
     $mail->Host = 'smtp.gmail.com';  // Le serveur smtp de google
     $mail->SMTPAuth = true;                               // On active l'authentification
     $mail->Username = 'pixncom@gmail.com';                 // SMTP username
     $mail->Password = 'rngrwsjxomdvlubt';                           // Le mot de passe que vous avez récupéré
     $mail->SMTPSecure = 'tls';                            // Parameter de sécurité mis sur TLS
     $mail->Port = 587;                                    // Le port donne par google pour son SMTP
     $mail->addAddress('dev3@pixncom.com', 'pixncom'); //La boite mail où vous voulez recevoir les mails
     $Body = "Nom: " . $nom . "\n";

     $Body .= "Email: " . $email . "\n";

     $Body .= "Telephone: " . $telephone . "\n";

     $Body .= "Message: " . $message . "\n";

     $mail->isHTML(true); //Met le mail au format HTML
     $mail->Subject = "formulaire pixncom"; // On parametre l'objet
     $mail->Body = nl2br($Body); // Le message pour les boites html
     $mail->AltBody = $Body; //Le message pour les boites non html
     $mail->SMTPDebug = 0; //On désactive les logs de debug



     if(!$mail->send()) {
       echo $mail->ErrorInfo;
     } else{
       echo json_encode(array('success' => 'true'));
     }
   } catch (Exception $e) {
     $erreur = $e;
   }
 } else {
   echo json_encode(array('success' => 'false'));
 }
 ?>
