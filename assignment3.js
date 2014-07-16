//Eric Grube
//CIS 4004
//Assignment 5
//Javascript File for Assignment 5
//Professor Llewellyn
//7/9/14

//the clock function
function startTime() {
	//make a variable that contains the date
    var today=new Date();
	//make a var that contains the hour
    var h=today.getHours();
	//this is the minutes
    var m=today.getMinutes();
	//this is the seconds
    var s=today.getSeconds();
	//now check the time in minutes
    m = checkTime(m);
	//the same for seconds
    s = checkTime(s);
	//get the time element and insert the time statement
    document.getElementById('time').innerHTML = "Today is: " + today;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function formValidation(oEvent) { 
			oEvent = oEvent || window.event;
			var txtField = oEvent.target || oEvent.srcElement; 

			var t1ck=true;
			var msg=" ";
				if(document.getElementById("r1").value.length < 3 )
				{ t1ck=false; msg = msg + "Your name should be minimun 3 char length";}
				if(document.getElementById("r2").value.length < 3 )
				{ t1ck=false; msg = msg + "Your name should be minimun 3 char length";}
				if(document.getElementById("s1").value.length < 3 )
				{ t1ck=false; msg = msg + "Your name should be minimun 3 char length";}
				if(document.getElementById("c1").value.length < 3 )
				{ t1ck=false; msg = msg + "Your name should be minimun 3 char length";}

				//alert(msg + t1ck);

				if(t1ck){document.getElementById("btnSignUp").disabled = false; }
				else{document.getElementById("btnSignUp").disabled = true; }
				} 

	function resetForm(){
		document.getElementById("btnSignUp").disabled = true; 
		var frmMain = document.forms[0]; 
		frmMain.reset();
		}

	window.onload = function () { 

		var btnSignUp = document.getElementById("btnSignUp"); 

		var r1 = document.getElementById("r1"); 
		var r2 = document.getElementById("r2"); 
		var s1=document.getElementById("s1");
		var c1=document.getElementById("c1");

		var t1ck=false;
		document.getElementById("btnSignUp").disabled = true;
		r1.onclick = formValidation; 
		r2.onclick = formValidation; 
		s1.onclick = formValidation; 
		c1.onclick = formValidation;
		
	}
	
//This function finds the table and creates css
//classes that alter the appearance of the table
//to the specifications of the assignment	
function alternate(id){ 
		
		//if the id exists in the page
		if(document.getElementsByTagName){  
			
			//get the table
			var table = document.getElementById(id);   
			
			//get the rows in a variable
			var rows = table.getElementsByTagName("tr");   
			
			//make a loop that goes through as many times
			//as theere are rows
			for(i = 0; i < rows.length; i++){           
			
				//for the first row, make it it's own class
				if(i == 0){
					rows[0].className = "first";
				}
			
				//for the even rows, make a class for them
				else if(i % 2 == 0){ 
					rows[i].className = "even"; 
				}
			
				//and do the same for odds
				else{ 
					rows[i].className = "odd"; 
				}       

			} 
	} 

}