var clock = document.getElementById('clock');

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
    
    thour=diff%24; 
    diff=Math.floor(diff/24);
    
    var clockString = "до него осталось ";
    clockString+= diff.toString() + " д. и ";
    clockString+= thour.toString() + ':';
    clockString+= tmin.toString() + ':';
    clockString+= tsec.toString();

    clock.textContent = clockString;
}

hexoClock();
setInterval(hexoClock, 1000);
