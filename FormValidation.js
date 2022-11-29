const form = document.getElementById("form");
let fullname = document.getElementById("first-name");
let surname = document.getElementById("surname");
let email = document.getElementById("email");

document.addEventListener('DOMContentLoaded', (event) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
    });
});


const checkInputs = () => {

    const fullnameValue = fullname.value;
    const surnameValue = surname.value;
    const emailValue = email.value;

    if (fullnameValue === '') {
        setErrorFor(fullname, 'Name can not be blank');
    } else {
        setSuccessFor(fullname);
    }

    if (surnameValue === '') {
        setErrorFor(surname, 'Surname can not be blank');
    } else {
        setSuccessFor(surname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!validEmail(emailValue)) {
        setErrorFor(email, 'Email is invalid');
    } else {
        setSuccessFor(email);
    }

}

const setErrorFor = (input, message)  => {
    console.log("inSetError function");
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";


}

const validEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}