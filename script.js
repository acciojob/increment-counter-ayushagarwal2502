//your JS code here. If required.

let count=document.getElementById("counter").innerHTML;
function onlick(){
  alert(count); 

	 count+=1;
	 document.getElementById("counter").innerHTML=count;
	
} 
onlick();



