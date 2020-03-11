
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = myFormfunction;
	
}
function myFormfunction(){
    var x = document.forms["myForm"]["firstname"]
    var l = document.forms["myForm"]["lastname"]
    var g = document.forms["myForm"]["gender"]
    var b = document.forms["myForm"]["birthday"]
    var e = document.forms["myForm"]["email"]
    var u = document.forms["myForm"]["username"]
    var p = document.forms["myForm"]["password"]
    var r = document.forms["myForm"]["repassword"]

    return validateForm(p.value , r.value)
}

function validateForm(p, r) {
    
    if(p == r){
        return true;
    }else{
       
        var form = document.getElementById("errormsg");
        form.innerHTML = "password is not correct";
        return false;

    }
}

