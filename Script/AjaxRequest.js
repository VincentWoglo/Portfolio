let submitButton = document.getElementById("submitButton")

let ajaxPost = (e)=>{
    e.preventDefault()
    let formInputs = document.getElementById("contactFormWrapper");
    let xhr = new XMLHttpRequest()
    let fileUrl = "./API/Contact.php"
    let data = new FormData(formInputs);
    console.log(data)

    xhr.open( "POST", fileUrl )
    xhr.onload = ()=>{
        if( xhr.readyState == 4 && xhr.status == 200) {
            //Get Response from fileUrl file
            let returnData = xhr.responseText
            
            console.log( returnData )
            //Send response to the front-end
            document.getElementById( "status" ).innerText = returnData
            //document.getElementById( "status" ).innerText = x
        }
    }
    xhr.send(data)
}

submitButton.addEventListener("click", ajaxPost)