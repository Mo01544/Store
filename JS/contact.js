var input1 = document.getElementById("username");
var input2 = document.getElementById("email");
var input3 = document.getElementById("texts");

function saveCookiee() {
    var username = input1.value;
    var email = input2.value;
    var feedback = input3.value;
    document.cookie = "username=" + username + ";expires=21/11/2022";
    document.cookie = "Email=" + email + ";expires=21/11/2022";
    document.cookie = "Ur Massage=" + feedback + ";expires=21/11/2022";
    if(username  == true && email == true && feedback == true ){
        confirmSave();
    }
    
    
}
function getAllCookie() {
    console.log(document.cookie)
}
function getCookie(params) {
    var cookie = document.cookie;
    var arr = cookie.split("; ")
    var subArr, flage = 0;
    //for(  c in arr) /// later
    for (var i = 0; i < arr.length; i++) {
        // console.log("c =", c);
        subArr = arr[i].split("=");
        if (subArr[0] == params) {
            console.log(a = subArr[1]);
            flage = 1;
        }
    }
    if (flage == 0)
        console.log("no cookie with that name")
}

function setCookie(cookieName, cookieValue) {
    //var cookie = document.cookie
    if ((document.cookie.search(cookieName)) != -1) {

        document.cookie = cookieName + "=" + cookieValue + ";expires=21/12/2022";
    }
    else
        console.log("COOKIE NOT FOUND")
    console.log(document.cookie)
}

function removeCookie(cookieName) {
    //var cookie = document.cookie
    if ((document.cookie.search(cookieName)) != -1) {
        document.cookie = cookieName + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
    else
        console.log("COOKIE NOT FOUND")
    console.log(document.cookie)
}

function confirmSave(){
    var myDiv = document.getElementById('p');
    myDiv.innerText="It has been sent ;)";
    myDiv.style.textAlign = "center";
    myDiv.style.color = "green";
      
  }