function result()
{

   var age = parseInt(document.getElementById("age").value);
   var weight= parseInt(document.getElementById("weight").value);

  if(age<5 | age >20)
  {
    document.getElementById("output").innerHTML="Input out of range";
  }
   if((age>=5 && age<=7))
   {
     if(weight >=15 && weight<=20){
   document.getElementById("output").innerHTML="Keep it up!";
   document.getElementById("output").style.color="green";}
   if(weight <15){
   document.getElementById("output").innerHTML="You are underweight.";
   document.getElementById("output").style.color="red";}
   if(weight>20){
   document.getElementById("output").innerHTML="You are overweight.";
   document.getElementById("output").style.color="red";}
   
   }
   if((age>=8 && age<=10))
   {
     if(weight >=21 && weight<=25){
   document.getElementById("output").innerHTML="Keep it up!";
   document.getElementById("output").style.color="green";}
   if(weight <21){
   document.getElementById("output").innerHTML="You are underweight.";
   document.getElementById("output").style.color="red";}
   if(weight>25){
   document.getElementById("output").innerHTML="You are overweight.";
   document.getElementById("output").style.color="red";}
}

   if((age>=11 && age<=15))
   {
     if(weight >=26 && weight<=30){
   document.getElementById("output").innerHTML="Keep it up!";
   document.getElementById("output").style.color="green";}
   if(weight <26){
   document.getElementById("output").innerHTML="You are underweight.";
   document.getElementById("output").style.color="red";}
   if(weight>30){
   document.getElementById("output").innerHTML="You are overweight.";
   document.getElementById("output").style.color="red";}
   }

   if((age>=16 && age<=20))
   {
     if(weight >=31 && weight<=40){
   document.getElementById("output").innerHTML="Keep it up!";
   document.getElementById("output").style.color="green";}
   if(weight <31){
   document.getElementById("output").innerHTML="You are underweight.";
   document.getElementById("output").style.color="red";}
   if(weight>40){
   document.getElementById("output").innerHTML="You are overweight.";
   document.getElementById("output").style.color="red";}
   }
   
}