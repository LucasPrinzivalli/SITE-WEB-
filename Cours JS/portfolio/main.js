const lightbox = new SimpleLightbox(".card a")

const options = {
    gutterPixels: 50
}

const filterizr = new Filterizr(".portfolio-elements", options)

let filterItems = document.querySelectorAll(".tab li")
filterItems.forEach(function (filterItem) {
    filterItem.addEventListener("click", function () {
        document.querySelector("li.active").classList.remove("active")
        filterItem.classList.add("active")
    })
})