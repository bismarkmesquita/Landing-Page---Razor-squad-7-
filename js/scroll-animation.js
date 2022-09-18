const scrollAnima = document.querySelector('[data-anima="scroll"]')

var largura = window.screen.width

var n = null
if (largura < 1024) {
    n = 10
} else {
    n = 5.5
}

const metadeWindow = window.innerHeight * n

function animarScroll () {

    const topoItem = scrollAnima.getBoundingClientRect().top

    const itemVisivel = topoItem - metadeWindow < 0

    if (itemVisivel) {
        scrollAnima.classList.add('show-button')
    } else {
        scrollAnima.classList.remove('show-button')
    }
}

window.addEventListener('scroll', animarScroll)