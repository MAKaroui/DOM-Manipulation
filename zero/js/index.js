var form= document.getElementById('form');
var login = document.getElementById('Login');

login.addEventListener("click",function(){
    form.style = "display: contents"
})

form.addEventListener('submit',function(event){
    event.preventDefault()
    var mail = document.getElementById('mail');
    var pw = document.getElementById('PW');
    console.log(mail.value);
    console.log(pw.value);
    if ((mail.value=="smu@smu.tn")&&(pw.value=="123456")){
        
        alert("**Welcome**");
     }
    else if((mail.value!="smu@smu.tn")&&(pw.value=="123456")){
        alert("**wrong mail**");
    }
    else if((pw.value!="123456")&&(mail.value=="smu@smu.tn")){
        alert("**wrong password**");
    }
    else {
        alert("everything is ok!");
    }
});

