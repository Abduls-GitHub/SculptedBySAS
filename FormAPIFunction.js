document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("sub-button").addEventListener('click', submitMessage);
});


const submitMessage = async () => {


    let clientForm =
        {
            id: Date().toString(),
            clientName: document.getElementById('first-name').value,
            clientSurname: document.getElementById("surname").value,
            clientEmail: document.getElementById("email").value,
            clientMessage: document.getElementById("messageBox").value
        }



    console.log(clientForm);


    await clientResponse(clientForm);
    console.warn('added', { clientForm });

}

const clientResponse = async (myClientForm) => {
    await fetch("https://vjaxow8lkh.execute-api.us-east-1.amazonaws.com/test-stage", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "clientName": myClientForm.clientName,
            "clientEmail": myClientForm.clientEmail,
            "clientMessage": myClientForm.clientMessage,
        })
    })

        .then(response => {
            console.log('res: ', response);
            console.log(`POST: user is added`, { myClientForm });
        })
        .catch(error => console.error(error));
}

// Axios reference to convert to vanilla JS

// const clientResponse = async (myClientForm) => {

//     await axios.post('https://vjaxow8lkh.execute-api.us-east-1.amazonaws.com/test-stage', myClientForm)
//         .then(response => {
//             console.log('res: ', response);
//             console.log(`POST: user is added`, { myClientForm });
//         })

//         .catch(error => console.error(error));
// };

//Links below are for APIs to use for testing and endpoint destination

// https://reqres.in/api/users

// https://vjaxow8lkh.execute-api.us-east-1.amazonaws.com/test-stage







