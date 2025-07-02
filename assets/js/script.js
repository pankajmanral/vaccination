AOS.init()

const covidUsername = document.getElementById("check-covid-username")
const nikNumber = document.getElementById("nik-number")
const checkCovidBtn = document.querySelector(".check-btn")

// error box 
const covidUsernameErr = covidUsername.parentElement.querySelector('.error')
const nikNumberErr = nikNumber.parentElement.querySelector('.error')
const emailErr = document.querySelector('.emailError')

// ------------------------------ 

const email = document.getElementById("email")
const checkEmailBtn = document.querySelector(".send-btn")

// ---------------------------------------------

const usernameRegex = /^[a-zA-Z ]{3,30}$/
const nikNumberRegex = /^[0-9]{1,6}$/
const emailRegex = /^[a-zA-Z0-9_]{1,30}[@]{1}[a-z]{1,10}[.]{1}[a-z]{1,10}$/
const phoneNumberRegex = /^[0-9]{1,10}$/

// -------------- form validation on button click event ----------------------------
checkCovidBtn.addEventListener('click', function (e) {
    e.preventDefault()

    validteOnSubmit(covidUsername, covidUsernameErr, usernameRegex, 3)
    validteOnSubmit(nikNumber, nikNumberErr, nikNumberRegex, 6)

})

checkEmailBtn.addEventListener('click', function(e){

    e.preventDefault()

    validteOnSubmit(email,emailErr, emailRegex )
})

function validteOnSubmit(fieldName, fieldErr, fieldRegex, length) {
    if (fieldName.value.trim() === "") {
        fieldErr.style.display = 'block'
        fieldErr.textContent = 'Field Cannot be empty'
    }
    else if (fieldName.value.length < length) {
        fieldErr.style.display = 'block'
        fieldErr.textContent = `Length cannot be less than ${length} characters`
    }
    else if (!fieldRegex.test(fieldName.value)) {
        fieldErr.style.display = 'block'
        fieldErr.textContent = 'Invalid Input'
    }
    else {
        fieldErr.textContent = ''
        fieldErr.style.display = 'none'
    }
}

// ------------- form validation on input event-------------------------------------
covidUsername.addEventListener("input", function () {
    validateOnInput(covidUsername, covidUsernameErr, usernameRegex, 3)
})

nikNumber.addEventListener("input", function(){
    validateOnInput(nikNumber, nikNumberErr, nikNumberRegex, 6)
})

email.addEventListener("input", function(){
    validateOnInput(email, emailErr, emailRegex)
})

function validateOnInput(fieldName, fieldErr, fieldRegex, length) {
    if (fieldName.value.length < length) {
        fieldErr.style.display = 'block'
        fieldErr.textContent = `Length cannot be less than ${length} characters`
    }
    else if (!fieldRegex.test(fieldName.value)) {
        fieldErr.style.display = 'block'
        fieldErr.textContent = 'Invalid Input'
    }
    else {
        fieldErr.textContent = ''
        fieldErr.style.display = 'none'
    }
}

validateOnFocus(email, emailErr)
validateOnFocus(covidUsername, covidUsernameErr)
validateOnFocus(nikNumber, nikNumberErr)


function validateName(fieldName) {
    fieldName.addEventListener('keypress', function (e) {
        if (!/^[A-Za-z ]$/.test(e.key)) {
            e.preventDefault()
        }
    })
}

validateName(covidUsername)
validateName(patientName)

function validateNumber(fieldName) {
    fieldName.addEventListener("keypress", function (e) {
        if (!/^[0-9]$/.test(e.key)) {
            e.preventDefault()
        }
    })
}

validateNumber(nikNumber)
validateNumber(phoneNumber)

