

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery-container img");
const original = document.querySelector(".full-img");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {

        modal.classList.add("open");
        original.classList.add("open");

        const originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});