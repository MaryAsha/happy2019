var strBeforeClock = document.getElementById('str_before_clock');
var clock = document.getElementById('clock');
var addStyle = document.getElementById('addStyle');
var styles = [
              5,//0
              5,//1
              5,//2
              5,//3
              5,//4
              4,//5
              4,//6
              4,//7
              3,//8
              3,//9
              2,//10
              2,//11
              1,//12
              1,//13
              0,//14
              0,//15
              0,//16
              0,//17
              1,//18
              1,//19
              2,//20
              3,//21
              4,//22
              5]//23

function hexoClock() {
	var ny = new Date(2019,0,1);
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
    
    var clockStringUp = "до него "; 
    var clockStringDown; 
    var days;
    if(diff===0){
    	clockStringUp+= "осталось";
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

	var style = "css/addStyle" + styles[now.getHours()] + ".css";
	addStyle.href = style;
}

hexoClock();
setInterval(hexoClock, 1000);
