<?php
    session_start();

    require_once('../vendor/autoload.php');
    $loader = new \Twig\Loader\FilesystemLoader('../');
    $twig = new \Twig\Environment($loader);

    echo $twig->render('index.html', [
            'name' => 'Fabien'
    ]);
?>