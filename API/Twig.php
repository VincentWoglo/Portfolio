<?php
    session_start();
    error_reporting(0);
    use Portfolio\Router;
    $loader = new \Twig\Loader\FilesystemLoader('./');
    $twig = new \Twig\Environment($loader);

    echo $twig->render('index.html', [
            //'name' => 'Fabien'
    ]);
?>