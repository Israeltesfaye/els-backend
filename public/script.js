 async function gett(){
response=await fetch("https://elsapi.herokuapp.com/api/quote")
data=await response.json()
img=document.querySelector(".quote");
img.src=await data.img;
console.log(data)
console.log(img.src)
}
setInterval(gett,10000);
//pasted code
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}