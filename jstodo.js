const completed=[];
const incompleted=["Pay Bills","dinner"];
var track=0;

ind=completed.length;
var track2=0;
var ref=document.getElementById("incomplete-tasks");
var ref2=document.getElementById("completed-tasks");
var newtask=document.getElementById("new-task");
var add=document.getElementById("addbtn");
populate();
populateCompletedTasks();


function populate(){
text="";
for(i=0;i<incompleted.length;i++)
{
   text+="<li><input type='checkbox' onclick='addToCompleted(this)'><label>"+incompleted[i]+"</label><input type='text'><button class='edit' onclick='editIncompleted(this)'>Edit</button><button class='delete' onclick='deleteIncompleted(this)'>Delete</button></li>";
}
ref.innerHTML=text;
}



function populateCompletedTasks(){
    text="";
    for(i=0;i<completed.length;i++)
{
     text+="<li><input type='checkbox' checked onclick='addBackToIncompleted(this)'><label>"+completed[i]+"</label><input type='text'><button class='edit' onclick='editCompleted(this)'>Edit</button><button class='delete' onclick='deleteCompleted(this)'>Delete</button></li>";
}
ref2.innerHTML=text;
}



function addToIncompleted(){
    // if(add.innerHTML=="Add"){
    var newtask=document.getElementById("new-task").value;
    incompleted.push(newtask);
    console.log(incompleted)
    document.getElementById("new-task").value='';
    populate();
    add.innerHTML="Add";}
    // else if(add.innerHTML=="Update") 
    // {
    //     var newtask=document.getElementById("new-task").value;
    // incompleted.push(newtask);
    // console.log(incompleted)
    // document.getElementById("new-task").value='';
    // populate();
    // add.innerHTML="Add";
    // }
// }




function addToCompleted(args){
    
    let li=args.closest('li');
    let node=Array.from(li.closest('ul').children);
    let index=node.indexOf(li);

    completed.push(incompleted[index]);
    console.log("completed =",completed)
    incompleted.splice(index,1);
    console.log("incompleted =",incompleted)
    populateCompletedTasks();
    populate();
    }

function addBackToIncompleted(args1){
    let li=args1.closest('li');
    let node=Array.from(li.closest('ul').children);
    let index=node.indexOf(li);

    incompleted.push(completed[index]);
    completed.splice(index,1);
    populateCompletedTasks();
    populate();


}

function deleteIncompleted(args){
    let li=args.closest('li');
    let node=Array.from(li.closest('ul').children);
    let index=node.indexOf(li);
    incompleted.splice(index,1);
    populate();

}

function editIncompleted(args){
    let li=args.closest('li');
    let node=Array.from(li.closest('ul').children);
    let index=node.indexOf(li);
    
    newtask.value=incompleted[index];
    add.innerHTML="Update";
    // if(li.closest('ul').id=="incomplete-tasks"){
     add.onclick=function(){addEditIncompleted(index);};
     console.log(add.onclick)
    // }
  
}
function deleteCompleted(args){
    let li=args.closest('li');
    let node=Array.from(li.closest('ul').children);
    let index=node.indexOf(li);
    completed.splice(index,1);
    populateCompletedTasks();

}
function editCompleted(args){
    let li=args.closest('li');
    let node=Array.from(li.closest('ul').children);
    let index=node.indexOf(li);
    
    newtask.value=completed[index];
    add.innerHTML="Update";
    add.onclick=function(){addEditCompleted(index);};
    console.log(add.onclick)
    
  
}

function addEditIncompleted(args){
    alert("came")
    incompleted[args]=newtask.value;
    console.log(incompleted[args]);
    populate();
    add.innerHTML="Add";
    newtask.value=""
    add.onclick=function(){addToIncompleted();};
}
function addEditCompleted(args){
    alert("came")
    completed[args]=newtask.value;
    console.log(completed[args]);
    populateCompletedTasks();
    add.innerHTML="Add";
    newtask.value=""
    add.onclick=function(){addToIncompleted();};
}