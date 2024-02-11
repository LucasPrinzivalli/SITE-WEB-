let title =document.getElementById('Title')
console.log(title)

title.innerHTML = "IIM"

let image = document.getElementById('image')
image.src = "IIM image.png"
image.alt = "IIM Digital School"

let mainTitle = document.querySelector('#main-title')
console.log(mainTitle)

let subtitles = document.querySelectorAll('.title')
console.log(subtitles)

mainTitle.addEventListener('click', function () {
    //if (this.classList.contains('red')) {
    //this.classList.remove('red')
    //} else {
    // this.classList.add('red')

    
    this.classList.toggle('red')
})
