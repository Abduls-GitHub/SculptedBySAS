const file = "https://my-sbs-plist-bucket.s3.amazonaws.com/SbsPricelist.json"

const fetchJson = async () => {
    const response = await fetch(file);
    const data = await response.json();

    const outerContainer = document.getElementById("prices");

    for (let category of data) {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card");

        const headingContainer = document.createElement("div");
        headingContainer.classList.add("heading-container");

        // Loops through headings
        heading = category.heading;

        // Creates h1 elements for headings in HTML
        const headingElement = document.createElement("h1");
        headingElement.innerText = heading;

        headingContainer.appendChild(headingElement);

        cardContainer.appendChild(headingContainer);

        headingElement.classList.add("categories");

        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container");

        for (let item of category.items) {

            //Creates p elements for data in HTML
            const paragraphElement = document.createElement("p");
            paragraphElement.innerText = item.name + " " + " | " + " " + item.price;
            textContainer.appendChild(paragraphElement);

            paragraphElement.classList.add("services");
        }
        cardContainer.appendChild(textContainer);

        outerContainer.appendChild(cardContainer);
    }
}
fetchJson();