
 const daysEl = document.getElementById("days");
 const hoursEl =document.getElementById("hours");
 const minutesEl=  document.getElementById("minutes");
 const secondsEl= document.getElementById("seconds");

 console.log(daysEl.innerHTML);
function countdown(){
    const newyear = new Date("2022/01/01");
    const currentdate = new Date();
    const totalseconds= (newyear-currentdate)/1000;
    const minutes= Math.floor(totalseconds/60) % 60;
    const hours= Math.floor(totalseconds/ 3600) % 24;
    const days= Math.floor(totalseconds/ 3600 / 24);
    const seconds= Math.floor(totalseconds) % 60;
    console.log(days,hours ,minutes, seconds);

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minutesEl.innerHTML=minutes;
    secondsEl.innerHTML=seconds;

}

countdown();

setInterval(countdown ,1000)