function logInIdent(){
    let userName= document.getElementById("login_user").value;
    let password=document.getElementById("login_pass").value;
    if(userName == 'abcd'){
        return true;
    }
    else{
        document.getElementById("error-name").innerHTML="wrong user name";
    }
    if(password == '1234'){
        return true;
    }
        else{
            document.getElementById("error-pass").innerHTML="wrong password";
        
    }
    if(userName=='abcd' && password=='1234'){
        
    }
}