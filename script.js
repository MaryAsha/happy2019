var strBeforeClock = document.getElementById('str_before_clock');
var clock = document.getElementById('clock');
var mainL = document.getElementById('mainLettering');
function hexoClock() {
	//real work
	var ny = new Date(2019,0,1);
	//debug
//	var ny = new Date(2018,11,30,23,28,0,0);
	
    var now = new Date();
    var diff = Math.floor((ny-now)/1000);
    
    if(diff<0){
    	document.location.href = "happy2019.html";
    }
    else{
    	var tsec = diff%60; 
    	if(tsec<10)tsec='0'+ tsec;
    	diff=Math.floor(diff/60);
    	
    	var tmin=diff%60; 
    	if(tmin<10)tmin='0'+ tmin;
    	diff=Math.floor(diff/60);
    	
    	var thour=diff%24; 
    	diff=Math.floor(diff/24);
    	
    	var clockStringUp = "до него "; 
    	var clockStringDown; 
    	var days;
    	if(diff===0){
    		clockStringUp+= "осталось";
    		clockStringDown = '';
    	}
    	else{
    		if(diff>10 && diff<20){
    			clockStringUp+= "осталось";
    			days = " дней и ";
    		}
    		else{
    			days = diff % 10; 
    			if(days===1){
    				clockStringUp+= "остался";
    				days = " день и ";
    			}
    			else{
    				clockStringUp+= "осталось";
    				if(days===0 || days > 4){
    					days = " дней и ";
    				}
    				else{
    					days = " дня и ";
    				}
    			}
    		}
    		clockStringDown = diff.toString() + days;
    	}
    	
    	clockStringDown+= thour.toString() + ':';
    	clockStringDown+= tmin.toString() + ':';
    	clockStringDown+= tsec.toString();
    	
    	strBeforeClock.textContent = clockStringUp;
    	clock.textContent = clockStringDown;
    	
    	mainL.src = "img/congratulation_inscription" + now.getSeconds()%2 + ".png"
    }
}

hexoClock();
setInterval(hexoClock, 1000);
