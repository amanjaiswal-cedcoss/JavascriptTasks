var U = 0,
  L = 0,
  space = 0,
  cal = 0,
  special = 0,
  specialoccur;
  
 
function calculate() {

  document.getElementById("output").style.display="flex";
  document.getElementById("output").style.border="2px solid black";
  document.getElementById("head").style.display="block";

  var name = document.getElementById("name").value;

  
  var postcode=document.getElementById("postcode").value;

  console.log(name.length)
  if (name.length > 25)
      document.getElementById("nameoutput").innerHTML =
        "Name can contain maximum 25 characters";
    if (name.length < 3)
        document.getElementById("nameoutput").innerHTML =
          "Name should contain first name and last name both";

    // name validation

  for(i = 0; i < name.length; i++) {
      var traverse = name.charCodeAt(i);
      console.log("traverse" + traverse);
      if (traverse == 32) {
        space++;
      } else if (traverse >= 65 && traverse < 90) {
        U++;
      } else if (traverse >= 97 && traverse <= 122) {
        L++;
      }
    }
    var cal = name.length - (U + space);
    console.log(cal);

    if (U > 2 || space > 1 || L < cal) {
      document.getElementById("nameoutput").innerHTML =
        "Name can contain lowercase letters, uppercase letters and one space only";
    }
    if(U<2 || space<1){
      document.getElementById("nameoutput").innerHTML =
      "Name should contain 2 uppercase letters, each for first and last name";
    }

  // email validation

  var email = document.getElementById("email").value;
  if (email.length > 30) {
    document.getElementById("emailoutput").innerHTML =
      "Email cannot contain more than 30 characters";
  }

  if (
    email.charCodeAt(0) < 48 ||
    (email.charCodeAt(0) > 57 && email.charCodeAt(0) < 65) ||
    (email.charCodeAt(0) > 90 && email.charCodeAt(0) < 97) ||
    email.charCodeAt(0) > 122
  ) {
    document.getElementById("emailoutput").innerHTML =
      "Email's first character cannot be a special character";
  }
  for (i = 0; i < email.length; i++) {
    var traverse2 = email.charCodeAt(i);
    console.log("traverse 2=" + traverse2);
    if (traverse2 == 64) {
      special++;
      specialoccur = i;
    }
  }
 console.log("first loop finish")
 console.log("@ =", special)
 console.log("@ position", specialoccur)
  if (special > 1) {
    document.getElementById("emailoutput").innerHTML =
      "Email can only contain one @ sign";
  }
    for (i = specialoccur+1; i < email.length; i++) {
      if (
        (email.charCodeAt(i) < 65 ||( email.charCodeAt(i) > 90 &&
        email.charCodeAt(i) < 97 ) || email.charCodeAt(i) > 122)
      ) {
        document.getElementById("emailoutput").innerHTML =
          "Email should contain only letters after @ sign";
      }
    }
  
  

 

  //phone number validation
  var phone = document.getElementById("phone").value;
  if (phone.length != 10) {
    document.getElementById("phoneoutput").innerHTML =
      "Phone number should contain 10 digits";
  }

  //postcode validation
  var postcode = document.getElementById("phone").value;
  if (postcode.length != 6) {
    document.getElementById("postcodeoutput").innerHTML =
      "Postcode should contain 6 digits";
  }
  
 // storing inputs in array


 var address =document.getElementById("address").value;
 var city=document.getElementById("city").value;
 var postcode      =document.getElementById("postcode").value;
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
    {name:name,email:email,phone:phone,address:address,quantity1:quantity1,price1:price1,quantity2:quantity2,price2:price2,quantity3:quantity3,price3:price3,subtotal:subtotal,taxes:taxes,total:total}
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
}
