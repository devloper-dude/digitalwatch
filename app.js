

function time(){
  const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
  const sec1 = document.querySelector('.sec1');
  const tm = document.querySelector('.tm');
  
  let date = new Date();
  let hour = date.getHours();
  var minute = date.getMinutes();
  let second = date.getSeconds();
  
  if(second<10){
     second = `0${second}`;
  }
  if(hour > 12){
    hour = hour - 12;
    tm.innerHTML = 'PM';
  }
  else{
    tm.innerHTML = 'AM';
  }
  if(hour<10){
     hour = `0${hour}`;
  }
  if(minute < 10){
     minute = `0${minute}`;
  }
 
  hr.innerHTML = `${hour}`;
  min.innerHTML = `${minute}`;
  sec1.innerHTML = `${second}`;
   
}

setInterval(time,1000);

