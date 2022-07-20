const phones = [
{name:"iPhone 12", modelno:"m123", price:85999, availablity:"yes"},
{name:"Lumia 10", modelno:"m234", price:36999, availablity:"no"},
{name:"Nokia XR20",modelno:"m345", price:46999, availablity:"yes"},
{name:"Xiaomi 11T Pro", modelno:"m456", price:39999, availablity:"yes"}
] ;
function add(args){
    document.getElementById("headings").style.display="table";
    document.getElementById("details").style.display="table";
 if(args=="iphone")
 document.getElementById("details").innerHTML="<tr><td>"+ phones[0].name +"</td><td>"+ phones[0].modelno +"</td><td>"+ phones[0].price +"</td><td>"+ phones[0].availablity +"</td></tr>";
 if(args=="windows")
 document.getElementById("details").innerHTML="<tr><td>"+ phones[1].name +"</td><td>"+ phones[1].modelno +"</td><td>"+ phones[1].price +"</td><td>"+ phones[1].availablity +"</td></tr>";
 if(args=="nokia")
 document.getElementById("details").innerHTML="<tr><td>"+ phones[2].name +"</td><td>"+ phones[2].modelno +"</td><td>"+ phones[2].price +"</td><td>"+ phones[2].availablity +"</td></tr>";
 if(args=="redme")
 document.getElementById("details").innerHTML="<tr><td>"+ phones[3].name +"</td><td>"+ phones[3].modelno +"</td><td>"+ phones[3].price +"</td><td>"+ phones[3].availablity +"</td></tr>";
}