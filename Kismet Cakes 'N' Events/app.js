// first lets get the required Element 
const form = document.querySelector('form'),
statusText = form.querySelector('.button-area span');

form.onsubmit = (e)=>{
    e.preventDefault(); //prevent form from submiting
    statusText.style.color = '#0d6efd';
    statusText.style.display = 'block';
    statusText.innerText = 'Sending your message...'

    // let start Ajax to send form data of html to php
    let xhr = new XMLHttpRequest(); // this creates a new xml object
    xhr.open('POST', 'message.php', true);// sending a post request to message .php file
    xhr.onload = ()=>{ //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){ //if the ajax response is 200 & ready status is 4 means there is no any error
            let response = xhr.response;// storing ajax response in a response variable
            //if the response is an error then we'll change the color to red else reset the form
            if(response.indexOf("Email and password field is required") != -1 || response.indexOf("Enter valid email!") != -1 || response.indexOf("Sorry Failed to send your message") != -1){
                statusText.style.color = 'red';
            }else{
                form.reset();   
                setTimeout(()=>{
                    statusText.style.display = 'none';
                }, 3000); //hide the status text after 3 second if the msg is sent 
            }
            console.log(response);
            statusText.innerText = response;
        }
    }
    let formData = new FormData(form); //creates new form data object. this obj is used to send form data
    xhr.send(formData);//sending form data
}