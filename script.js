var clock = document.getElementById('clock');

function hexoClock() {
	var ny = new Date(2019,0,1);
//	test Dates:
//	var ny = new Date(2018,10,25);
    var now = new Date();
    var diff = Math.floor((ny-now)/1000);
    
    var tsec = diff%60; 
    if(tsec<10)tsec='0'+ tsec;
    diff=Math.floor(diff/60);
    
    var tmin=diff%60; 
    if(tmin<10)tmin='0'+ tmin;
    diff=Math.floor(diff/60);
    
    var thour=diff%24; 
    diff=Math.floor(diff/24);
    
    var clockString = "до него ";
    if(diff===0){
    	clockString+= "осталось "
    }
    else{
    	if(diff>10 && diff<20){
    		clockString+= "осталось "
    		days = " дней и "
    	}
    	else{
    		var days = diff % 10; 
    		if(days===1){
    			clockString+= "остался ";
    			days = " день и "
    		}
    		else{
    			clockString+= "осталось "
				if(days===0 || days > 4){
					days = " дней и ";
				}
				else{
					days = " дня и ";
				}
    		}
    	}
    	clockString+= diff.toString() + days;
    }
  
    clockString+= thour.toString() + ':';
    clockString+= tmin.toString() + ':';
    clockString+= tsec.toString();

    clock.textContent = clockString;
}

hexoClock();
setInterval(hexoClock, 1000);
