var date=new Date,renderCalendar=function(){date.setDate(1);var e=document.querySelector(".calendar__days"),t=new Date(date.getFullYear(),date.getMonth()+1,0).getDate(),a=new Date(date.getFullYear(),date.getMonth(),0).getDate(),n=date.getDay()-1,d=7-(new Date(date.getFullYear(),date.getMonth()+1,0).getDay()-1)-1,r=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];document.querySelector(".js-month").textContent=r[date.getMonth()],document.querySelector(".js-year").textContent=date.getFullYear();for(var c="",o=n;0<o;o--)c+="<div class='calendar__prev-date'>".concat(a-o+1,"</div>");for(var l=1;l<=t;l++)l===(new Date).getDate()&&date.getMonth()===(new Date).getMonth()?c+="<div class='calendar__today'>".concat(l,"<div class='calendar__arrival'>Заезд</div></div>"):c+="<div class='calendar__date'>".concat(l,"</div>");for(var i=1;i<=d;i++)c+="<div class='calendar__next-date'>".concat(i,"</div>"),e.innerHTML=c;var s=document.querySelector(".calendar__next-date"),u=document.querySelector(".calendar__date"),_=r[date.getMonth()].substring(0,3),v=r[date.getMonth()+1].substring(0,3);u.innerHTML+="<div class='calendar__first-day'>".concat(_,"</div>"),s.innerHTML+="<div class='calendar__first-day'>".concat(v,"</div>")};document.querySelector(".calendar__previous").addEventListener("click",function(){date.setMonth(date.getMonth()-1),renderCalendar()}),document.querySelector(".calendar__next").addEventListener("click",function(){date.setMonth(date.getMonth()+1),renderCalendar()}),renderCalendar(),document.getElementById("start-date").value=+document.querySelector(".calendar__today").textContent+" "+document.querySelector(".js-month").textContent;var picks=document.querySelectorAll(".calendar__date, .calendar__today, .calendar__next-date").forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("calendar__picked-date"),document.getElementById("end-date").value=e.textContent+" "+document.querySelector(".js-month").textContent,e.innerHTML+="<div class='calendar__arrival'>Выезд</div>"})});