let yearByClassName = document.getElementsByClassName("container__box")[0].firstElementChild;

let monthsBySelectorName = document.querySelector(".container__box--months")

let dayBySelectorName = document.querySelectorAll(".container__box--days")[0]

let hoursByIdName = document.getElementById("hours");

let minutesByClassName = document.getElementsByClassName("container")[0].children[4].firstElementChild;

let secondsByClassName = document.getElementsByClassName("container__box")[5].firstElementChild;

let birthdayNameByName = document.getElementsByName("birthday")[0];



birthdayNameByName.addEventListener("change", ()=>{
    if( new Date(birthdayNameByName.value)>new Date){
        return  alert("Time Error!"); 
    } else {
        function time () {
            if(new Date().getDate() - new Date(birthdayNameByName.value).getDate()<0) {
                dayBySelectorName.innerText = new Date().getDate() - new Date(birthdayNameByName.value).getDate() + 30;
                monthsBySelectorName.innerText -= 1;
            } else {
                dayBySelectorName.innerText = new Date().getDate() - new Date(birthdayNameByName.value).getDate(); 
            }
            
            
             
            if (new Date().getMonth() - new Date(birthdayNameByName.value).getMonth() < 0){
                monthsBySelectorName.innerText =new Date().getMonth() - new Date(birthdayNameByName.value).getMonth() + 12;
                yearByClassName.innerText -= 1;
            } else { 
                monthsBySelectorName.innerText = new Date().getMonth() - new Date(birthdayNameByName.value).getMonth();
            }
            
            yearByClassName.innerText = new Date().getFullYear() - new Date(birthdayNameByName.value).getFullYear();
            
            let hours = new Date().getHours() - new Date(birthdayNameByName.value).getHours();
            hoursByIdName.innerText = hours;
            
            let minutes = new Date().getMinutes() - new Date(birthdayNameByName.value).getMinutes();
            minutesByClassName.innerText = minutes;
            
            let seconds = new Date().getSeconds() - new Date(birthdayNameByName.value).getSeconds();
            secondsByClassName.innerText = seconds;
        }
        setInterval(time,1000)
    }
    
})





if(new Date().getDate() - new Date(birthdayNameByName.value).getDate()<0) {
    dayBySelectorName.innerText = new Date().getDate() - new Date(birthdayNameByName.value).getDate() + 30;
    monthsBySelectorName.innerText -= 1;
} else {
    dayBySelectorName.innerText = new Date().getDate() - new Date(birthdayNameByName.value).getDate(); 
}


 
if (new Date().getMonth() - new Date(birthdayNameByName.value).getMonth() < 0){
    monthsBySelectorName.innerText =new Date().getMonth() - new Date(birthdayNameByName.value).getMonth() + 12;
    yearByClassName.innerText -= 1;
} else { 
    monthsBySelectorName.innerText = new Date().getMonth() - new Date(birthdayNameByName.value).getMonth();
}

yearByClassName.innerText = new Date().getFullYear() - new Date(birthdayNameByName.value).getFullYear();

let hours = new Date().getHours() - new Date(birthdayNameByName.value).getHours();
hoursByIdName.innerText = hours;

let minutes = new Date().getMinutes() - new Date(birthdayNameByName.value).getMinutes();
minutesByClassName.innerText = minutes;

let seconds = new Date().getSeconds() - new Date(birthdayNameByName.value).getSeconds();
secondsByClassName.innerText = seconds;