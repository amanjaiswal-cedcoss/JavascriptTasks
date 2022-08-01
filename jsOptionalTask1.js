let word="EVENT";
let len=parseInt(word.length)+1;
function checkGuess(){
    console.log(len);
    len--;
    if(len>=0){
        let flag=0;
        let char='';
        guessLetter=document.getElementById("inputGuess").value.toUpperCase();
        document.getElementById("guessRemainingPara").innerHTML="You have "+len+" guesses remaining.";
        document.getElementById("guessAttemptsPara").innerHTML+="    "+guessLetter+"    ";
        console.log("inside len")
    for(i=0;i<word.length;i++){
        console.log("inside word loop")
        if(guessLetter==word.charAt(i)){
            document.getElementById(i).innerHTML=word.charAt(i);
            flag=1;
        }
    }
    if(flag==1){
        document.getElementById("guessResult").innerHTML="Good guess! The word has letter "+guessLetter;   
    }
    else{
        document.getElementById("guessResult").innerHTML="Wrong guess! The word does not has letter "+guessLetter;
    }
    winner();
}
else{
    document.getElementById("guessExceed").innerHTML="GAME OVER!! You have exceeded the guess limit";
    document.getElementById("guessRemainingPara").innerHTML="You have 0 guesses remaining.";
}
}

function winner(){
    let count=0;
    for(i=0;i<word.length;i++){
        ch=document.getElementById(i).innerHTML;
        if(ch==word.charAt(i)){
            count++;
        }
    }
    if(count==5)
    document.getElementById("guessExceed").innerHTML="CONGRATULATIONS! You have won the game.";
}