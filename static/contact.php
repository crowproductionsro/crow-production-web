<?php
// Kontaktný formulár – Crow Production
// Posiela správy z formulára na hlavnej stránke cez SMTP (PHPMailer).

require __DIR__ . '/vendor/phpmailer/Exception.php';
require __DIR__ . '/vendor/phpmailer/SMTP.php';
require __DIR__ . '/vendor/phpmailer/PHPMailer.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /');
    exit;
}

// Honeypot – skryté pole, ktoré vypĺňajú len boty
if (!empty($_POST['website'])) {
    exit;
}

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$project = trim($_POST['project'] ?? '');
$message = trim($_POST['message'] ?? '');
$consent = $_POST['consent'] ?? '';

if ($name === '' || $email === '' || $consent === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: /?form=error#contact');
    exit;
}

// Konfigurácia SMTP – súbor sa hľadá mimo verejného webového priečinka (bezpečnejšie),
// s fallbackom na súbor priamo vo webovom priečinku, ak nie je iná možnosť.
$configPaths = [
    dirname(__DIR__) . '/smtp-config.php',
    __DIR__ . '/smtp-config.php',
];

$config = null;
foreach ($configPaths as $path) {
    if (is_file($path)) {
        $config = require $path;
        break;
    }
}

if (!$config) {
    error_log('Kontaktný formulár: chýba súbor smtp-config.php');
    header('Location: /?form=error#contact');
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $config['host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['username'];
    $mail->Password   = $config['password'];
    $mail->SMTPSecure = $config['port'] == 465 ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $config['port'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress('info@crowproduction.sk');
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'Nová správa z kontaktného formulára – ' . $name;
    $mail->Body    = "Meno a priezvisko: {$name}\n"
                   . "E-mail: {$email}\n"
                   . "Typ projektu: {$project}\n\n"
                   . "Správa:\n{$message}\n";

    $mail->send();
    header('Location: /?form=success#contact');
} catch (PHPMailerException $e) {
    error_log('Kontaktný formulár – odoslanie zlyhalo: ' . $mail->ErrorInfo);
    header('Location: /?form=error#contact');
}
exit;
