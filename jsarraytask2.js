const initial = ["Option 1", "Option 2", "Option 3", "Option 4"];
var final = [];
var item = document.getElementById("list1");
var item2=document.getElementById("list2");
for (i = 0; i < initial.length; i++) {
  var ele = document.createElement("option");
  ele.textContent = initial[i];
  console.log(ele);
  item.appendChild(ele);
}
var p=0;
function update() {
  for (i= 0;i<item.length;i++) {
    if (item.options[i].selected) {
      console.log(i);
      let index = item.selectedIndex;
      temp = initial.splice(index, 1);
      console.log("temp=", temp);
      console.log("initial array=", initial);
      final.push(temp);
      item.remove(index);
      i--;
      console.log(i);
    }
    
  }
  console.log("final",final);
  

  for (i = 0; i < final.length; i++) {
    var ele2 = document.createElement("option");
    ele2.textContent = final[i];
    console.log(ele2);
    item2.appendChild(ele2);
  }



}
