function validatepasswd(){
    let x = document.forms["theform"]["createpasswd"].value;
    let y =document.forms["theform"]["confirmpasswd"].value;
    if (x!==y){
        window.alert("password MUST be similar");
        return false;
    }
    else{
    window.alert("Registration Successful!!");
    window.location="login page2.html";
    return false;
    }
}
function validateuser(){
    var uname = document.forms["the_form"]["uname"].value;
    var passwd =document.forms["the_form"]["passwd"].value;
    if (uname == "Andy" && passwd == "1234"){
        window.location="specialist.html";
        return false;
    }
    else{
        alert("Incorrect details!  please try again");
        return false;
    }
}
function validatedoc(){
    let uname = document.forms["docform"]["uname"].value;
    let passwd =document.forms["docform"]["passwd"].value;
    if(uname == "John Doe" && passwd == "johndoe"){
        window.location="chat.html";
        return false;
    }
    else{
        alert("Incorrect details! Please try again");
        return false;
    }
}
function openform(){
    document.getElementById("myform").style.display="block";
}
function closeform(){
    document.getElementById("myform").style.display="none";
}