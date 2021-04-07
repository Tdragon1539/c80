
function submit(){
var display=[];
 for(var j=1; j<=4;j++){
var name= document.getElementById("sentence_"+j).value;
display.push(name);
} 

document.getElementById("result").innerHTML=display.join(". ");
document.getElementById("submit_button").display="none";



}
function submit2(){
    var display=[];
     for(var j=1; j<=4;j++){
    var name= document.getElementById("sentence_"+j+"_2").value;
    display.push(name);
    } 
    
    document.getElementById("result2").innerHTML=display.join(". ");
    document.getElementById("submit_button2").display="none";
    
    
    
    }