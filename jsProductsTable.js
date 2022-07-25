const arr = [];
let text;
function add() {
  document.getElementById("product").style.display = "table";

  arr.push({
    id: document.getElementById("idinput").value,
    name: document.getElementById("nameinput").value,
    price: document.getElementById("priceinput").value,
  });
  console.log(arr);

  document.getElementById("idinput").value = "";
  document.getElementById("nameinput").value = "";
  document.getElementById("priceinput").value = "";

  for (i = 0; i < arr.length; i++) {
    text =
      "<tr><td>" +
      arr[i].id +
      "</td><td>" +
      arr[i].name +
      "</td><td>" +
      arr[i].price +
      "</td></tr>";
  }
  console.log(text);

  document.getElementById("product").innerHTML =
    document.getElementById("product").innerHTML + text;
}
