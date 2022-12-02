const inputDate = document.querySelector("#date"),
    boxYear = document.querySelector("#year"),
    boxMonth = document.querySelector("#month"),
    boxDay = document.querySelector("#day"),
    btn = document.querySelector("#btn");
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let birthDate = "", year = "", month = "", day = "", cYear = "", cMonth = "", cDay = "";

let birthMonth, birthDay, birthYear;
let currentDate = new Date();
cYear = currentDate.getFullYear();
cMonth = currentDate.getMonth() + 1;
cDay = currentDate.getDate();
inputDate.setAttribute("max", cYear + "-" + cMonth + "-" + "0" + cDay);

btn.addEventListener("click", () => {
    inputDate.addEventListener("input", () => {
        birthDate = new Date(inputDate.value);
        year = birthDate.getFullYear();
        month = birthDate.getMonth() + 1;
        day = birthDate.getDate();
        birthYear = cYear - year;
    });
    if (year != "" & month != "" & day != "") {
            if (cYear - year == 0 & cMonth - month == 0 & cDay - day == 0) {
                alert("You are not yet born");
                boxYear.innerHTML = "-";
                boxMonth.innerHTML = "-";
                boxDay.innerHTML = "-";
            } else {
                if (cMonth >= month) {
                    birthMonth = cMonth - month;
                } else {
                    birthYear--;
                    birthMonth = (12 + cMonth) - month;
                }

                if (cDay >= day) {
                    birthDay = cDay - day;
                } else {
                    birthMonth--;
                    let days = months[cMonth - 2];
                    birthDay = days + cDay - day;
                }
                boxYear.textContent = birthYear;
                boxMonth.textContent = birthMonth;
                boxDay.textContent = birthDay;
            }
    } else {
        alert("Select your birth Date");
    }
});
