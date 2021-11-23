function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_Message = document.getElementById("error_Message");
    var text;

    error_Message.style.padding ="10px";

    if (name.length <3){
        text ="Please enter a valid name";
        error_Message.innerHTML = text;
        return false;
    }

    if (subject.length <5){
        text ="Please enter a londer message";
        error_Message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6 ){
        text ="Please enter a valid email ";
        error_Message.innerHTML = text;
        return false;
    }

    if (message.length <=3){
        text ="Please enter a longer message ";
        error_Message.innerHTML = text;
        return false;
    }
    alert ("Form submitted.Thank you!")
return true;

    

}
