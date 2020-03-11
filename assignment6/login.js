function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = myFormfunction;
	
	var parameter = getParams();
	 y = parameter["username"]
	console.log(parameter["username"]);
	 x = parameter["password"]
	console.log(parameter["password"]);
	
}
var y ,x
function myFormfunction(){

    username = document.forms["myLogin"]["username"]
	password = document.forms["myLogin"]["password"]

	return checkLogin(username, password)
}

function checkLogin(user, pass){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	if(user.value == y && pass.value == x){
		return true
	}else{
		alert("wrong your password")
		return false
	}
}

			