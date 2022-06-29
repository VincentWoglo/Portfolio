<?php
    namespace API;
    require_once('../vendor/autoload.php');
    use API\ContactForm;
    session_start();
    //USe sessions to get the get request
    class contact
    {
        // private $apiKey;
        // function __construct($apiKey)
        // {
        //     $this->apiKey = "";
        // }
        
        function contact(){
            if( isset($_SESSION["submitButton"] ) ){
                $createContact = new contact;
                //check if email exist
                //if not then run createContact()
                //elsegetContact
            }
        }

        function createContact(){
            https://stackoverflow.com/questions/27875405/invalid-mailchimp-api-key-in-mailchimp-export-api

            $mailchimp = new \MailchimpMarketing\ApiClient();

            $mailchimp->setConfig( [
                'apiKey' => '45c279ee6c5b07c64192b191e407f717-us5',
                'server' => 'us5'
            ] );
            $list_id = "a934548160";

            $EMAIL = $_SESSION["emailInput"];
            $FIRSTNAME = $_SESSION["firstNameInput"];
            $LASTNAME = $_SESSION["lastNameInput"];
            $MESSAGE = $_SESSION["messageInput"];
            $INQUIRY = $_SESSION["selectInquiryWrapper"];
            try {
                $response = $mailchimp->lists->addListMember ($list_id, [
                    "email_address" => $EMAIL,
                    "status" => "subscribed",
                    "merge_fields" => [
                    "FIRSTNAME" => $FIRSTNAME,
                    "LASTNAME" => $LASTNAME,
                    "MESSAGE" => $MESSAGE,
                    "INQUIRY" => $INQUIRY
                    ]
                ] );
                print_r(json_encode( $response ));
            } catch ( MailchimpMarketing\ApiException $e ) {
                echo $e->getMessage();
            }
        
        }
        //Get all the email that already exist
        function getContact(){      
            $existingEmails = [];

            $client = new \MailchimpMarketing\ApiClient();

            $client->setConfig( [
                'apiKey' => '45c279ee6c5b07c64192b191e407f717-us5',
                'server' => 'us5'
            ] );
            $list_id = "a934548160";

            $response = $client->lists->getListMembersInfo( $list_id );
            //Loop through to get user's email and compare it with the input
            for( $Increment = 0; $Increment<count( $response->members ); $Increment++ ){
                $allMailChimpEmails =  $response->members[ $Increment ]->email_address;
                array_push( $existingEmails, $allMailChimpEmails );
            }
            //returned all the emails that exist in MailChimp in an arrays;
            return $existingEmails;
            //print_r(json_encode($response->members));
        }

        function alreadyExist(){
            //Resources: https://w3codegenerator.com/article/validate-list-of-email-addresses-in-javascript
            if( isset($_SESSION["submitButton"]) ){
                $EMAIL = $_SESSION["emailInput"];
                $contact = new contact;
                $existingEmails = $contact->getContact();
                $error = [];

                if(in_array( $EMAIL, $existingEmails)){
                    array_push( $error, "Sorry ".$EMAIL." already exist");
                    //Send ajax message to the front-end saying email already exist
                }else{
                    array_push( $error, "Email doesn't exist yet");
                    //Call createCofntact() here if the email doesn't exist
                    //Send ajax message to the front end for confirmation of sent email
                    //Or redirect the user to another page. Same for the Email collection near footer
                }

                //Resources: https://www.geeksforgeeks.org/how-to-get-return-text-from-php-file-with-ajax/
                echo $error[0];
            }
        }
        function Test(){
            echo "dsjkfhjkdfj";
            echo $_SESSION["submitButton"];
        }
    }
    $contact = new contact;
    //$contact->createContact();
    //$contact->getContact();
    $contact->alreadyExist();
    //$contact->Test();
?>