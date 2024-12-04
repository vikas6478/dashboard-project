
// form border remove
function removeformborder(s){
    let remove = document.querySelector(`#${s}`);
    remove.style.outline = "none";
}
//form border remove border




let converdata;
//form validation
function formvalidet(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let psw = document.querySelector('#psw').value;
    let cpsw = document.querySelector('#cpsw').value;


    if(name === "")
    {
        window.alert("Please Enter Your Name")
        return false;
    }

    else if(email === "")
    {
        window.alert("Please Enter Your Email")
        return false;
    }

    else if(!(email.includes('@') && email.includes('.com')))
    {
        window.alert("Please Enter Valid Email")
        return false;
    }

    else if(psw === "")
    {
        window.alert("Please Enter Password")
        return false;
    }
    else if(!
        (
            psw.match(/[1234567890]/)
            &&
            //psw.match(/[!@#$%^&*()~]/)
            //&&
            psw.match(/[qwertyuiopasdfghjklzxcvbnm]/)
            //&&
            //psw.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
        )
    )
    {
        window.alert("Please Enter Storng Password number name")
        return false;
    }

    else if(!(psw.length > 5 && psw.length < 20))
    {
        window.alert("Password is 6-20 Charecter")
        return false;
    }


    else if(psw !== cpsw)
    {
        window.alert("password and confirm password not match");
        document.querySelector('#cpsw').value ="";
        document.querySelector('#psw').value ="";
        document.querySelector('#psw').focus();
        return false;
    }

    //local storage set item

    let name1 = document.querySelector('#name').value;
    let email1 = document.querySelector('#email').value;
    let psw1 = document.querySelector('#psw').value;
    let cpsw1 = document.querySelector('#cpsw').value;

    let data = {
        name : name1,
        email : email1,
        psw : psw1,
        cpsw : cpsw1
    }

    let converdata = localStorage.setItem("userdata",JSON.stringify(data))

}
//form validation end

// login page function get item
function localst(){
    let finaldata = JSON.parse(localStorage.getItem("userdata"));

    let validemail = finaldata.email;
    let validpsw = finaldata.cpsw;

    let email2 = document.querySelector('#email').value;
    let cpsw2 = document.querySelector('#cpsw').value;

    if(email2 != validemail)
    {
        let error = document.querySelector('#erroremail')
        error.innerHTML = "*Sorry, we could not find your account";
        return false;
    }
    else if(cpsw2 != validpsw)
    {
        let error = document.querySelector('#errorpsw')
        error.innerHTML = "*Incorrect,Password"
        return false;
    }
}
// login page function get item end
