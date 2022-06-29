let ajaxPost = (e)=>{
    //e.preventDefautlt()
    let xhr = new XMLHttpRequest()
    let fileUrl = "../API/Contact.php"
    console.log("djfhdjf")
    //let emailInput = document.getElementById("emailInput").value

    //Get error message or response from php fileUrl and display it on the front-end
    //Resource: https://www.delftstack.com/howto/php/pass-php-variable-to-javascript/
    xhr.open( "get", fileUrl )
    xhr.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" )
    xhr.onload = ()=>{
        if( xhr.readyState == 4 && xhr.status == 200) {
            //Get Response from fileUrl file
            let returnData = xhr.responseText
            
            console.log( returnData )
            //Send response to the front-end
            document.getElementById( "status" ).innerText = returnData
        }
    }
    xhr.send()
}
ajaxPost()