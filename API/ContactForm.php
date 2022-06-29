<?php
    require_once('../vendor/autoload.php');
    use API\Contact;
    

    $contact = new Contact;
    //$contact->createContact();
    //$contact->getContact();
    //$contact->alreadyExist();
    //$contact->contact();
    //$contact->Test();
    $_SESSION['firstNameInput'] = $_REQUEST["firstNameInput"];
    $_SESSION["submitButton"] = $_REQUEST["submitButton"];
    $_SESSION["emailInput"] = $_REQUEST["emailInput"];
    $_SESSION["firstNameInput"] = $_REQUEST["firstNameInput"];
    $_SESSION["lastNameInput"] = $_REQUEST["lastNameInput"];
    $_SESSION["messageInput"] = $_REQUEST["messageInput"];
    $_SESSION["selectInquiryWrapper"] = $_REQUEST["selectInquiryWrapper"];
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ajax Call</title>
    </head>
    <body>
        <div class="status" id="status" style="color: red">cxfd</div>
        <script src="../Script/AjaxRequest.js"></script>
    </body>
</html>