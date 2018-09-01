function act()
{
var a = document.getElementById('uid').value;
var b = document.getElementById('pid').value;
var c = "sri";
var d = "1234";

if((a==="")||(b===""))
{
alert("Please enter the req fields");
}
else if((c===a.toString())&&(d===b.toString()))
{
alert("Login Successfull");
}
else
{
alert("Please register first");
}
}

function shodata()
{
var f = document.getElementById('firstid').value;
var m = document.getElementById('lastid').value;
var k = document.getElementById('fatrid').value;
var b = document.getElementById('emailid').value;
var r = document.getElementById('passid').value;

if((f==="")||(m==="")||(k==="")||(b==="")||(r===""))
{
alert("please enter required fields");
}
else
{
alert("Register Sucessfull"+"\nFirstName :"+f+"\nLastName :"+m+"\nMotherName :"+k+"\nEmailId :"+b);
}
}