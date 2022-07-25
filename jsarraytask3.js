
  let flagname=flagemail=flagphone=flagpostcode=false;
  var regexName =/^[A-Z][a-z]{2,} [A-Z][a-z]{2,}/;
  var regexEmail=/^[A-Za-z][A-Za-z0-9_.]{2,}@[a-z]{2,}.[a-z]{2,}$/;
  var regexPhone=/^\d{10}$/;
  var regexPostcode=/^\d{6}$/;

function nameCheck(){
  document.getElementById("nameoutput").innerHTML="";
  var Name = document.getElementById("name").value;
  console.log(Name.length)
  if(Name.length>25){
    document.getElementById("nameoutput").innerHTML="Name should contain upto 25 characters";
  }
 if(regexName.test(Name)==false){
   document.getElementById("nameoutput").innerHTML="Name should contain first name and last name and upto 25 characters";
  }
  else{
    flagname=true;
  }
  console.log("flag="+flagname)
  }

//   // email validation
  function emailCheck(){
    document.getElementById("emailoutput").innerHTML="";
    var email = document.getElementById("email").value;
 
  if (email.length > 30) {
    document.getElementById("emailoutput").innerHTML =
      "Email cannot contain more than 30 characters";
  }
  else if(regexEmail.test(email)==false){
    document.getElementById("emailoutput").innerHTML =
      "Email cannot contain more than 30 characters";
  }
  else{
    flagemail=true;
  }
  console.log("flag="+flagemail)
//   
  }

 
function phoneCheck(){
  document.getElementById("phoneoutput").innerHTML="";
  var phone = document.getElementById("phone").value;
  //phone number validation
 console.log(phone.length)
  if (regexPhone.test(phone)==false) {
    document.getElementById("phoneoutput").innerHTML =
      "Phone number should contain 10 digits";
  }
  else{
    flagphone=true;
  }
  console.log("flag="+flagphone)
}

function postcodeCheck(){
  document.getElementById("postcodeoutput").innerHTML="";
  //postcode validation
  var postcode=document.getElementById("postcode").value;

  if (regexPostcode.test(postcode)==false) {
    document.getElementById("postcodeoutput").innerHTML =
      "Postcode should contain 6 digits";
  }
  else{
    flagpostcode=true;
  }
  console.log("flag="+flagpostcode)

}

 // storing inputs in array

 
function calculate() {
  console.log(flagname)
  if(flagname==true&&flagemail==true&&flagphone==true&&flagpostcode==true){
  

  document.getElementById("output").style.display="flex";
  document.getElementById("output").style.border="2px solid black";
  document.getElementById("head").style.display="block";

  var Name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

 var address =document.getElementById("address").value;
 var city=document.getElementById("city").value;
 var postcode=document.getElementById("postcode").value;
 var province=document.getElementById("province").value;
 var quantity1=document.getElementById("quantity1").value;
 var price1=quantity1*10;
 var quantity2=document.getElementById("quantity2").value;
 var price2=quantity2*20;
 var quantity3=document.getElementById("quantity3").value;
 var price3=quantity3*30;
 var deliverydays=document.getElementById("deliverydays").value;
 var subtotal=price1+price2+price3+20;
 var taxes=subtotal*0.13;
 var total=subtotal+taxes;
 const details=[
    {name:Name,email:email,phone:phone,address:address,postcode:postcode,quantity1:quantity1,price1:price1,quantity2:quantity2,price2:price2,quantity3:quantity3,price3:price3,subtotal:subtotal,taxes:taxes,total:total}
 ];
 console.log(details)

document.getElementById("dispname").innerHTML=details[0].name;
 document.getElementById("dispemail").innerHTML=details[0].email;
 document.getElementById("dispphone").innerHTML=details[0].phone;
 document.getElementById("dispaddress").innerHTML=details[0].address;
 document.getElementById("product1q").innerHTML=details[0].quantity1;
 document.getElementById("dispproduct1").innerHTML=details[0].price1;
 document.getElementById("product2q").innerHTML=details[0].quantity2;
 document.getElementById("dispproduct2").innerHTML=details[0].price2;
 document.getElementById("product3q").innerHTML=details[0].quantity3;
 document.getElementById("dispproduct3").innerHTML=details[0].price3;
 document.getElementById("subtotal").innerHTML=details[0].subtotal;
 document.getElementById("taxes").innerHTML=details[0].taxes;
 document.getElementById("total").innerHTML=details[0].total;
  }}
