function validate()
{

var username=document.getElementById("username").Value;
var password=document.getElementById("password").Value;
if(username=="siddappa" && password=="siddu")
{
    alert("login successfully");
    return false;
}
else
{
    alert("login failed");
}

}    