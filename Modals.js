
document.addEventListener("DOMContentLoaded", (event) => {
    let modal = document.getElementById("the-modal");

    let bttn = document.getElementById("sub-button");

    let modalBox = document.getElementById("modal-text");

    let refBttn = document.getElementById("refresh-button");

    const fname = document.getElementById("first-name");
    const sname = document.getElementById("surname");
    const eemail = document.getElementById("email");

    const successMessage = () => {
        modalBox.innerHTML = 'Your message has been submitted successfully';
    }

    const errorMessage = () => {
        modalBox.innerHTML = 'Invalid details has been entered';
    }

    refBttn.onclick = () => {
        location.reload();

    }


    let fnameCheck = fname;
    let snameCheck = sname;
    let emailCheck = eemail;

    const validateEmail = (emailCheck) => {
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailCheck.value.match(emailFormat)) {
            return true;
        }
    }


    //Modal popup
    bttn.onclick = () => {

        if (fname.value.length == 0) {

            modal.style.display = "block";
            errorMessage();

        } else if (snameCheck.value.length == 0) {

            modal.style.display = "block";
            errorMessage();

        } else if (!validateEmail(eemail)) {

            modal.style.display = "block";
            errorMessage();
        }

        else {
            modal.style.display = "block";
            successMessage();

        }

    }

    // Close modal
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }

    }


});





