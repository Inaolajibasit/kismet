<?php
    //lets get all our form values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){//if email and message field are not empty
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){// IF User enterd valid email
            $receiver = "inaolajibasit98@gmail.com";//ADD THE EMAIL WHERE YOU WANT TO RECEIVE THE MESSAGE
            $subject = "From: $name <$email>";//subject of the email. It'll look like From: CodingNepal <abc@gmaol.com>
            //mearging all contacint all user values inside the body value. \n is used to form a new line 
            $body = "Name: $name\nEmail: $email\nPhone: $phone\nEvents: $website\n\nMessage: $message\n\nRegards,\n$name";
            $sender = "From: $email"; //sender email
            if(mail($receiver, $subject, $body, $sender)){ //mail() is an inbuilt php fuction to send mail
                echo "Your message has been sent";
            }else{
                echo "Sorry Failed to send your message";
            }
        }else{
            echo "Enter valid email!";
        }
    }else{
        echo "Email and password field is required";
    }
?>