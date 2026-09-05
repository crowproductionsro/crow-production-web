<?php
// PRÍKLAD konfigurácie SMTP pre kontaktný formulár – neobsahuje skutočné heslo.
//
// Postup:
// 1. Skopírujte tento súbor a premenujte ho na "smtp-config.php".
// 2. Doplňte skutočné prihlasovacie údaje k e-mailovej schránke (nájdete ich
//    v administrácii Websupportu pod "Nastavenia e-mailu" / POP3-IMAP-SMTP).
// 3. Nahrajte "smtp-config.php" JEDEN ADRESÁR NAD verejný webový priečinok
//    (teda mimo priečinka, do ktorého sa nahráva obsah webu), aby súbor
//    nebol nikdy dostupný cez internetový prehliadač.
// 4. Tento príkladový súbor (smtp-config.example.php) môže ostať vo webe,
//    neobsahuje žiadne citlivé údaje.

return [
    'host'       => 'smtp.websupport.sk',
    'port'       => 587,
    'username'   => 'info@crowproduction.sk',
    'password'   => 'SEM_DOPLNTE_SKUTOCNE_HESLO',
    'from_email' => 'info@crowproduction.sk',
    'from_name'  => 'Web Crow Production',
];
