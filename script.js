
function AES(){
    var input = document.getElementById("input").value;
    var secretKey = "hippopotamus"
    var result = CryptoJS.AES.encrypt(input,secretKey);
    document.getElementById("aes").innerHTML = result;
}

function SHA1(){
    var input = document.getElementById("input").value;
    var secret = "zebraCakes";
    document.getElementById("sha1").value = CryptoJS.HmacSHA1(input,secret);
}

function SHA224(){
    var input = document.getElementById("input").value;
    var secret = "EnglishMuffin";
    document.getElementById("sha224").value = CryptoJS.HmacSHA224(input,secret);
}

function SHA512(){
    var input = document.getElementById("input").value;
    var secret = "PineappleUpsideDownCake";
    document.getElementById("sha512").value = CryptoJS.HmacSHA512(input,secret);
}

function d2b(){
    let input2 = document.getElementById("input2").value;
    if (input2 == null || input2 ==""){
        alert("Invalid input");
        alert("Try again");
    }
    input2 = parseInt(input2);
    let string1 = "";
    while (input2 >= 1){
        string1 += (input2 % 2).toString();
        input2 = Math.floor(input2/2);
    }
    document.getElementById("output").innerHTML = reverse(string1);
}
function b2d(){
    let input2 = document.getElementById("input2").value;
    if (input2 == null || input2 ==""){
        alert("Invalid input");
        alert("Try again");
    }
    let l = input2.length;
    let exp = l-1;
    var sum = 0;
    var v = 0;
    for (var i=0; i<l; i++){
        v = parseInt(input2.charAt(i));
        sum += v * Math.pow(2,exp);
        exp--;
    }
    document.getElementById("output").innerHTML = sum.toString();
}

function reverse(str){
    var blank = "";
    for (let i = str.length - 1; i >= 0; i--){
        blank += str.charAt(i);
    }
    return blank;
}

function crypto() {
    var input = document.getElementById("input").value;
    if (input == null || input ==""){
        alert("Invalid input");
        alert("Try again");
    }
    else {
        AES();
        SHA1();
        SHA224();
        SHA512();
    }
}

function clearBoxes(){
    document.getElementById("input").value = "";
    document.getElementById("output1").value = "";
    document.getElementById("d2bin").value = "";
    document.getElementById("sha224").value = "";
    document.getElementById("sha512").value = "";
    document.getElementById("sha1").value = "";
    document.getElementById("aes").value = "";
    resetToInput();
}

function resetToInput(){
    document.getElementById("input").focus();
}

