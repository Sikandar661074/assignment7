function validatefname(){
    var firstname=document.getElementById("fname").value;
    if(firstname==""){
        document.getElementById("para").innerHTML="First Name cannot be empty";
    }else{
    }
}
function validatelname(){
    var lastname=document.getElementById("lname").value;
    if(!isNaN(lastname) || lastname==""){
        document.getElementById("para2").innerHTML="Last Name cannot be empty";
    }else{}
}
function validatemail(){
    var email=document.getElementById("mail").value;
    if(email=="" || /^[^@]+@[^@]{2,}\.[^@]{2,}$/.test(email)){}
    else{
        document.getElementById("para3").innerHTML="Looks like this is not an email";
    }

}
function validatepass(){
    var password=document.getElementById("pass").value;
    if(password=="" || password.length<8){
        document.getElementById("para4").innerHTML="Password is invalid"
    }
}
