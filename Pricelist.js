const file = "https://my-sbs-plist-bucket.s3.amazonaws.com/SbsPricelist.json"

fetchJson = async () => {
    const response = await fetch(file);
    const data = await response.json();

    const outerContainer = document.getElementById("prices");

    for (let i = 0; i < data.length; i++) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card");

        const headingContainer = document.createElement("div");
        headingContainer.classList.add("heading-container");

        // Loops through headings
        heading = data[i].heading;

        // Creates h1 elements for headings in HTML
        const headingElement = document.createElement("h1");
        headingElement.innerText = heading;

        headingContainer.appendChild(headingElement);

        cardContainer.appendChild(headingContainer);

        headingElement.classList.add("categories");

        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container")

        for (let j = 0; j < data[i].items.length; j++) {

            // Loops through data in items array
            item = data[i].items[j].name;
            price = data[i].items[j].price;

            //Creates p elements for data in HTML
            const paragraphElement = document.createElement("p");
            paragraphElement.innerText = item + " " + " | " + " " + price;
            textContainer.appendChild(paragraphElement);

            paragraphElement.classList.add("services");
        }
        cardContainer.appendChild(textContainer);

        outerContainer.appendChild(cardContainer);
    }
}
fetchJson();