//Create references to the dropdown's
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

const months = ['01 January', '02 February', '03 March', '04 April',
    '05 May', '06 June', '07 July', '08 August', '09 September', '10 October',
    '11 November', '12 December'
];

//adding months to the dropdown
(function populateMonths() {
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "01 January";
})();

let previousDay;

function populateDays(month) {
    //Delete all of the children of the day dropdown
    //if they do exist
    while (daySelect.firstChild) {
        daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    //Get the current year
    let year = yearSelect.value;

    if (month === 'January' || month === 'March' ||
        month === 'May' || month === 'July' || month === 'August' ||
        month === 'October' || month === 'December') {
        dayNum = 31;
    } else if (month === 'April' || month === 'June' ||
        month === 'September' || month === 'November') {
        dayNum = 30;
    } else {
        //Check for a leap year
        if (new Date(year, 1, 29).getMonth() === 1) {
            dayNum = 29;
        } else {
            dayNum = 28;
        }
    }
    //Insert the correct days into the day <select>
    for (let i = 1; i <= dayNum; i++) {
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }
    if (previousDay) {
        daySelect.value = previousDay;
        if (daySelect.value === "") {
            daySelect.value = previousDay - 1;
        }
        if (daySelect.value === "") {
            daySelect.value = previousDay - 2;
        }
        if (daySelect.value === "") {
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears() {
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Make the previous 100 years be an option
    for (let i = 0; i < 101; i++) {
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function() {
    populateDays(monthSelect.value);
}
monthSelect.onchange = function() {
    populateDays(monthSelect.value);
}
daySelect.onchange = function() {
    previousDay = daySelect.value;
}

//getting the inputs from html
const wrapper = document.querySelector('.form')
const form = wrapper.querySelectorAll('.select-form')
const gender = document.querySelectorAll('input[name="gender"]')
const submitInput = document.querySelector('input[type="submit"]')
const result = document.getElementById('results')

//date form

function getDataForm(e) {
    // e.preventDefault()
    var formData = new FormData(form[0])

    let report = `${formData.get('day')}  ${formData.get('month')} ${formData.get('year')}`


}

//Gender selector
let findSelected = () => {
    let selected = document.querySelector('input[name="gender"]:checked').value
}
gender.forEach(gender => {
    gender.addEventListener("change", findSelected)
})


var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

const genders = document.querySelectorAll('input[name="gender"]')

function validate() {
    if (genders[0].checked == false && genders[1].checked == false) {
        alert("You must select male or female");
        return false;
    } else {
        return true;
    }

}


function calculateDayValue() {
    var formData = new FormData(form[0])
    year = formData.get('year');
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(formData.get('month'));
    DD = parseInt(formData.get('day'));
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    return (Math.floor(d));

}

function getGender() {
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true) {
        var gender = "male";
    } else if (genders[1].checked == true) {
        var gender = "female";
    } else {
        return false;
    }
    result.classList.remove('hidden')
    switch (gender) {
        case "male":
            if (dayValue == 1) {
                result.textContent = ("You were born on " + dayNames[0] + " and Your akan name is " + maleNames[0] + "!");
            } else if (dayValue == 2) {
                result.textContent = ("You were born on " + dayNames[1] + " and Your akan name is " + maleNames[1] + "!");
            } else if (dayValue == 3) {
                result.textContent = ("You were born on " + dayNames[2] + " and Your akan name is " + maleNames[2] + "!");
            } else if (dayValue == 4) {
                result.textContent = ("You were born on " + dayNames[3] + " and Your akan name is " + maleNames[3] + "!");
            } else if (dayValue == 5) {
                result.textContent = ("You were born on " + dayNames[4] + " and Your akan name is " + maleNames[4] + "!");
            } else if (dayValue == 6) {
                result.textContent = ("You were born on " + dayNames[5] + " and Your akan name is " + maleNames[5] + "!");
            } else if (dayValue == -0) {
                result.textContent = ("You were born on " + dayNames[6] + " and Your akan name is " + maleNames[6] + "!");
            }
            break;
        case "female":
            if (dayValue == 1) {
                result.textContent = ("You were born on " + dayNames[0] + " and Your akan name is  " + femaleNames[0] + "!");
            } else if (dayValue == 2) {
                result.textContent = ("You were born on " + dayNames[1] + " and Your akan name is " + femaleNames[1] + "!");
            } else if (dayValue == 3) {
                result.textContent = ("You were born on " + dayNames[2] + " and Your akan name is " + femaleNames[2] + "!");
            } else if (dayValue == 4) {
                result.textContent = ("You were born on " + dayNames[3] + " and Your akan name is " + femaleNames[3] + "!");
            } else if (dayValue == 5) {
                result.textContent = ("You were born on " + dayNames[4] + " and Your akan name is " + femaleNames[4] + "!");
            } else if (dayValue == 6) {
                result.textContent = ("You were born on " + dayNames[5] + " and Your akan name is " + femaleNames[5] + "!");
            } else if (dayValue == -0) {
                result.textContent = ("You were born on " + dayNames[6] + " and Your akan name is " + femaleNames[6] + "!");
            }
            break
        default:

    }
}

function findName(e) {
    e.preventDefault()
    validate();
    getDataForm();
    findSelected();
    dayValue = calculateDayValue();

    getGender();
}

//Submit button
document.addEventListener('DOMContentLoaded', function() {
    submitInput.addEventListener('click', findName, false)
}, false)