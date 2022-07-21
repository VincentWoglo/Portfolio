<?php
    use Phroute\Phroute\RouteCollector;
    use Portfolio\Router\Loader;
    $router = new RouteCollector;
    $router->get('/', function(){
        require_once("./API/Twig.php");
    });
    $dispatcher = new Phroute\Phroute\Dispatcher($router->getData());
    $response = $dispatcher->dispatch($_SERVER['REQUEST_METHOD'], $_SERVER['PATH_INFO']);
?>