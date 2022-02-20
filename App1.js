let yearByClassName = document.getElementsByClassName("container__box")[0].firstElementChild;

let monthsBySelectorName = document.querySelector(".container__box--months")

let dayBySelectorName = document.querySelectorAll(".container__box--days")[0]

let hoursByIdName = document.getElementById("hours");

let minutesByClassName = document.getElementsByClassName("container")[0].children[4].firstElementChild;

let secondsByClassName = document.getElementsByClassName("container__box")[5].firstElementChild;
let birthdayInput = document.getElementsByName("birthday")[0];

const container = document.querySelector("#container")

const loading = document.getElementById("loading");
window.addEventListener("load", ()=>{
    loading.style.display = "block";
    setTimeout(()=>{
        loading.style.display = "none";
        container.style.display = "flex"
    }, 1000)

    let H2Elements = document.getElementsByTagName("h2");

    /* for(let i = 0;i<H2Elements.length;i++){
        H2Elements[i].innerHTML = "00";
    } */

    //H2Elements2 = container.querySelectorAll("h2"); //querySelector nod list/array döndürür

    //nodeList.forEach()
    //Array.horEach()

                    /* H2Elements2.forEach(h2element =>{
                        h2element.innerHTML = "__"
                    }); */

    /* H2Elements.forEach(el => {
        el.innerHTML = "__"   H2Elements bir collection oldugundan bu sekilde calismaz. Array a cevirmek gerekir
    }); */

    //1.yöntem 
    /* Array.from(H2Elements).forEach(element => {
        element.innerHTML = "__"
    }); */

    //2.yöntem 
    /* [...H2Elements].forEach(el=>{
        el.innerHTML = "__"
    }) */

    //3.yöntem
    Array.prototype.slice.call(H2Elements).forEach(element => {
        element.innerHTML = "__"
    });

})





let selectBirthday = new Date();
birthdayInput.addEventListener("change", (event)=>{

    selectBirthday = new Date(event.target.value)
    console.log(typeof selectBirthday, selectBirthday);

    if(selectBirthday> new Date()){
        alert("Your date of birth cannot be greater than today!!")
        return;
    }
    document.body.style.backgroundImage = "url(./keyart_s1.jpg)"

    setInterval(updatetime, 1000)
})

const updatetime = () => {
    
    let birthYear = selectBirthday.getFullYear();
    let birthMonth = selectBirthday.getMonth();
    let birthDay = selectBirthday.getDate();
    let birthHour = selectBirthday.getHours();
    let birthMinute = selectBirthday.getMinutes();
    let birthSecond = selectBirthday.getSeconds();

    let today = new Date();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDay = today.getDate();
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();
    let currentSecond = today.getSeconds();
    
    let yearOfAge = currentYear - birthYear;
    let monthOfAge = currentMonth - birthMonth;
    let dayOfAge = currentDay - birthDay;
    let hourOfAge = currentHour - birthHour;
    let minuteOfAge = currentMinute - birthMinute;
    let secondOfAge = currentSecond - birthSecond;


    if(secondOfAge < 0){
        secondOfAge += 60;
        minuteOfAge --;
    }

    if (minuteOfAge < 0) {
        minuteOfAge += 60;
        hourOfAge--;
    }

    if (hourOfAge < 0) {
        hourOfAge += 24;
        dayOfAge--;
    }
    if (dayOfAge < 0) {
        // homework ==> instead of 30 get previous month dayNumber
        dayOfAge += 30;
        monthOfAge--;
    }

    if (monthOfAge < 0) {
        monthOfAge += 12;
        yearOfAge--;
    }

    yearByClassName.innerHTML = yearOfAge.toString().padStart(2, "0")
    monthsBySelectorName.innerHTML = monthOfAge.toString().padStart(2, "0");
    dayBySelectorName.innerHTML = dayOfAge.toString().padStart(2, "0");
    hoursByIdName.innerHTML = hourOfAge.toString().padStart(2, "0");
    minutesByClassName.innerHTML = minuteOfAge.toString().padStart(2, "0");
    secondsByClassName.innerHTML = secondOfAge.toString().padStart(2, "0")

}

























/* birthdayNameByName.addEventListener("change", ()=>{
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
    
}) */


